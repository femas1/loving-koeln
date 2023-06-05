import { Box, Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useContentfulApi from '../hooks/useContentfulApi';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <Text color="blackAlpha.700" pb="5">{children}</Text>
    }
  }
}

const AuthorDetails = () => {

    const { author } = useParams();
    const {authors, error, isLoading} = useContentfulApi();

  return (
    <div className='author-detail'>
    {authors && authors.map((author) => (
             <Box>
             <Heading my={5} key={author.sys.id} color={'blackAlpha.800'}>{author.fields.authorName}</Heading>
             {documentToReactComponents(author.fields.bio, RICHTEXT_OPTIONS)}
              </Box>
        ))}

    </div>
  )
}

export default AuthorDetails;
