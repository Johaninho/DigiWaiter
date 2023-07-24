import HeaderSingleRestaurant from '@/components/singleRestaurant/HeaderSingleRestaurant'
import FooterSingleRestaurant from '@/components/singleRestaurant/FooterSingleRestaurant'
import MainSingleRestaurant from '@/components/singleRestaurant/MainSingleRestaurant'
import {
    getOneRestaurant, 
    getMenuForOneRestaurant, 
    getCategorieMenu, 
    getSingleMenu 
} from '@/Services'

const restaurant = getOneRestaurant(slug)
const menuList = getMenuForOneRestaurant(restaurant.name)
const categories = getCategorieMenu(restaurant.name)

const Page = () => {
    return (
        <> 
            <HeaderSingleRestaurant currentPage={restaurant.name} imageRestaurant={`/./upload/${restaurant.medias}`} />
            <MainSingleRestaurant datas={categories} data2={menuList} />
            <FooterSingleRestaurant/>
        </>
    )
}

export default Page