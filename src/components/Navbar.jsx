import { Link as RouteLink} from 'react-router-dom';
import { Link, Box, Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <>
          <Flex 
                p={1} 
                bgColor="#FD0324"
                align="center"
                justify="space-between"
                color="white"
                fontSize={24}
                width="100%"
          >
                      <Image src={logo} maxHeight="80px" />
              <Box>
                      <Link as={ RouteLink } p={5} to="/">Home</Link>
                      <Link as={ RouteLink } p={5} to="/blogs">Blogs</Link>
                      <Link as={ RouteLink } p={5} to="/blogs/authors">Authors</Link>
              </Box>
              <Box>
                      <Link as={ RouteLink } p={5} to="/about">About</Link>
              </Box>
          </Flex>
    </>
  )
}

export default Navbar;
