'use client'
import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import ProductModal from "./ProductModal";
import DrinkModal from "./DrinkModal";

const MainSingleRestaurant = () => {

  return(
    <Box>
      <Tabs isLazy align='center' variant='unstyled' defaultIndex={0} >
        <TabList 
          fontWeight='bold' 
          fontSize='13px' 
          borderTop='1px solid #3FCB80' 
          borderBottom='1px solid #3FCB80'
          height='40px'
          bgColor='#FFF'
          color='#394D5F'
        >
          <Tab _selected={{ color: '#3FCB80'}} fontSize='13px'>Nouveautés</Tab>
          <Tab _selected={{ color: '#3FCB80'}} fontSize='13px'>Pizzas</Tab>
          <Tab _selected={{ color: '#3FCB80'}} fontSize='13px'>Tacos</Tab>
          <Tab _selected={{ color: '#3FCB80'}} fontSize='13px'>Boissons</Tab>
        </TabList>

        <TabPanels>
          <TabPanel className='Nouveautés' >
            <Heading 
              as='h5' 
              fontSize='15px' 
              textAlign='start' 
              borderBottom='1px solid #F5F5F5' 
              mb='10px'
              pb='3px'
            >
              Nouveautés
            </Heading>
            <Box className='listProductModal'>
              <ProductModal />
              <ProductModal />
              <ProductModal />
              <ProductModal />
            </Box>
          </TabPanel>
          <TabPanel>

          </TabPanel>
          <TabPanel>

          </TabPanel>
          
          <TabPanel>
            <Heading 
              as='h5' 
              fontSize='15px' 
              borderBottom='1px solid #F5F5F5' 
              mb='10px'
              pb='3px'
            >
              Boissons
            </Heading>
            <Box className='Boissons' display='flex' flexWrap='wrap' justifyContent='center' px='25px' flex>
              <DrinkModal src='/./assets/WOCO_30_PACKSHOT_0.png' price='1.500' name='World Cola 35cl' />
              <DrinkModal src='/./assets/WOCO_30_PACKSHOT_0.png' price='1.500' name='World Cola 35cl' />
              <DrinkModal src='/./assets/WOCO_30_PACKSHOT_0.png' price='1.500' name='World Cola 35cl' />
              <DrinkModal src='/./assets/WOCO_30_PACKSHOT_0.png' price='1.500' name='World Cola 35cl' />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
};

export default MainSingleRestaurant;
