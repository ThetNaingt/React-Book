import React, { useEffect, useState } from "react";

const useFetch = (fetchFun, arg) => {
  const [data, setData] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    (async () => {
      const data = await fetchFun(arg);
      try {
        setData({
          loading: false,
          error: null,
          data: data,
        });
      } catch (e) {
        setData({
          error: e.message,
          loading: false,
          data: null,
        });
      }
    })();
  }, []);

  return data;
};

export default useFetch;
