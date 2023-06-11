import React from "react";
import { useState, useEffect } from "react";
import {
  Heading,
  Link,
  Card, CardHeader, CardBody, CardFooter, Image, Stack, Button, Text
} from "@chakra-ui/react";
import { Link as RouteLink } from 'react-router-dom';
import '../index.css'

import useContentfulApi from "../hooks/useContentfulApi";

const BlogList = () => {

  const {newBlogs, error, isLoading} = useContentfulApi();


  return (
    <div className="blog-list">
            {newBlogs && newBlogs.map(newBlog =>

            

                <Card
                    key={newBlog.fields.title}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='elevated'
                    bgColor="black.50"
                    marginTop={10}
                  >

                  {/* {newBlog.fields.image && (
                      <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={newBlog.fields.image.fields.file.url}
                        alt={newBlog.fields.image.fields.title}
                      />
                    )} */}

                    <Stack>
                      <CardBody>
                        <Link
                          as={ RouteLink }
                          to={`/blogs/${newBlog.fields.id}`}
                          color="blackAlpha.800"
                          >
                            <Heading>{newBlog.fields.title}</Heading>
                        </Link>

                        <Text
                            py='2'
                            color="blackAlpha.700"
                        >
                        </Text>
                      </CardBody>

                      <CardFooter>

                      <Link
                          as={ RouteLink }
                          to={`/blogs/${newBlog.fields.id}`}
                          color="blackAlpha.800"
                          >
                      <Button
                            variant='solid'
                            colorScheme='red'
                          >
                          Read more...
                        </Button>

                        </Link>



                      </CardFooter>
                    </Stack>
                  </Card>





                )

                }
    </div>
  )
}

export default BlogList;
