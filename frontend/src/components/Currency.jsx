import React from 'react';

const CurrencyCards = () => {
  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12 w-full max-w-7xl mx-auto shadow-lg" data-aos="fade-up">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 poppins text-center md:text-left" data-aos="fade-right" data-aos-delay="100">Currency & Payments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {/* Currency Exchange Card */}
        <div className="bg-[linear-gradient(180deg,_#1F1F1F_0%,_#000_100%)] p-5 sm:p-6 md:p-8 rounded-xl w-full shadow-md text-white border-2 border-gray-600 flex flex-col" data-aos="zoom-in" data-aos-delay="200">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 poppins text-white">
            Currency Exchange
          </h3>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed poppins flex-grow">
            Currency exchange services in Bharat are available at airports, banks, forex offices, and major hotels. 
            Many international credit and debit cards are accepted in cities and tourist destinations. 
            ATMs are widely available, but it's advisable to carry some cash for smaller towns.
          </p>
        </div>

        {/* Send and Receive Money Card */}
        <div className="bg-[linear-gradient(180deg,_#1F1F1F_0%,_#000_100%)] p-5 sm:p-6 md:p-8 rounded-xl w-full text-white shadow-md border-2 border-gray-600 flex flex-col" data-aos="zoom-in" data-aos-delay="300">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-white">
            Send and receive money
          </h3>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed poppins flex-grow">
            All banks in Bharat offer currency exchange services. 
            Exchange bureaus are located at airports, some shopping centers, and various other locations throughout the country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCards;