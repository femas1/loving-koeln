import { useState, useEffect } from "react";
import { createClient } from 'contentful';

const client = createClient({
    space: 'kmkh4m6n0xi7',
    environment: 'master',
    accessToken: 'DXV1XuNI-9k6FK9qWIn6bY3onR5T1VEGauAQ6Ch-VbA'
  })

const useContentfulApi = () => {

const [newBlogs, setNewBlogs] = useState(null);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(true);


   useEffect(() => {
      client.getEntries()
      .then((res) => {
          setNewBlogs(res.items);
          setIsLoading(false);
          // setError(null);
      })
      .catch((error) => {
        console.log(error)
        setError(error.message)
      }) 
    }, [])

  return {newBlogs, error, isLoading}
}

export default useContentfulApi;