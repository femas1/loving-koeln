import { Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useContentfulApi from '../hooks/useContentfulApi';

const AuthorDetails = () => {

    const { author } = useParams();
    const {newBlogs, error, isLoading} = useContentfulApi(author);

  return (
    <>
    {newBlogs && newBlogs.map((newBlog) => (
        <Heading key={newBlog.fields.author} color={'blackAlpha.800'}>{newBlog.fields.author}</Heading>
        ))}
    </>
  )
}

export default AuthorDetails;
