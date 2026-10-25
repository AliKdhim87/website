import { readFile } from 'node:fs/promises';

interface PullRequestEventPayload {
  pull_request?: {
    number: number;
    head: {
      sha: string;
    };
  };
}

interface GitHubIssueComment {
  id: number;
  body?: string;
}

const getRequiredEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

const githubRequest = async <T>(url: string, token: string, init?: RequestInit): Promise<T> => {
  const response = await fetch(url, {
    ...init,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...init?.headers,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`GitHub API error (${response.status} ${response.statusText}): ${errorText}`);
  }

  return (await response.json()) as T;
};

const commentPreviewUrlOnPr = async (): Promise<void> => {
  const token = getRequiredEnv('GITHUB_TOKEN');
  const repository = getRequiredEnv('GITHUB_REPOSITORY');
  const eventPath = getRequiredEnv('GITHUB_EVENT_PATH');
  const previewUrl = getRequiredEnv('PREVIEW_URL');

  const rawEvent = await readFile(eventPath, 'utf8');
  const { pull_request: pullRequest } = JSON.parse(rawEvent) as PullRequestEventPayload;

  if (!pullRequest) {
    process.stdout.write('No pull_request payload found; skipping PR comment.\n');
    return;
  }

  const marker = '<!-- vercel-preview-comment -->';
  const body = [
    marker,
    '### 🚀 Vercel Preview Deployment',
    '',
    '| Name | Link |',
    '| :--- | :--- |',
    `| **Latest commit** | \`${pullRequest.head.sha}\` |`,
    `| **Preview URL** | ${previewUrl} |`,
  ].join('\n');

  const baseApiUrl = `https://api.github.com/repos/${repository}`;
  const commentsUrl = `${baseApiUrl}/issues/${pullRequest.number}/comments?per_page=100`;

  const comments = await githubRequest<GitHubIssueComment[]>(commentsUrl, token);
  const existingComment = comments.find((comment) => comment.body?.includes(marker));

  if (existingComment) {
    await githubRequest<GitHubIssueComment>(`${baseApiUrl}/issues/comments/${existingComment.id}`, token, {
      method: 'PATCH',
      body: JSON.stringify({ body }),
    });
    process.stdout.write(`Updated existing PR preview comment #${existingComment.id}\n`);
    return;
  }

  const created = await githubRequest<GitHubIssueComment>(
    `${baseApiUrl}/issues/${pullRequest.number}/comments`,
    token,
    {
      method: 'POST',
      body: JSON.stringify({ body }),
    },
  );
  process.stdout.write(`Created PR preview comment #${created.id}\n`);
};

await commentPreviewUrlOnPr();
