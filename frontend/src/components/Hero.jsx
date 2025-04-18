import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div>
        <section className="relative bg-[radial-gradient(61.07%_61.07%_at_50%_38.93%,_#E7EDEF_0%,_#028B95_100%)]  w-full h-[100vh] overflow-hidden">
  {/* Navbar */}
 <Navbar/>

  {/* Heading Section */}
  <div className="absolute inset-0 flex flex-col justify-center items-center z-10   text-center px-4 ">
    <h1 className="text-[#004247] font-bold text-[32px] sm:text-[48px] md:text-[72px] lg:text-[95px] leading-tight drop-shadow-xl">
      About Us
    </h1>
    <h3 className='text-lg sm:text-xl text-[#004247] font-semibold mb-2 text-[14px] sm:text-[16px]'>
      HARMYA - Explore at the comfort of your homes, making travel easy
    </h3>
 
  <p className='static rounded-full bg-gradient-to-r from-black to-gray-800 text-white h-auto sm:h-[3rem] w-full sm:w-[20rem] p-2 sm:pt-2 opacity-75'>
    A Journey Of Dreams From Home
  </p>
  <div className='mt-4 p-4 sm:p-6 bg-gradient-to-r from-black to-gray-900 text-base sm:text-xl text-white h-auto sm:h-[15rem] absolute bottom-10 left-5 right-5 opacity-75 rounded-2xl overflow-hidden shadow-lg'>
    HARMYA is a revolutionary remote tourism platform that allows people to explore destinations virtually, breaking free from physical, financial, and geographic limitations. Whether separated by oceans or confined by age, health, or responsibilities, users can now experience the magic of their dream locations as if they were truly there. For those unable to travel—due to age, mobility challenges, or financial constraints—HARMYA offers an opportunity to see the world without limits. Imagine an elderly woman, once unable to visit the sacred temples she longed for, now walking through their corridors with a simple click. Imagine a group of friends, separated by continents, exploring Kashi together as if side by side. HARMYA isn't just about sightseeing—it's about experiencing. It's about feeling the pulse of a place, interacting with its people, and embracing the stories, cultures, and faiths that shape it. With HARMYA, travel is no longer a privilege—it's a right, accessible to everyone, everywhere. Explore Bharat Virtually with HARMYA.
  </div>
  </div>
</section>
    </div>
  )
}

export default Hero