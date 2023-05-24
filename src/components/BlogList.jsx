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

import { createClient } from 'contentful';

const client = createClient({
  space: 'kmkh4m6n0xi7',
  environment: 'master',
  accessToken: 'DXV1XuNI-9k6FK9qWIn6bY3onR5T1VEGauAQ6Ch-VbA'
})

client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error);

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
