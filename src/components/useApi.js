import React, { useState, useEffect } from "react";

const useApi = (name) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((resp) => resp.json())
      .then((resp) => setData(resp.data || resp))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
    return () => {};
  }, [name]);
  return { data, error, loading };
};

export default useApi;
