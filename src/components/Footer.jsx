import React from 'react';
import logo from "../assets/logo.png";
import { Flex, Image, Box, Link } from '@chakra-ui/react';
import { Link as RouteLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
         <Flex 
                p={5} 
                mt={10}
                bgColor="#FD0324"
                align="center"
                justify="space-between"
                // maxWidth="1024px"
                width="100%"
                height="200px"

          >
            <Image src={logo} maxHeight="80px" />
          </Flex>
    </>
  )
}

export default Footer
