import { execFileSync } from 'node:child_process';
import { appendFile } from 'node:fs/promises';

const getRequiredEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

const deployToVercel = async (): Promise<void> => {
  const vercelToken = getRequiredEnv('VERCEL_TOKEN');
  const vercelOrgId = getRequiredEnv('VERCEL_ORG_ID');
  const { GITHUB_EVENT_NAME = '', GITHUB_REF = '', GITHUB_OUTPUT } = process.env;

  const isProduction = GITHUB_EVENT_NAME === 'push' && GITHUB_REF === 'refs/heads/main';

  const args = [
    'deploy',
    ...(isProduction ? ['--prod'] : []),
    '--yes',
    '--token',
    vercelToken,
    '--scope',
    vercelOrgId,
  ];

  const output = execFileSync('vercel', args, {
    encoding: 'utf8',
    env: process.env,
    stdio: ['ignore', 'pipe', 'inherit'],
  });

  const deploymentUrl = output.trim().split(/\r?\n/).at(-1)?.trim() ?? '';
  if (!deploymentUrl.startsWith('https://')) {
    throw new Error(`Unexpected Vercel deployment output: ${output}`);
  }

  process.stdout.write(`Deployed to Vercel (${isProduction ? 'Production' : 'Preview'}): ${deploymentUrl}\n`);

  if (GITHUB_OUTPUT) {
    await appendFile(GITHUB_OUTPUT, `url=${deploymentUrl}\n`, 'utf8');
  }
};

await deployToVercel();
