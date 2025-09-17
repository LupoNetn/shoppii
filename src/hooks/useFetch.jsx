import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false; // prevents state update if unmounted

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("An error occurred while fetching data");
        }
        const json = await res.json();
        if (!ignore) {
          // some APIs return products inside an object
          setData(json.products || json);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
          setData([]);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
