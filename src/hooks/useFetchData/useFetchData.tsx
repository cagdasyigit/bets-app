import { useCallback, useState } from 'react';
import useHttpRequest from '../useHttpRequest';
import { IData } from '../../providers/CheckoutProvider/types';
import { AxiosError } from 'axios';

export interface IUseFetchData {
  fetch: () => Promise<void | IData[]>;
  loading: boolean;
  error: AxiosError | undefined;
}

const useFetchData = (): IUseFetchData => {
  const httpRequest = useHttpRequest();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | undefined>();

  const fetch = useCallback(() => {
    const url = `https://nesine-case-study.onrender.com/bets`;

    setLoading(true);

    return httpRequest<unknown, IData[]>(url)
      .then((response) => {
        return response?.data;
      })
      .catch((error: AxiosError) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { fetch, loading, error };
};

export default useFetchData;
