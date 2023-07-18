import React from "react";
import Link from 'next/link'
import Image from "next/image";

const HeaderSingleRestaurant = ({currentPage, backgroundHeader, imageRestaurant}) => {
    return <header>
        <div className={`w-full h-[125px] flex bg-[#${backgroundHeader}] items-center justify-between px-5`} >
            <Link href='/' clea>
                <Image alt='Back-Icon' width={37} height={37} src='./icon-park-solid_left-two.svg' />
            </Link>
            <div>
                <Image alt={currentPage} width={170} height={100} src={imageRestaurant} />
            </div>
            <Link href='/'>
                <Image alt='Shopping-Cart' width={37} height={37} src='./ps_cart.svg' />
            </Link>
        </div>
        <div className="flex justify-center">
            <h4 className="font-bold text-base" >{currentPage}</h4>
        </div>
    </header>;
};

export default HeaderSingleRestaurant;
