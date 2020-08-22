import { useState, useEffect } from "react";

function useQuery(asyncFunction) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doFetch = async () => {
      console.log(setData);
      try {
        const data = await asyncFunction();
        setData(data);
        setError(false);
        setLoading(true);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    doFetch();
  }, [asyncFunction]);

  return { data, loading, error };
}
export default useQuery;
