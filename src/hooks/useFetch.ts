import { useEffect, useState } from 'react';
import { ENV } from '../utils/constants';

interface UseFetchArgs {
  endpoint: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  immediate?: boolean;
}

interface MakeRequestArgs {
  body?: unknown;
  query?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint?: string;
}

interface UseFetchReturn<TDataType> {
  data?: TDataType;
  error: string;
  makeRequest: (args?: MakeRequestArgs) => Promise<void>;
}

const useFetch = <TDataType>({
  endpoint,
  method,
  immediate,
}: UseFetchArgs): UseFetchReturn<TDataType> => {
  const [data, setData] = useState<TDataType | undefined>();
  const [error, setError] = useState('');

  const makeRequest = async (args?: MakeRequestArgs): Promise<void> =>
    new Promise((resolve) => {
      fetch((args?.endpoint || endpoint) + (args?.query || ''), {
        method: args?.method || method || 'GET',
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'X-Auth-Token': ENV.AUTH_TOKEN,
          'X-Organization-Id': ENV.ORG_ID,
        },
        ...(!!args?.body && {
          body: JSON.stringify(args.body),
        }),
      })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('Something went wrong');
          }
          return response.json();
        })
        .then(setData)
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          resolve();
        });
    });

  useEffect(() => {
    if (immediate) {
      makeRequest();
    }
  }, []);

  return {
    data,
    error,
    makeRequest,
  };
};

export default useFetch;
