import { Footer } from "@/components/indexComponent/Indexfooter";
import { Header } from "@/components/indexComponent/Indexheader";
import { MainIndex } from "@/components/indexComponent/mainIndex";
import {Box} from '@chakra-ui/react'
import { getGroupeRestaurant, getOneRestaurant } from "@/Services";

const Page = () => {
    const index = getOneRestaurant('extra-pizza')
    console.log(index.data)

    return(
        <Box bgColor='#FFFFFFF2'>
            <Header/>
            <MainIndex datas={index.data}/>
            <Footer/>
        </Box>
    )    
}

export default Page