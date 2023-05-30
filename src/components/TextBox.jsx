import React from 'react';
import { 
    Box,
    Heading, 
    Text
} from '@chakra-ui/react';

const TextBox = ({heading, text}) => {
  return (
    <Box color={'blackAlpha.800'} maxW="1024px" p={5}>
        <Heading>{heading}</Heading>
        <Text py={5}>{text}</Text>
    </Box>
  )
}

export default TextBox;
