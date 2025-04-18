
import React from 'react'

const Footer = () => {
  return (
    <div className='w-[95rem]'>
        <footer className="bg-[#052527] border-t border-gray-700 text-white py-20 px-6 md:px-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0">
    
    {/* Logo and Tagline */}
    <div className="flex flex-col items-start">
      <h1 className="text-4xl font-cursive italic text-white">Harmya</h1>
      <p className="text-sm text-yellow-400 italic mt-1">making travel easy</p>
    </div>

    {/* Sections Container */}
    <div className="flex flex-col sm:flex-row justify-between gap-12 w-full md:w-auto">
      
      {/* About Section */}
      <div className="text-left">
        <h2 className="font-bold mb-2 text-2xl md:text-3xl">About</h2>
        
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline text-lg md:text-2xl">About us</a></li>
          <li><a href="#" className="hover:underline text-lg md:text-2xl">Features</a></li>
          <li><a href="#" className="hover:underline text-lg md:text-2xl">News & Blogs</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="text-left">
        <h2 className="font-bold mb-2 text-2xl md:text-3xl">Contact</h2>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline text-lg md:text-2xl">Instagram</a></li>
          <li><a href="#" className="hover:underline text-lg md:text-2xl">Twitter</a></li>
          <li><a href="#" className="hover:underline text-lg md:text-2xl">Facebook</a></li>
        </ul>
      </div>

      {/* Support Section */}
      <div className="text-left">
        <h2 className="font-bold mb-2 text-2xl md:text-3xl">Support</h2>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline text-lg md:text-2xl">FAQs</a></li>
          <li><a href="#" className="hover:underline text-lg md:text-2xl">Support Centre</a></li>
          <li><a href="#" className="hover:underline text-lg md:text-2xl">Feedback</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer