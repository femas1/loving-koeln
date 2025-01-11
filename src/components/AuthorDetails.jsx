import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
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
    const {authors, error, isLoading} = useContentfulApi(null, author);
    return (
    <div className='author-detail'>
    {authors && (
             <Card
             mt={5}
             variant="elevated"
             bgColor="black.50"
             color="blackAlpha.800"
             key={authors[0].sys.id}
             >
                 <CardHeader>
              <Heading size='xl'>{authors[0].fields.authorName}</Heading>
            </CardHeader>
             
             <CardBody>{documentToReactComponents(authors[0].fields.bio, RICHTEXT_OPTIONS)}</CardBody>
              </Card>
        )}

    </div>
  )
}

export default AuthorDetails;
