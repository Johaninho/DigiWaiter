import Head from 'next/head'
import { Container, Box } from '@chakra-ui/react'



const Main = ({children}) => {
    return (
        <Container>
            <Head>
                <meta name='viewport' content='width=content-width, initial-scale=1'/>
                <title>DigiWaiter - Homepage</title>
            </Head>
            <Box>
                {children}
            </Box>
        </Container>
    )
}

export default Main