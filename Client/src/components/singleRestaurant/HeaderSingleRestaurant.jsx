import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { Box } from "@chakra-ui/react";

const HeaderSingleRestaurant = ({currentPage, imageRestaurant}) => {
    return <header>
        <Box className='w-full h-[125px]'
            backgroundImage={`url('${imageRestaurant}')`}
            backgroundSize='cover'
        >
            <Link href='/' className='absolute left-3 top-3'>
                <Image alt='Back-Icon' width={40} height={40} src='./btn-quit.svg' />
            </Link>
        </Box>
        <div className="flex justify-center py-3 border-t">
            <h4 className="font-bold text-base" >{currentPage}</h4>
        </div>
    </header>;
};

export default HeaderSingleRestaurant;
