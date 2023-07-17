import Image from 'next/image'
import Link from 'next/link'

export function Headerrestau({logo, name, background}){
    return(
        <div style={{backgroundColor:background}} className="w-full h-32 flex items-center">
            <Link className='w-10 ms-5' href='/'>
                <Image width={37} height={37} alt='back' src='./icon-park-solid_left-two.svg' />
            </Link>
            <Link className="w-36 mx-auto py-6" href='/'>
                <Image alt={`${name} cover`} src={logo}></Image>
            </Link>
            <Link className='w-10 me-5' href='/'>
                <Image width={37} height={37} alt='shopping-cart' src='./ps_cart.svg' />
            </Link>
        </div>
    )
}