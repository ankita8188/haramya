import { Poppins } from 'next/font/google';
import React from 'react';

const Cards = () => {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-2xl overflow-hidden shadow-lg relative bg-black mx-auto">
      <img
        src="/neom-UuzkCF-jmPY-unsplash1.png"
        alt="Himachal"
        className='w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover'
      />
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 
                    h-auto min-h-[80px] sm:min-h-[90px] md:min-h-[105px] 
                    bg-white/50 backdrop-blur-md 
                    flex flex-col sm:flex-row justify-between items-center 
                    p-3 sm:p-4 md:p-5 
                    rounded-lg sm:rounded-xl md:rounded-2xl">
        <h3 className='poppins text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center sm:text-left mb-2 sm:mb-0'>
          About Himachal
        </h3>
        <button className="border-none bg-white rounded-full 
                         w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                         flex items-center justify-center 
                         text-lg sm:text-xl md:text-2xl font-bold text-black 
                         cursor-pointer hover:bg-gray-200 transition duration-200 flex-shrink-0">
          →
        </button>
      </div>
    </div>
  );
}

export default Cards;