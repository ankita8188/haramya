
import React from 'react'
import ImageSlider from "@/components/ImageSlider"
import Carousel from "@/components/Carousel"
import Bharat from "@/components/Bharat"
import Currency from "@/components/Currency"

import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
const page = () => {
  return (
    <div className='bg-black'>
      <Hero/>
      
      <Carousel/>

      <Bharat/>
      <Currency/>
      <div className='bg-[linear-gradient(0deg,_#037D01_0%,_#025C00_100%)] h-[8rem] w-[85rem] ml-[4rem] pl-4 rounded-full flex justify-center sho  shadow-lg '>
        <p className='text-xl text-white mt-[2rem] mr-[2rem]'>Contact Us On Whatsapp</p>
        <button className='bg-gray-300 rounded-xl w-25 h-10 justify-end text-xl ml-[60rem] mt-[2rem] text-green-400 text-center '>Start Chat</button>
      </div>
      
    <div className='bg-black h-[42rem] w-[93rem] flex justify-center items-center '>
    <ImageSlider/>
    </div>
    <Footer/>
    </div>
  )
}

export default page