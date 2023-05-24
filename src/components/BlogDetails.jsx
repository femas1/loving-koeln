import { Heading, Text, Spinner, Flex, Link } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Link as RouteLink } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch(`http://localhost:3000/blogs/${id}`)

  return (
    <div className="blog-detail">
      { isLoading && <Heading mt={10} p={5}>Loading article...<Spinner size='xl' /></Heading>}
      { error && { error }}
      { blog && (
        <Flex key={id} direction="column">
                      <Link as={ RouteLink } to={`/blogs/${blog.id}`}><Heading p="3">{blog.title}</Heading></Link>
                      <Text p="5">{blog.text}</Text>
                      <Link p="3">Written by {blog.author}</Link>
        </Flex>
      )}
    </div>
  )
}

export default BlogDetails;
