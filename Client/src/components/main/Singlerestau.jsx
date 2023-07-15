"use client"
import React, { useState } from "react"
import logo from '../../assets/Chicky.png'
import food from '../../assets/food.jpg'
import { Headerrestau } from '../restauComponents/Headerrestau'
import { Product } from '../restauComponents/Products'

export function Singlerestau(){
    return(
        <div className="container">
            <Headerrestau name="Chicky" logo={logo} background={'#FFB71B'}/>
            <div className='flex justify-center'>
                <h1 className='font-semibold text-4xl text-gray-600 mt-5'> Menu </h1>
            </div>
            <Product nom="chicky" image={food}/>
            <Product image={food}/>
        </div>
    )
}
