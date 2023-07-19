'use client'

import SingleRestaurant from './pages/SingleRestaurant.jsx'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <SingleRestaurant />
    </ChakraProvider>
  )
}
