import { useEffect, useState } from 'react';

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
  data: TDataType | null;
  error: string;
  isLoading: boolean;
  makeRequest: (args?: MakeRequestArgs) => Promise<void>;
  refetch: () => void;
}

const useFetch = <TDataType>({
  endpoint,
  method,
  immediate,
}: UseFetchArgs): UseFetchReturn<TDataType> => {
  const [data, setData] = useState<TDataType | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const makeRequest = async (args?: MakeRequestArgs) => {
    setIsLoading(true);
    fetch((args?.endpoint || endpoint) + (args?.query || ''), {
      method: args?.method || method || 'GET',
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'X-Auth-Token': '61d4f882-8212-42e1-9769-d86300d31074',
        'X-Organization-Id': '20540',
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
        setIsLoading(false);
        return true;
      });
  };

  useEffect(() => {
    if (immediate) {
      makeRequest();
    }
  }, []);

  const refetch = () => {
    makeRequest();
  };

  return {
    data,
    error,
    isLoading,
    makeRequest,
    refetch,
  };
};

export default useFetch;
