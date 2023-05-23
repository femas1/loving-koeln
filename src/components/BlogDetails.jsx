import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams()

  return (
    <Heading>Blog with the id { id }</Heading>
  )
}

export default BlogDetails;
