import React from 'react'
import TextBox from './TextBox'
import BlogDetails from './BlogDetails';
import { heading, text } from '../homeContent';


const Home = () => {
  return (
            <TextBox heading= {heading} text={<div dangerouslySetInnerHTML={{ __html: text }} />}/>
  )
}

export default Home;
