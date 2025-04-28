import React from 'react'
import Navbar from '@/components/Navbar'
import TravelCards from "@/components/TravelCards"
import Cards from "@/components/Cards"
import ImageSlider from "@/components/ImageSlider"
import Footer from "@/components/Footer"
import { Poppins } from 'next/font/google'

const destinations = [
  {
    image: "/images/hawa.jpg",
    title: "Place Name",
    subtitle: "Mountains",
  }
];
const Smalldestin = [
  {
    image: "/images/hawa.jpg",
    title: "Place Name",
    subtitle: "Mountains",
  }
]

const Hero = () => {
  return (
    <div className='bg-black min-h-screen'>
      {/* Hero Section with Gradient Background */}
      <section className=" pt-4 relative bg-[radial-gradient(61.07%_61.07%_at_50%_38.93%,#E7EDEF_0%,_#028B95_100%)] w-full h-[80vh] sm:h-[90vh] md:h-screen overflow-hidden">
        <Navbar />

        {/* Heading - Adjusted text sizes and margins */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-[#004247] text-center poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[95px] leading-tight drop-shadow-xl">
            Destinations
          </h1>
          <p className='text-[#004247] text-center poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-[23px] mt-2 sm:mt-4 max-w-lg md:max-w-2xl leading-relaxed'>
            Bharat is rich in heritage and history. The country is home to hundreds of historically important sites.
          </p>
        </div>
      </section>

      {/* Google Map Section - Adjusted margin and iframe height */}
      <div className='relative z-20 px-4 sm:px-8 md:px-16 lg:px-24 -mt-24 sm:-mt-32 md:-mt-48'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.581010906885!2d80.954577814884!3d26.85053568316002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdcc4f6d52ff%3A0x7fc7eebc617de59c!2sUniversity%20of%20Lucknow!5e0!3m2!1sen!2sin!4v1618921764584!5m2!1sen!2sin"
          width="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className='w-full h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-2xl object-cover shadow-xl border-[2px] border-white'
        ></iframe>
      </div>

      {/* Travel Cards - Assuming TravelCards component is responsive */}
      <div className="bg-black py-12 sm:py-16">
        <TravelCards />
      </div>

      {/* Traveler Essentials - Adjusted Heading & Card Layout */}
      <div className="bg-black px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <h1 className='poppins text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center md:text-left mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2 sm:px-0'>
          Traveler Essentials
        </h1>
        <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-8 sm:gap-12 md:gap-[3rem]'>
          <Cards />
          <Cards />
        </div>
      </div>

      {/* WhatsApp Contact Section - Responsive Layout */}
      <div className='bg-black pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='bg-[linear-gradient(0deg,#037D01_0%,#025C00_100%)] h-auto min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem] w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-6 sm:px-8 md:px-12 rounded-3xl sm:rounded-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 shadow-lg'>
          <p className='text-center sm:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl text-white poppins font-semibold leading-tight'>
            Contact Us On Whatsapp
          </p>
          <button className='bg-white rounded-lg sm:rounded-xl px-4 py-2 sm:px-5 sm:py-2 md:px-6 text-sm sm:text-base md:text-lg poppins text-green-600 font-medium hover:bg-gray-100 transition duration-200 flex-shrink-0'>
            Start Chat
          </button>
        </div>
      </div>

      {/* "Made To Change" Foreground Section - Responsive */}
      <div className="bg-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <section className="max-w-5xl xl:max-w-6xl mx-auto">
          <div className="relative w-full rounded-lg overflow-hidden shadow-2xl z-10">
            <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
              <img
                src="/neom-wTmGtmGQCjQ-unsplash1.png"
                alt="Made To Change"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 md:px-8 lg:px-12">
              <div className="text-white text-center sm:text-left mb-3 sm:mb-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight poppins drop-shadow-lg">
                  Made To Change <br className="sm:hidden"/> India Travel
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

      <Footer />
    </div>
  )
}

export default Hero