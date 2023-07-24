import React from "react";
import HeaderSingleRestaurant from "../../components/singleRestaurant/HeaderSingleRestaurant.jsx";
import MainSingleRestaurant from "@/components/singleRestaurant/MainSingleRestaurant.jsx";
import { Box } from "@chakra-ui/react";
import FooterSingleRestaurant from "@/components/singleRestaurant/FooterSingleRestaurant.jsx";

const SingleRestaurant = () => {
  return <Box bgColor='#FFFFFFF2'>
    <HeaderSingleRestaurant currentPage='Extra Pizza - Urbania' imageRestaurant='/./assets/logo-restaurantSingle.png' />
    <MainSingleRestaurant />
    <FooterSingleRestaurant />
  </Box>;
};

export default SingleRestaurant;
