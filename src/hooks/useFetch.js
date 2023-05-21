import { useEffect, useState } from "react";

const useFetch = (endpoint) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(endpoint)
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
            setError(e.message);
            setIsLoading(false);
      })
  }, [endpoint])

  return {data, isLoading, error};
}

export default useFetch;
