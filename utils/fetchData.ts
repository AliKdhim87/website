import { draftMode } from 'next/headers';
import wretch from 'wretch';

type Variables = {
  [key: string]: string | null;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FetchDataParams<T> = {
  query: string;
  variables?: Variables;
  options?: RequestInit;
};

export async function fetchData<T>({ query, variables, options }: FetchDataParams<T>) {
  try {
    const requestOptions = options || {};

    if (!requestOptions.cache) {
      requestOptions.cache = draftMode().isEnabled ? 'no-store' : 'force-cache';
    }

    const response = await wretch(process.env.SCHEMA_URL, requestOptions).post({
      query,
      variables,
    });
    const { data } = await response.json<{ data: T }>();
    return data;
  } catch (error) {
    throw new Error('Server error');
  }
}
