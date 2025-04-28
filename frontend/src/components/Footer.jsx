import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#002623] text-white pt-10 pb-8 px-4 sm:px-6 md:px-10 lg:px-15">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-y-8 md:gap-y-0">

        {/* Logo and Tagline - Responsive Size & Alignment */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto order-last md:order-first mt-8 md:mt-0">
          {/* Responsive font size */}
          <p className="text-5xl sm:text-6xl md:text-7xl lg:text-[75px] text-white island leading-none text-center md:text-left">
            Harmya
          </p>
          {/* Responsive font size and margin */}
          <p className="text-base sm:text-lg md:text-[18px] italic island text-yellow-400 mt-[-10px] sm:mt-[-15px] md:mt-[-25px] text-center md:text-left md:ml-4 lg:ml-36">
            making travel easy
          </p>
        </div>

        {/* Sections Container - Responsive Layout & Spacing */}
        {/* Adjusted gaps, text alignment */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full md:w-auto text-center sm:text-left">

          {/* About Section - Responsive Text Size */}
          <div className="text-center sm:text-left">
            <h2 className="font-semibold mb-3 text-lg sm:text-xl font-poppins">About</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-sm sm:text-base leading-6 font-poppins">About us</a></li>
              <li><a href="#" className="hover:underline text-sm sm:text-base leading-6 font-poppins">Features</a></li>
              <li><a href="#" className="hover:underline text-sm sm:text-base leading-6 font-poppins">News & Blogs</a></li>
            </ul>
          </div>

          {/* Contact Section - Responsive Text Size */}
          <div className="text-center sm:text-left">
            <h2 className="font-semibold mb-3 text-lg sm:text-xl font-poppins">Contact</h2>
            <ul className="space-y-2">
              {/* Corrected textsm to text-sm */}
              <li><a href="#" className="hover:underline text-sm sm:text-base leading-6 font-poppins">Instagram</a></li>
              <li><a href="#" className="hover:underline text-sm sm:text-base leading-6 font-poppins">Twitter</a></li>
              <li><a href="#" className="hover:underline text-sm sm:text-base leading-6 font-poppins">Facebook</a></li>
            </ul>
          </div>

          {/* Support Section - Responsive Text Size */}
          <div className="text-center sm:text-left">
            <h2 className="font-semibold mb-3 text-lg sm:text-xl font-poppins">Support</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-sm sm:text-base leading-6 font-poppins">FAQs</a></li>
              <li><a href="#" className="hover:underline text-sm sm:text-base leading-6 font-poppins">Support Centre</a></li>
              <li><a href="#" className="hover:underline text-sm sm:text-base leading-6 font-poppins">Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer