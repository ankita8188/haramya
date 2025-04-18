"use client"
import React, { useState } from 'react';

const slides = [
  {
    title: 'Traditions of Bharat',
    heading: 'Language',
    content:
      'India, or Bharat, is a linguistically diverse country with over 120 languages spoken. The official languages are Hindi and English, with 22 other languages. Each state has its own regional language, adding to the cultural richness. English is widely understood in major cities and tourist destinations, making travel easy for visitors.',
    image:
      '/card2.jpg.jpg',
  },
  {
    title: 'Culture of Bharat',
    heading: 'Festivals',
    content:
      'India celebrates a wide range of festivals from different religions and regions, including Diwali, Eid, Christmas, Holi, and Pongal. These festivals reflect the unity in diversity of the country and are celebrated with great enthusiasm.',
    image:
      '/rumi-darwaza-from-bara.jpg',
  },
  
];

const BharatCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const { title, heading, content, image } = slides[currentIndex];

  return (
    <div className=''>
      <div className=' bg-gradient-to-r from-black to-gray-900'>
    <h1 className='text-2xl font-bold text-center font-semibold   text-white '>Harmaya</h1>
    <p className='text-xl font-semibold text-center  text-white'>Explore at the comfort of your homes,making travel easy</p></div>
      <div className='border border-red-4 bg-[linear-gradient(0deg,_#000_0%,_#028B95_100%)]  h-[6rem] '>
      <h1 className="text-2xl font-bold text-center font-semibold mt-8  text-white ">
        Bharat, a civilization lasting from eternity
      </h1>
      <h3 className='text-xl font-semibold text-center mb-[6rem] text-white'>A uniquely Bharat experience awaits you always</h3>
      </div>
      <div className="bg-black text-white w-[95rem] h-[35rem]  p-6 mt-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Left Side */}
        <div className="md:w-1/2 text-center">
          <h2 className="text-xl font-semibold mr-[15rem] mb-6  text-[20px]">{title}</h2>
          <img src={image} alt={title} width={400} height={350} className="rounded-xl shadow-md" />
        </div>

        {/* Right Side */}
        <div className="w-3/4">
          <h2 className="text-xl font-semibold text-[25px] ">{heading}</h2>
          <p className="text-sm leading-relaxed  text-[20px]">{content}</p>
        </div>
     

      {/* Right Arrow Only */}
      <div className="flex flex-col justify-start mt-[18rem] mr-[8rem] ">
        <button
          onClick={nextSlide}
          className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full "
        >
          →
        </button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default BharatCarousel;