import { useState, useEffect } from "react";
import { createClient } from 'contentful';

const client = createClient({
    space: 'kmkh4m6n0xi7',
    environment: 'master',
    accessToken: 'DXV1XuNI-9k6FK9qWIn6bY3onR5T1VEGauAQ6Ch-VbA'
  })

const useContentfulApi = (blogId, authorId) => {

const [newBlogs, setNewBlogs] = useState(null);
const [authors, setAuthors] = useState(null);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(true);


   useEffect(() => {
      client.getEntries({content_type: 'blogs', 'fields.id': blogId})
      .then((res) => {
          setNewBlogs(res.items);
          setIsLoading(false);
          // setError(null);
          return client.getEntries({content_type: 'authors', 'sys.id': authorId})
      })
      .then(authorResponse => {
          setAuthors(authorResponse.items);
          setIsLoading(false);
          setError(null);
      })
      .catch((error) => {
        console.log(error)
        setError(error.message)
      }) 
    }, [blogId, authorId])

  return {newBlogs, authors, error, isLoading}
}

export default useContentfulApi;