import React from "react";
import { 
  Heading, 
  Text, 
  Flex, 
  Spinner, 
  Link,  
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import '../index.css' 
import { useEffect, useState } from "react";

const BlogList = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch('http://localhost:3000/blsogs')
      .then(res => {
          if(!res.ok){
            throw Error("I couldn't find the blogs")
          } 
          return res.json();
      })
      .then(data => {
            setBlogs(data);
            setIsLoading(false);
            setError(null);
      })
      .catch((e) => {
            setError(e.message);
            setIsLoading(false);
      })
  }, [])

  return (
    <div className="blog-list">

            {error && <Alert status="error">
                          <AlertIcon></AlertIcon>
                          <AlertTitle>Houston, we've got a problem.</AlertTitle>
                          <AlertDescription>{error}</AlertDescription>
                            
                      </Alert>}
            {isLoading && <Heading mt={10} p={5}>Loading blogs...<Spinner size='xl' /></Heading>}
            
            {blogs && blogs.map(blog => (
                    <Flex key={blog.id} direction="column">                   
                      <Heading p="3">{blog.title}</Heading>
                      <Text p="5">{blog.text}</Text>
                      <Link p="3">{blog.author}</Link>
                    </Flex>
                )
            )}
    </div>
  )
}

export default BlogList;
