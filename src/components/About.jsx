import { Box, Heading, Text } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";

const About = () => {

    const { data, isLoading, error } = useFetch('http://localhost:3000/about');

  return (

        <>
            {data && data.title}
        </>

  )
}

export default About;
