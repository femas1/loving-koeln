import { Heading, Text, Spinner, Flex, Link, Tag, Avatar } from "@chakra-ui/react";
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
                      <Heading mt="5">{blog[0].fields.title}</Heading>
                      <Text pt="5" pb="5">{blog[0].fields.text}</Text>
                      <Text>Written by 
                        <Link p={"2"}>
                          <Tag p="2">{blog[0].fields.author}</Tag>
                        </Link>
                      </Text>
        </Flex>
      )}
    </div>
  )
}

export default BlogDetails;
