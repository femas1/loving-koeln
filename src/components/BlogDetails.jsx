import { Heading, Text, Spinner, Flex, Link, Tag, Avatar, Card, CardHeader, CardBody } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useContentfulApi from "../hooks/useContentfulApi";

const BlogDetails = () => {
    const { id } = useParams();
    const { newBlogs: blog, isLoading, error } = useContentfulApi(id)

  return (
    <div className="blog-detail">
      { isLoading && <Heading mt={10} p={5}>Loading article...<Spinner size='xl' /></Heading>} 

      { blog && (
        <Card 
            
            key={blog[0].fields.id} 
            mt={5}
            variant="elevated"
            bgColor="black.50"
            color="blackAlpha.800"
        >

          <CardHeader>
              <Heading size='xl'>{blog[0].fields.title}</Heading>
            </CardHeader>
          <CardBody>
              <Text pt="5" pb="5">{blog[0].fields.text}</Text>
                <Text>Written by 
                  <Link p={"2"}>
                    <Tag 
                        p="2"
                        colorScheme="black"
                    >
                        {blog[0].fields.author}</Tag>
                  </Link>
              </Text>
          </CardBody>
                     
        </Card>
      )}
    </div>
  )
}

export default BlogDetails;
