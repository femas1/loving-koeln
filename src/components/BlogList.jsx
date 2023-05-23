import React from "react";
import useFetch from "../hooks/useFetch";
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
import { Link as RouteLink } from 'react-router-dom';
import '../index.css' 

const BlogList = () => {

   const { data: blogs, error, isLoading } = useFetch('http://localhost:3000/blogs')

  return (
    <div className="blog-list">

            {error && <Alert status="error">
                          <AlertIcon></AlertIcon>
                          <AlertTitle>Error.</AlertTitle>
                          <AlertDescription>{error}</AlertDescription>
                            
                      </Alert>}
            {isLoading && <Heading mt={10} p={5}>Loading blogs...<Spinner size='xl' /></Heading>}
            
            {blogs && blogs.map(blog => (
                    <Flex key={blog.id} direction="column">                   
                    <Link as={ RouteLink } to={`/blogs/${blog.id}`}><Heading p="3">{blog.title}</Heading></Link>
                      <Text p="5">{blog.text}</Text>
                      <Link p="3">{blog.author}</Link>
                    </Flex>
                )
            )}
    </div>
  )
}

export default BlogList;
