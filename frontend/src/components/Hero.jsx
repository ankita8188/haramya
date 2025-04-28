import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div>
        <section className="relative pt-4 bg-[radial-gradient(61.07%_61.07%_at_50%_38.93%,_#E7EDEF_0%,_#028B95_100%)]  w-full h-[100vh] overflow-hidden">
  {/* Navbar */}
 <Navbar/>

  {/* Heading Section */}
  <div className="absolute inset-0 flex flex-col justify-center items-center z-10   text-center px-4 ">
    <h1 className="text-[#004247] font-bold text-[32px] sm:text-[48px] md:text-[72px] lg:text-[95px] leading-tight drop-shadow-xl poppins">
      About Us
    </h1>
    <h3 className='text-lg sm:text-xl text-[#004247] font-semibold mb-2 text-[14px] sm:text-[16px] poppins'>
      HARMYA - Explore at the comfort of your homes, making travel easy
    </h3>
 
  <p className='static poppins mt-6 rounded-full bg-gradient-to-r from-black to-gray-800 text-white h-[1rem] sm:h-[3rem] w-full sm:w-[20rem]  text-center pt-[1.5vh] opacity-75'>
    A Journey Of Dreams From Home
  </p>
  <div className=' p-4 sm:p-6 bg-gradient-to-r from-black to-gray-900 text-base sm:text-sm text-white h-auto sm:h-[15rem] absolute bottom-10 left-5 right-5 opacity-75 rounded-2xl overflow-hidden shadow-lg'>
   <p className='poppins text-[16px]'>Meera sat by the window, staring at the distant horizon. At 72, her legs no longer supported long journeys, but her heart still wandered through the places she had only heard about in stories. The grand temples, the sacred rivers, the bustling streets of historic cities—she had always dreamt of visiting them. "I wish I had seen them once," she sighed, folding her trembling hands in prayer. It wasn’t just her—many of her friends, bound by age, responsibilities, or financial constraints, shared the same unfulfilled longing. Some struggled with health, others with time, and for many, travel was simply too expensive. But what if they didn’t have to kill their desires? What if they could explore the unseen corners of their own country, feel the serenity of temples, witness the divine grandeur of pilgrimages—all from the comfort of their homes?</p>
   <p className='pt-4 poppins text-[16px]'>
HARMYA was born from this very dream. A way to travel without barriers, to experience the beauty of one's own land, to embrace the stories and faith that shaped them—all without the limitations of age, money, or time.
Now, Meera smiles as she virtually walks through the corridors of her dream destinations. The world she thought was beyond her reach is now just a click away.</p>
  </div>

  </div>

</section>
<div className='bg-gradient-to-r from-black to-gray-900 p-4 sm:p-6'>
        <h1 className='text-[20px] sm:text-[30px] text-center font-semibold text-white imperial'>Harmaya</h1>
        <p className='text-lg sm:text-xl font-semibold text-center text-white montserrat'>Explore at the comfort of your homes, making travel easy</p>
      </div>
      <div className='border border-red-4 bg-[linear-gradient(0deg,_#000_0%,_#028B95_100%)] pt-8 h-auto sm:h-[6rem]  '>
        <h1 className="text-[20px] sm:text-[30px]  text-center font-semibold text-white  poppins">
          Bharat, a civilization lasting from eternity
        </h1>
        <h3 className='text-lg sm:text-xl  text-center mb-4 sm:mb-6 text-white'>A uniquely Bharat experience awaits you always</h3>
      </div>
    </div>
  )
}

export default Hero