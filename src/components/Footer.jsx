import React from 'react';
import logo from "../assets/logo.png";
import { Image, Link, SimpleGrid } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
         <SimpleGrid 
                columns={3} 
                spacing={1}
                p={5} 
                mt={10}
                bgColor="#FD0324"
                width="100%"
                height="100px"
          >
            <Image 
                src={logo} 
                maxHeight="80px" 
            />
            <Link 
                href='https://federico-massara.netlify.app/'
                textAlign={"center"} 
                pt={5}
                isExternal
            >
              Federico Massara - 2023 &copy;
            </Link>
            
            </SimpleGrid>
    </>
  )
}

export default Footer
