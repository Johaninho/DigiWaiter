import { ChakraProvider} from '@chakra-ui/react'

const Pages = ({Component, pageProps}) => {
    return (
        <>
            <ChakraProvider>
                <Layout>
                    Component
                </Layout>
            </ChakraProvider>
        </>
    )
}