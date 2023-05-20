import { Heading, Text, Flex, Spinner, Link } from "@chakra-ui/react";
import '../index.css' 
import { useEffect, useState } from "react";

const BlogList = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetch('http://localhost:3000/blogs')
      .then(res => res.json())
      .then(data => {
            setBlogs(data)
            setIsLoading(false)
      });
  }, [])

  return (
    <div className="blog-list">

      {isLoading && <Heading mt={10} p={5}>Loading blogs...    <Spinner size='xl' /></Heading>}

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
