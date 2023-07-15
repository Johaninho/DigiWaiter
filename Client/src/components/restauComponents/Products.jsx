import Image from 'next/image'

export function Product({image, nom, description, prix}){
    return(
        <div className='container mx-auto mt-10 w-96 border-2 rounded-md drop-shadow-sm'>
            <div className=" grid grid-cols-3 gap-0">
                <div className='w-full h-auto'>
                    <Image className="w-full h-full" alt={`${nom} cover`} src={image}></Image>
                </div>
                <div className='w-auto ml-4 col-span-2'>
                    <div className='mt-2 mx-auto'>
                        {/* <h1 className='ml-6 font-medium'> {nom} </h1>
                        <p className='text-gray-500'>{description}</p> */}
                        <h1 className='ml-16 font-medium'> Tenders </h1>
                        <p className='text-gray-500'>lorem ipsum dolor sit amet consectetur...</p>
                    </div>
                    <div className='mt-8 grid grid-cols-3 gap-0 items-strech'>
                        {/* <p className=''>{prix}</p> */}
                        <p className='font-medium mt-2'>18 000 Ar</p>
                        <div className='ml-2 col-span-2'>
                            <button class="bg-blue-800 hover:bg-blue-900 text-white font-normal py-2 px-4 ml-4 mb-1 rounded-md">
                                commander
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}