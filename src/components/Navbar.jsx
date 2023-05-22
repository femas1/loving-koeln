import { Link as RouteLink} from 'react-router-dom';
import { HStack, Button, Link, Box, Flex, Stack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
          <Flex 
                p={5} 
                bgColor={"red.500"}
                align="center"
                justify="space-between"
                maxWidth="1024px"
                width="100%"
          >
              <Box>
                      <Link as={ RouteLink } p={5} colorScheme="blue" to="/">Home</Link>
                      <Link as={ RouteLink } p={5} to="/blogs">Blogs</Link>
              </Box>
              <Box>
                      <Link as={ RouteLink } p={5} to="/about">About</Link>
              </Box>
          </Flex>
    </>
  )
}

export default Navbar;
