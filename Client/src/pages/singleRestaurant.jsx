import HeaderSingleRestaurant from '@/components/singleRestaurant/HeaderSingleRestaurant'
import FooterSingleRestaurant from '@/components/singleRestaurant/FooterSingleRestaurant'
import MainSingleRestaurant from '@/components/singleRestaurant/MainSingleRestaurant'

const Page = () => {
    return (
        <> 
            <HeaderSingleRestaurant currentPage='Extra Pizza - Urbania' imageRestaurant='./assets/logo-restaurantSingle.png' />
            <MainSingleRestaurant />
            <FooterSingleRestaurant/>
        </>
    )
}

export default Page