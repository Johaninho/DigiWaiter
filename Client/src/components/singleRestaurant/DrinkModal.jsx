"use client"
import React, { useState } from "react"
import Boissons from './Boissons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Image
} from '@chakra-ui/react'

export default function DrinkModal({imgModal, nameModal, descriptionModal, priceModal, src, price, name}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const size = ['xs']

    const NumberCounter = () => {
        const [count, setCount] = useState(1);
      
        const increment = () => {
            setCount(prevCount => prevCount + 1)
        }
        
        const decrement = () => {
            if(count>0)   
                setCount(prevCount => prevCount - 1)
        }
      
        return (
            <div className="mt-5">
                <div className="flex items-center">
                    <button
                        className={`w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center ${
                            count === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
                        }`}
                        onClick={decrement}
                        disabled={count === 1}
                    >
                        <p className="text-2xl font-bold">-</p>
                    </button>

                    <div className="mx-7 text-xl font-semibold">{count}</div>
                    
                    <button
                    className="w-10 h-10 rounded-full border border-gray-400 flex items-center text-center justify-center hover:bg-gray-200"
                    onClick={increment}
                    >
                        <span className="text-2xl font-bold flex items-center justify-center">+</span>
                    </button>
                </div>
                <Button className="mt-4 w-full" textColor={"white"} backgroundColor={"gray.400"}>
                    {count*1500} Ar
                    {/* {count*prix} Ar */}
                </Button>
            </div>
        );
    }
    
    return (
        <>
        <Boissons onClick={onOpen} price={price} name={name} src={src} />
        <Modal blockScrollOnMount={false} isOpen={isOpen} size={size} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent rounded="none">
            <ModalHeader 
                sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 0,
                height: "100%",
                borderBottom: "none",
                }}
            >
                {/* <Image alt="" className='w-full h-full' src={img}></Image>  */}
                <Image alt="" w='auto' h='200px' mx='auto' src='/./assets/WOCO_30_PACKSHOT_0.png'></Image> 
            </ModalHeader>

            <ModalCloseButton
                sx={{
                    backgroundColor:'white',
                    opacity:"0.8",
                    borderRadius: '50%'
                }}
            />

            <ModalBody 
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                // textAlign="center"
            >
                <p className='mt-1 font-bold'>
                    {/* {name} */}
                    World Cola
                </p>
                <NumberCounter/>
            </ModalBody>

            <ModalFooter 
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
            >

                <Button className="w-full" textColor={"white"} backgroundColor={"green.300"}>
                    Ajouter au panier
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}