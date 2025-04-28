import React from 'react'

import Carousel from "@/components/Carousel"
import Bharat from "@/components/Bharat"
import Currency from "@/components/Currency"

import Hero from "@/components/Hero"
import Footer from "@/components/Footer"

const page = () => {
  return (
    <div className='bg-black min-h-screen'>
      <Hero/>
      
      <Carousel/>

      <Bharat/>
      <Currency/>

      <div className='bg-black pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='bg-[linear-gradient(0deg,_#037D01_0%,_#025C00_100%)] h-auto min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem] w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-6 sm:px-8 md:px-12 rounded-3xl sm:rounded-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 shadow-lg'>
          <p className='text-center sm:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl text-white poppins font-semibold leading-tight'>
            Contact Us On Whatsapp
          </p>
          <button className='bg-white rounded-lg sm:rounded-xl px-4 py-2 sm:px-5 sm:py-2 md:px-6 text-sm sm:text-base md:text-lg poppins text-green-600 font-medium hover:bg-gray-100 transition duration-200 flex-shrink-0 whitespace-nowrap'>
            Start Chat
          </button>
        </div>
      </div>
     
      <div className="bg-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <section className="max-w-5xl xl:max-w-6xl mx-auto">
          <div className="relative w-full rounded-lg overflow-hidden shadow-2xl z-10">
            <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
              <img
                src="/neom-wTmGtmGQCjQ-unsplash2.png"
                alt="Rules Of Behaviour"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 md:px-8 lg:px-12">
              <div className="text-white text-center sm:text-left mb-3 sm:mb-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight poppins drop-shadow-lg">
                  Rules Of Behaviour
                </h2>
              </div>

              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-white rounded-full flex justify-center items-center hover:bg-white/20 cursor-pointer transition duration-300 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:h-6 md:h-7 md:h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
  
      <Footer/>
    </div>
  )
}

export default page
