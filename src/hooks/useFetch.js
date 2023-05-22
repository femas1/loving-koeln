import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
    const abortController = new AbortController();

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(endpoint, { signal: abortController.signal })
      .then(res => {
          if(!res.ok){
            throw Error("I couldn't find the data")
          } 
          return res.json();
      })
      .then(data => {
            setData(data);
            setIsLoading(false);
            setError(null);
      })
      .catch((e) => {
        if (e.name === 'AbortError'){
          console.log('fetch aborted');
        } else {
            setError(e.message);
            setIsLoading(false);
            setData(null);
          }
      });

      return () => abortController.abort;
  }, [endpoint])

  return {data, isLoading, error};
}

export default useFetch;
