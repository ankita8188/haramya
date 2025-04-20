"use client";
import React, { useRef, useState } from "react";
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
} from 'react-icons/fa6';
import Link from "next/link";
import Image from "next/image";



export default function ContactPage() {

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'your_service_id',       // replace with your service ID
        'your_template_id',      // replace with your template ID
        form.current,
        'your_public_key'        // replace with your public key (NOT private key!)
      )
      .then(
        (result) => {
          alert('Message Sent Successfully!');
          form.current?.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <>
      <div className="min-h-screen bg-black text-white font-sans">
        {/* Header */}
     
          <header className="bg-[#00D5BE] text-white px-4 sm:px-6 py-2 flex justify-between items-center">
            {/* Logo and Tagline */}
            <Link href="/" className="flex flex-col w-fit">
              <p className="text-2xl sm:text-3xl md:text-4xl island leading-none">Harmya</p>
              <p className="text-xs sm:text-sm island italic ml-4 sm:ml-12">making travel easy</p>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 items-center text-sm">
              <Link href="#" className="hover:underline">Home</Link>
              <Link href="#" className="hover:underline">Who are you?</Link>
              <Link href="#" className="hover:underline">Destinations</Link>
              <Link href="#" className="hover:underline">About Us</Link>
              <Link href="#" className="hover:underline">Contact Us</Link>
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
              <User className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
            </nav>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-[#1d3557] text-white flex flex-col gap-4 items-center py-4 shadow-md z-50 md:hidden">
                <a href="#" className="hover:underline" onClick={() => setMobileMenuOpen(false)}>Home</a>
                <a href="#" className="hover:underline" onClick={() => setMobileMenuOpen(false)}>Who are you?</a>
                <a href="#" className="hover:underline" onClick={() => setMobileMenuOpen(false)}>Destinations</a>
                <a href="#" className="hover:underline" onClick={() => setMobileMenuOpen(false)}>About Us</a>
                <a href="#" className="hover:underline" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
                <div className="flex gap-6 mt-2">
                  <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                  <User className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                </div>
              </div>
            )}
          </header>

          {/* Main */}
          <main className="flex flex-col items-center justify-center text-center py-8 sm:py-16 px-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
    Get in <span className="text-teal-400">touch</span>
  </h1>
  <p className="text-gray-300 mt-4 max-w-2xl text-sm sm:text-base md:text-lg">
    Reach out, and let's create a universe of possibilities together!
  </p>

  <section className="mt-12 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center w-full max-w-6xl">
    {/* Contact Form */}
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-gray-900 p-6 sm:p-8 rounded-lg w-full max-w-md space-y-4 shadow-lg text-left"
    >
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-white">Let's connect real-life heroes</h2>
        <p className="text-sm text-gray-400 mt-1">
          We'd love to hear from you! Fill out the form below and our team will get back to you shortly.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Last Name"
          className="bg-gray-800 text-white p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="First Name"
          className="bg-gray-800 text-white p-2 rounded w-full"
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="bg-gray-800 text-white p-2 rounded w-full"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="bg-gray-800 text-white p-2 rounded w-full"
      />
      <textarea
        placeholder="Message"
        className="bg-gray-800 text-white p-2 rounded w-full"
        rows={4}
      />
      <button
        type="submit"
        className="w-full bg-purple-500 hover:bg-purple-600 text-white p-2 rounded font-semibold"
      >
        Send it to the moon →
      </button>
    </form>

    {/* Image Section */}
    <div className="w-full max-w-md relative px-4 sm:px-0">
      <img
        src="/cobt.jfif"
        alt="Astronaut"
        className="w-full h-auto rounded-xl object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-3 rounded-b-xl text-sm italic">
        "Two lunar months revealed Earth's fragile beauty against vast silence,
        transforming my view of our place in the universe." <br /> — Imrel Tristam
      </div>
    </div>
  </section>
</main>

      </div>


      <div className="min-h-screen w-full text-white flex flex-col items-center">
        {/* Top section: Dark Blue background */}
        <div className="w-full h-20 bg-gradient-to-b from-cyan-300 via-cyan-800 to-[#0c0f27]"></div>

        {/* Content section: Black background */}
        <div className="w-full bg-black px-4 sm:px-6 py-8 flex flex-col items-center">

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Bharat, a civilization lasting from eternity
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              A uniquely Bharat experience awaits you always
            </p>
          </div>

          {/* Map + Floating Info Box */}
          <div className="relative w-full max-w-5xl h-[300px] sm:h-[400px] mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.581010906885!2d80.954577814884!3d26.85053568316002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdcc4f6d52ff%3A0x7fc7eebc617de59c!2sUniversity%20of%20Lucknow!5e0!3m2!1sen!2sin!4v1618921764584!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>

            {/* Floating Info Box */}
            <div className="absolute -left-4 sm:-left-20 top-14 bg-white text-black px-4 sm:px-6 py-8 sm:py-14 rounded-4xl shadow-2xl w-[90%] sm:w-80 max-w-xs z-10 ">
              <h2 className="text-2xl font-semibold mb-2">Locate Us</h2>
              <p className="text-sm mb-2">
                Questions, comments, or suggestions? Simply fill in the form above and we'll get in touch shortly.
              </p>
              <p className="text-sm font-medium mb-1">
                University of Lucknow, Babuganj, Hasanganj, Lucknow, Uttar Pradesh 226007
              </p>
              <p className="text-sm mb-1">📞 +91-8763051236</p>
              <p className="text-sm">✉️ Contact@harmyaindia.com</p>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-400 mt-auto">
            <span className="font-serif italic">Harmya</span><br />
            <span className="text-white font-medium">
              Explore at the comfort of your homes, making travel easy
            </span>
          </footer>
        </div>
      </div>


      <div className="bg-black text-white w-full">

        {/* WhatsApp Banner */}
        <div className='bg-black pt-[6rem] pl-4 sm:pl-[4rem]'>
          <div className='bg-[linear-gradient(0deg,_#037D01_0%,_#025C00_100%)] h-[6rem] sm:h-[8rem] w-full max-w-[85rem] mx-auto pl-4 rounded-full flex flex-col sm:flex-row justify-center items-center sm:items-center gap-4 sm:gap-0 shadow-lg'>
            <p className='text-lg sm:text-xl text-white mt-4 sm:mt-[2rem] mr-4 sm:mr-[2rem]'>Contact Us On Whatsapp</p>
            <button className='bg-gray-300 rounded-xl w-32 sm:w-40 h-8 sm:h-10 text-base sm:text-xl text-green-400 text-center'>Start Chat</button>
          </div>
        </div>

        {/* Middle Section with Image + Form */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-24 py-6 sm:py-10 gap-6 sm:gap-10">

          {/* Lord Shiva Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/cont2.jfif"
              alt="Lord Shiva"
              width={400}
              height={300}
              className="rounded-xl shadow-md w-full h-auto"
            />
          </div>

          {/* Newsletter Form */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Subscribe For Newsletter</h3>
            <div className="flex items-center gap-2 mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-4 rounded-md text-black bg-white w-full"
              />
              <button className="bg-cyan-500 text-white px-4 py-4 rounded-md hover:bg-cyan-600 transition">
                Subscribe
              </button>
            </div>

            <p className="mb-2">Follow On:</p>
            <div className="flex gap-4 text-2xl">
              <FaInstagram className="text-pink-500 hover:scale-110 transition" />
              <FaFacebook className="text-blue-600 hover:scale-110 transition" />
              <FaXTwitter className="text-white hover:scale-110 transition" />
              <FaLinkedin className="text-blue-400 hover:scale-110 transition" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-[#1a3a3a] py-6 flex justify-between px-6 md:px-24 text-gray-300">
          <Link href="/" className="flex space-x-2 relative">
            <p className="text-6xl top-[20px] text-white island font-island leading-none">
              Harmya
            </p>
            <p className="text-xl italic island absolute left-10 top-[57px] text-white">
              making travel easy
            </p>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm mr-10">
            <div>
              <p>About</p>
              <p>About us</p>
              <p>Read All</p>
              <p>Host a Stay</p>
            </div>
            <div>
              <p>Contact</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
            <div>
              <p>Support</p>
              <p>FAQs</p>
              <p>Refund / Contact</p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
