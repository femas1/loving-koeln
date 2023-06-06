import { Heading, Text, Spinner, Flex, Link, Tag, Avatar, Card, CardHeader, CardBody } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Link as RouteLink } from 'react-router-dom';
import useContentfulApi from "../hooks/useContentfulApi";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <Text pt="5" pb="5">{children}</Text>
    }
  }
}

const BlogDetails = () => {
    const { id } = useParams();
    const { newBlogs: blog, isLoading } = useContentfulApi(id);
  
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
              {documentToReactComponents(blog[0].fields.body, RICHTEXT_OPTIONS)}
                <Text>Written by 
                  <Link 
                        p={"2"}
                        as={ RouteLink } 
                        to={`/blogs/authors/${blog[0].fields.author.sys.id}`}
                  >
                    <Tag 
                        p="2"
                        colorScheme="black"
                    >
                        {blog[0].fields.author.fields.authorName}
                        </Tag>
                  </Link>
              </Text>
          </CardBody>
                     
        </Card>
      )}
    </div>
  )
}

export default BlogDetails;
