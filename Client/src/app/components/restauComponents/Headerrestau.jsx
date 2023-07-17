import Image from 'next/image'

export function Headerrestau({logo, name, background}){
    return(
        <div style={{backgroundColor:background}} className="container h-32">
            <div className="w-36 mx-auto py-6" >
                <Image alt={`${name} cover`} src={logo}></Image>
            </div>  
        </div>
    )
}