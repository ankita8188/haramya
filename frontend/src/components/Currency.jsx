
import React from 'react';

const CurrencyCards = () => {
  return (
    <div className="bg-black text-white p-6 w-[95rem]  shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Currency & Payments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Currency Exchange Card */}
        <div className=" bg-[linear-gradient(180deg,_#1F1F1F_0%,_#000_100%)] p-5 rounded-xl h-[20rem] w-[40rem] shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2 text-[30px] text-white">Currency Exchange</h3>
          <p className="text-sm leading-relaxed text-[24px]">
            Currency exchange services in Bharat are available at airports, banks, forex offices, and major hotels. 
            Many international credit and debit cards are accepted in cities and tourist destinations. 
            ATMs are widely available, but it’s advisable to carry some cash for smaller towns and markets.
          </p>
        </div>

        {/* Send and Receive Money Card */}
        <div className="bg-[linear-gradient(180deg,_#1F1F1F_0%,_#000_100%)] p-5 rounded-xl h-[20rem] w-[40rem] text-white shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-[30px] text-white">Send and receive money</h3>
          <p className="text-sm leading-relaxed text-[26px]">
            All banks in Bharat offer currency exchange services. 
            Exchange bureaus are located at airports, some shopping centers, and various other locations throughout the country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCards;