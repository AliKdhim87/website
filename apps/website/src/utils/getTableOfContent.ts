import wretch from 'wretch';

export type GetTableOfContentParameters = {
  slug: string;
  url: string | (() => string);
  query?: string;
};
export const getTableOfContent = async ({ slug, url, query }: GetTableOfContentParameters) => {
  if (!query && !url && !slug) {
    throw new Error('Missing parameters');
  }
  const resolvedUrl = typeof url === 'function' ? url() : url;
  const { result } = await wretch(resolvedUrl, {
    caches: 'force-cache',
  })
    .post({
      query,
      params: { slug },
    })
    .json((json) => json);

  return result;
};
