"use client"
import React, { useState } from 'react';

const slides = [
  {
    title: 'Traditions of Bharat',
    heading: 'Language',
    content:
      'India, or Bharat, is a linguistically diverse country with over 120 languages spoken. The official languages are Hindi and English, with 22 other languages. Each state has its own regional language, adding to the cultural richness. English is widely understood in major cities and tourist destinations, making travel easy for visitors.',
    image:
      '/card1.jpg.jpg',
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
    <div className="bg-black text-white w-full max-w-[95rem] mx-auto p-4 sm:p-6 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        {/* Right Side */}
        <div className="w-full md:w-3/4">
          <h2 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-8 text-[20px] sm:text-[25px] ml-4 sm:ml-6">{heading}</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[16px] sm:text-[20px] ml-4 sm:ml-6">{content}</p>

          <div className="flex justify-end mt-4 sm:mt-6">
            <button
              onClick={nextSlide}
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full ml-4 sm:ml-8"
            >
              →
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[18px] sm:text-[22px]">{title}</h2>
          <img 
            src={image} 
            alt={title} 
            className="w-full max-w-[400px] h-auto rounded-xl shadow-md mx-auto" 
          />
        </div>
      </div>
    </div>
  );
};

export default BharatCarousel;