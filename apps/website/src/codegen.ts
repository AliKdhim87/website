import { CodegenConfig } from '@graphql-codegen/cli';
import { config as dotenvConfig } from 'dotenv';

import { sanityGraphqlAPIUrl } from './utils';

dotenvConfig();

const apiUrl = sanityGraphqlAPIUrl({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_GRAPHQL_API_VERSION,
});

const config: CodegenConfig = {
  schema: apiUrl,
  documents: ['src/queries/**/*.graphql.ts'],
  generates: {
    './src/generated/': {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        {
          add: {
            content: '// @ts-nocheck',
          },
        },
      ],
    },
  },
};

export default config;
