'use client'

import SingleRestaurant from './pages/SingleRestaurant.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { Facture } from './pages/Facture.jsx'
import FooterSingleRestaurant from '@/components/singleRestaurant/FooterSingleRestaurant.jsx'
import {Commande} from './pages/Commande.jsx'
export default function Home() {
  return (
    <ChakraProvider>
      {/* <SingleRestaurant /> */}
      <Facture />
      {/* <Commande /> */}
      <FooterSingleRestaurant />
    </ChakraProvider>
  )
}
