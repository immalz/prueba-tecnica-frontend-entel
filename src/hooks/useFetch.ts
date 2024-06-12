import { useEffect, useState } from 'react';
import { User } from '../interfaces/User';

export function useFetch(url: string) {

    const [data, setData] = useState([] as User[]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch(url)
          .then(response => response.json())
          .then((data: User[]) => {
            console.log(data);
            setData(data);
          })
          .catch((error) => setError(error))
          .finally(() => setLoading(false));

      }, []);

      return { data, loading, error };
}