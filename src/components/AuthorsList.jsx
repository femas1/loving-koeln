import { Link as RouteLink } from 'react-router-dom';
import { Heading, Stack, Link, Card, CardHeader, Text, Avatar, Box, Flex } from '@chakra-ui/react'
import useContentfulApi from '../hooks/useContentfulApi';

const AuthorList = () => {
  const { authors, isLoading, error } = useContentfulApi();
  return (
<Flex minHeight="80vh">
    <Stack direction={['column', 'row']} spacing={4} my={4} flex="1">
      {authors && authors.map((author) => (
        <Link
          as={RouteLink}
          to={`/blogs/authors/${author.sys.id}`}
          key={author.sys.id}
          color={"blackAlpha.700"}
        >

          <Card>
            <CardHeader>
              <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar name={author.fields.authorName} />

                  <Box >
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
</Flex>
  )
}

export default AuthorList;
