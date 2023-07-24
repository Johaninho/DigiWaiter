import { Footer } from "@/components/indexComponent/Indexfooter";
import { Header } from "@/components/indexComponent/Indexheader";
import { MainIndex } from "@/components/indexComponent/mainIndex";
import {Box} from '@chakra-ui/react'
export const Index = () => {
    return(
        <Box bgColor='#FFFFFFF2'>
            <Header/>
            <MainIndex/>
            <Footer/>
        </Box>
    )    
}