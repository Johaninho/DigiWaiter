import { Box, Card, CardBody, CardFooter, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ProductSingleRestaurant = () => {
  return(
    <Box mb='10px'>
        <Card
            direction='row'
            overflow='hidden'
            variant='outline'
            maxH='100px'
            bg='#F5F5F5'
            borderColor='#D9D9D9'
        >
            <Stack>
                <CardBody textAlign='start' pt='12px' ps='8px' pb='10px'>
                    <Heading fontSize='15px' color='#000000B2' mb='4px'>Tasty French Tacos</Heading>
                    <Text color='#00000099' fontSize='12px'>
                        Deux choix de viande - deux choix de sauce - 1 supplément
                    </Text>
                    <Text color='#394D5F' fontSize='12px' fontWeight='bold' mt='5px'>12.000 Ar</Text>
                </CardBody>

            </Stack>
            
            <Image 
                objectFit='cover'
                maxW='125px'
                src='/./assets/Rectangle 15.jpg'
            />
        </Card>
    </Box>
  )
};

export default ProductSingleRestaurant;
