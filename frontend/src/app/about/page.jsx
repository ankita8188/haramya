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
      <div className='bg-[linear-gradient(0deg,_#037D01_0%,_#025C00_100%)] h-[6rem] sm:h-[8rem] w-full max-w-[85rem] mx-auto pl-4 rounded-full flex flex-col sm:flex-row justify-center items-center sm:items-center gap-4 sm:gap-0 shadow-lg'>
        <p className='text-lg sm:text-xl text-white mt-4 sm:mt-[2rem] mr-4 sm:mr-[2rem]'>Contact Us On Whatsapp</p>
        <button className='bg-gray-300 rounded-xl w-32 sm:w-40 h-8 sm:h-10 text-base sm:text-xl text-green-400 text-center'>Start Chat</button>
      </div>
      
      <div className='bg-black h-[30rem] sm:h-[42rem] w-full max-w-[93rem] mx-auto flex justify-center items-center'>
        <ImageSlider/>
      </div>
      <Footer/>
    </div>
  )
}

export default page