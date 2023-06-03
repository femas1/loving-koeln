import { Link as RouteLink } from 'react-router-dom';
import { Heading, Link, Card, CardHeader, CardBody, SimpleGrid, CardFooter, Text, Avatar, Box, Flex, IconButton } from '@chakra-ui/react'
import useContentfulApi from '../hooks/useContentfulApi';



const AuthorList = () => {
  const { newBlogs, isLoading, error } = useContentfulApi();

  return (

    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' my={4}>
    {newBlogs && newBlogs.map((newBlog) => (
          <Link 
                as={ RouteLink } 
                to={`/blogs/authors/${newBlog.fields.id}`} 
                key={newBlog.fields.id} 
                color={"blackAlpha.700"}
          >

<Card >
<CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name={newBlog.fields.author[0]} />

        <Box>
          <Heading size='sm'>{newBlog.fields.author[0]}</Heading>
          <Text>Author, Copywriter</Text>
        </Box>
      </Flex>
    </Flex>
  </CardHeader>
          {/* <Heading 
                  size="md" 
                  key={newBlog.fields.author[0]} 
                  color={'blackAlpha.800'}>{newBlog.fields.author[0]}
          </Heading> */}
      </Card>
          
          </Link>
    ))}

    </SimpleGrid>
  )
}

export default AuthorList;
