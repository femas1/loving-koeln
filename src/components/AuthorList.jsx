import { Link as RouteLink } from 'react-router-dom';
import { Heading, Link } from '@chakra-ui/react';
import useContentfulApi from '../hooks/useContentfulApi';



const AuthorList = () => {
  const { newBlogs, isLoading, error } = useContentfulApi();

  return (
    <>
    {newBlogs && newBlogs.map((newBlog) => (
          <Link 
                as={ RouteLink } 
                to={`/blogs/authors/${newBlog.fields.id}`} 
                key={newBlog.fields.id} 
                color={"blackAlpha.700"}
          >{newBlog.fields.author[0]}
          </Link>
    ))}
    </>
  )
}

export default AuthorList;
