import { Heading, Text, Spinner, Flex, Link } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useContentfulApi from "../hooks/useContentfulApi";

const BlogDetails = () => {
    const { id } = useParams();
    const { newBlogs: blog, isLoading, error } = useContentfulApi(id)

  return (
    <div className="blog-detail">
      { isLoading && <Heading mt={10} p={5}>Loading article...<Spinner size='xl' /></Heading>} 

      { blog && (
        <Flex key={blog[0].fields.id} direction="column">
                      <Heading p="3">{blog[0].fields.title}</Heading>
                      <Text p="5">{blog[0].fields.text}</Text>
                      <Link p="3">Written by {blog[0].fields.author}</Link>
        </Flex>
      )}
    </div>
  )
}

export default BlogDetails;
