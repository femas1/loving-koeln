import { Heading, Text, Flex, Box, Container, Link } from "@chakra-ui/react";
import '../index.css' 
import { useEffect, useState } from "react";

const BlogList = () => {

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])

  return (
    <div className="blog-list">

            {blogs.map(blog => (
                <>
                    <Heading>{blog.title}</Heading>
                    <Text>{blog.text}</Text>
                    <Link>{blog.author}</Link>
                </>
                )
            )}
    </div>
  )
}

export default BlogList
