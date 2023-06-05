import { Link as RouteLink } from 'react-router-dom';
import { Heading, Stack, HStack, VStack, Link, Card, CardHeader, CardBody, SimpleGrid, CardFooter, Text, Avatar, Box, Flex, IconButton } from '@chakra-ui/react'
import useContentfulApi from '../hooks/useContentfulApi';
import { useParams } from "react-router-dom";

const AuthorList = () => {
  const { authors, isLoading, error } = useContentfulApi();
  // console.log(authors[0].sys);
  return (

    <Stack direction={['column', 'row']} spacing={4} my={4}>
      {authors && authors.map((author) => (
        <Link
          as={RouteLink}
          to={`/blogs/authors/${author.sys.id}`}
          key={author.fields.id}
          color={"blackAlpha.700"}
        >

          <Card >
            <CardHeader>
              <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar name={author.fields.authorName} />

                  <Box>
                    <Heading size='sm'>{author.fields.authorName}</Heading>
                    <Text>Author, Copywriter</Text>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
          </Card>

        </Link>
      ))}

    </Stack>
  )
}

export default AuthorList;
