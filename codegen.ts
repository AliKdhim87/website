import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
  schema: process.env.SCHEMA_URL,
  documents: ['queries/**/*.graphql.ts'],
  generates: {
    './generated/': {
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
