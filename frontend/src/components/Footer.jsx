import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#002623] text-white  pt-10 px-3 md:px-15">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0">

      {/* Logo and Tagline */}
      <div className="flex flex-col items-start">
        <p className="text-[75px] text-white island leading-none">
          Harmya
        </p>
        <p className="text-[18px] italic island text-yellow-400  ml-36 mt-[-25px]">
          making travel easy
        </p>
      </div>


      {/* Sections Container */}
      <div className="flex flex-col sm:flex-row justify-between gap-14 w-full md:w-auto mr-20 mb-10">

        {/* About Section */}
        <div className="text-left">
          <h2 className="font-semibold mb-2 text-xl md:text-lg font-poppins">About</h2>
          <ul className="space-y-1 leading-1.5">
            <li><a href="#" className="hover:underline text-lg md:text-sm leading-6 font-poppins">About us</a></li>
            <li><a href="#" className="hover:underline text-lg md:text-sm leading-6 font-poppins">Features</a></li>
            <li><a href="#" className="hover:underline text-lg md:text-sm leading-6 font-poppins">News & Blogs</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-left">
          <h2 className="font-semibold mb-2 text-xl md:text-lg font-poppins">Contact</h2>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline text-lg md:textsm leading-6 font-poppins">Instagram</a></li>
            <li><a href="#" className="hover:underline text-lg md:textsm leading-6 font-poppins">Twitter</a></li>
            <li><a href="#" className="hover:underline text-lg md:textsm leading-6 font-poppins">Facebook</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="text-left">
          <h2 className="font-semibold mb-2 text-xl md:text-lg font-poppins">Support</h2>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline text-lg md:text-sm leading-6 font-poppins">FAQs</a></li>
            <li><a href="#" className="hover:underline text-lg md:text-sm leading-6 font-poppins">Support Centre</a></li>
            <li><a href="#" className="hover:underline text-lg md:text-sm leading-6 font-poppins">Feedback</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer