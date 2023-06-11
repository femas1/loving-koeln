import React from "react";
import { Image, Text, Heading, Box } from "@chakra-ui/react";
import { heading } from "../homeContent";

const Home = () => {
  return (
    <>
      <Image
        width="100%"
        height="300px"
        objectFit="cover"
        src="src\assets\koeln-titelbild.jpg"
        alt="Dan Abramov"
      />
      <Box color={"blackAlpha.800"} maxW="1024px" p={5}>
        <Heading py={5}>{heading}</Heading>
        <Text mt={2}>
          Welcome to Loving Köln, your ultimate guide to discovering the
          enchanting city of Cologne, Germany. As passionate travelers and
          lovers of all things Cologne, we are excited to share our insights,
          experiences, and tips to help you make the most of your visit to this
          captivating city.
        </Text>
        <Text mt={2}>
          At Loving Köln, we believe that Cologne is more than just a
          destination; it's a feeling, a vibrant tapestry of history, culture,
          and warmth. Our blog is dedicated to showcasing the best of what
          Cologne has to offer, from its rich heritage and architectural wonders
          to its lively festivals and hidden gems.
        </Text>
        <Text mt={2}>
          Join us as we delve into the fascinating history of Cologne, a city
          with roots dating back to Roman times. Discover the iconic Cologne
          Cathedral, a UNESCO World Heritage site and a symbol of the city's
          resilience and artistic grandeur. Immerse yourself in the medieval
          charm of the Old Town, where narrow cobblestone streets lead to
          picturesque squares and historic landmarks.
        </Text>
        <Text mt={2}>
          But Cologne is not just about its past; it's a city that embraces the
          present and looks towards the future. Experience the vibrant energy of
          the modern art scene at Museum Ludwig, home to an impressive
          collection of contemporary masterpieces. Indulge in the city's
          culinary delights, from traditional Kölsch beer and hearty local
          dishes to international flavors and Michelin-starred restaurants.
        </Text>
        <Text mt={2}>
          Our blog will guide you through the city's diverse neighborhoods, each
          with its own unique character and charm. From the trendy Ehrenfeld
          district with its street art and hip cafes to the serene beauty of the
          Rhine Promenade, where you can enjoy stunning views of the river and
          the city skyline.
        </Text>
        <Text mt={2}>
          Loving Köln is not just a travel guide; it's a celebration of the
          people who make Cologne special. We'll introduce you to local
          artisans, entrepreneurs, and cultural influencers who are shaping the
          city's vibrant scene. Learn about the fascinating stories behind
          Cologne's famous Carnival celebrations and join in the joyful revelry
          that brings the city to life each year.
        </Text>
        <Text mt={2}>
          Whether you're a history buff, an art enthusiast, a foodie, or simply
          a curious traveler, Loving Köln has something for everyone. Our team
          of passionate writers and contributors will take you on a virtual
          journey through the city, providing insider tips, recommendations, and
          personal anecdotes that will inspire you to explore Cologne's hidden
          corners and create unforgettable memories.
        </Text>
        <Text mt={2}>
          So, join us on this adventure as we uncover the secrets of Loving
          Köln. Let us be your trusted companion as you navigate the city's
          streets, immerse yourself in its vibrant culture, and fall in love
          with its undeniable charm. Cologne awaits you, and we can't wait to
          share the magic of this incredible city with you. Welcome to Loving
          Köln - where your love affair with Cologne begins!"
        </Text>
      </Box>
    </>
  );
};

export default Home;
