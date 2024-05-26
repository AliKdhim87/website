import wretch from 'wretch';

type Variables = {
  [key: string]: string | null;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FetchDataParams<T> = {
  query: string;
  variables?: Variables;
  options?: RequestInit;
  apiUrl: string;
  isDraftMode?: boolean;
};

export async function fetchData<T>({ query, variables, options, apiUrl, isDraftMode }: FetchDataParams<T>) {
  try {
    const requestOptions = options || {};

    if (!requestOptions.cache) {
      requestOptions.cache = isDraftMode ? 'no-store' : 'force-cache';
    }
    const { data } = await wretch(apiUrl, requestOptions)
      .post({
        query,
        variables,
      })
      .json((json) => json);
    return data as T;
  } catch (error) {
    throw new Error('Server error');
  }
}
