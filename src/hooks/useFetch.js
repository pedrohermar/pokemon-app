import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getApiData = async (url) => {
    try {
      const result = await fetch(url);
      const resultJSON = await result.json();
      setData(resultJSON);
      setError(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApiData(url);
  }, [url]);

  return { data, loading, error, getApiData };
};
