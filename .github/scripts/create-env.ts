import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const {
  SANITY_STUDIO_READ_TOKEN = '',
  SANITY_DATASET = '',
  SANITY_PROJECT_ID = '',
  SANITY_GRAPHQL_API_VERSION = '',
  SANITY_GROQ_API_VERSION = '',
  SITE_URL = '',
  NEXT_PUBLIC_SENTRY_DSN = '',
  SENTRY_PROJECT = '',
  SENTRY_AUTH_TOKEN = '',
} = process.env;

const envEntries = {
  DEBUG: 'false',
  SANITY_STUDIO_READ_TOKEN,
  SANITY_DATASET,
  SANITY_PROJECT_ID,
  SANITY_GRAPHQL_API_VERSION,
  SANITY_GROQ_API_VERSION,
  SITE_URL,
  NEXT_PUBLIC_SENTRY_DSN,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
} as const;

const createEnvFile = async (): Promise<void> => {
  const content = Object.entries(envEntries)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

  const envFilePath = resolve(process.cwd(), 'apps/website/.env');
  await writeFile(envFilePath, `${content}\n`, 'utf8');
  process.stdout.write(`Created ${envFilePath}\n`);
};

await createEnvFile();
