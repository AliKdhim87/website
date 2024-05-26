export interface SanityGraphqlApiUrlParams {
  projectId?: string;
  dataset?: string;
  apiVersion?: string;
}

export const sanityGraphqlAPIUrl = ({ apiVersion, dataset, projectId }: SanityGraphqlApiUrlParams) => {
  if (!projectId && !dataset && !apiVersion) {
    throw new Error('Missing required parameters');
  }
  return `https://${projectId}.api.sanity.io/${apiVersion}/graphql/${dataset}/default`;
};
