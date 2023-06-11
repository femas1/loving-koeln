import React from 'react'
import TextBox from './TextBox'
import { Image, AspectRatio } from '@chakra-ui/react';
import { heading, text } from '../homeContent';

const Home = () => {
  return (
<>

    <Image 
          width="100%"
          height="300px"
          objectFit='cover' 
          src='src\assets\koeln-titelbild.jpg' alt='Dan Abramov' />

            <TextBox heading= {heading} text={<div dangerouslySetInnerHTML={{ __html: text }} />}/>
</>
)
}

export default Home;
