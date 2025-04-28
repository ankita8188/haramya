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
import Navbar from "@/components/Navbar";



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
      <Navbar></Navbar>

          {/* Main */}
          <main className="flex flex-col items-center justify-center text-center py-8 sm:py-16 px-4 bg-[#0A0D17]">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent"  style={{
          WebkitBackgroundClip: 'text', // Important for Safari
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent', // Important for Safari
          backgroundImage: `
            linear-gradient(89.29deg, #FFFFFF 49.86%, #004247 76.63%, #004247 104.63%),
            linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))
          `
        }}>
    Get in touch
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
        <div className="w-full h-35 "style={{ background: "linear-gradient(0deg, #000000 0%, #028B95 100%)" }}
        ></div>

        {/* Content section: Black background */}
        <div className="w-full bg-black px-4 sm:px-6 py-8 flex flex-col items-center">

          {/* Heading */}
          <div className="text-center mt-[-110px] mb-20">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Bharat, a civilization lasting from eternity
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              A uniquely Bharat experience awaits you always
            </p>
          </div>


          {/* Map + Floating Info Box */}
          <div className="relative w-full max-w-5xl h-[300px] sm:h-[400px] mb-10 ">
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
            <div className="absolute -left-4 sm:-left-20 top-14 bg-white text-black px-4 sm:px-6 py-8 sm:py-5 rounded-4xl shadow-2xl w-[90%] sm:w-80 max-w-xs z-10 ">
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
          <footer className="text-center text-sm text-white mt-auto">
            <span className="text-4xl imperial">Harmya</span><br />
            <span className="text-white text-lg font-medium montserrat">
              Explore at the comfort of your homes, making travel easy
            </span>
          </footer>
        </div>
      </div>


      <div className="bg-black text-white w-full">

        {/* WhatsApp Banner */}
        <div className='bg-black pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8'>
          <div className='bg-[linear-gradient(0deg,_#037D01_0%,_#025C00_100%)] h-auto min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem] w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-6 sm:px-8 md:px-12 rounded-3xl sm:rounded-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 shadow-lg'>
            <p className='text-center sm:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl text-white poppins font-semibold leading-tight'>
              Contact Us On Whatsapp
            </p>
            <button className='bg-white rounded-lg sm:rounded-xl px-4 py-2 sm:px-5 sm:py-2 md:px-6 text-sm sm:text-base md:text-lg poppins text-green-600 font-medium hover:bg-gray-100 transition duration-200 flex-shrink-0 whitespace-nowrap'>
              Start Chat
            </button>
          </div>
        </div>


        {/* Middle Section with Image + Form */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-24 py-6 sm:py-10 gap-6 sm:gap-10">

          {/* Lord Shiva Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/cont2.jfif"
              alt="Lord Shiva"
              width={300}
              height={300}
              className="rounded-xl shadow-md w-full h-auto"
            />
          </div>

          {/* Newsletter Form */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Subscribe For Newsletter</h3>
            <div className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-4 rounded-tl-md rounded-bl-md text-black bg-white w-[60%]"
              />
              <button className="w-[30%] bg-[#00AAA1] text-white px-4 py-4 rounded-tr-md rounded-br-md hover:bg-cyan-600 transition">
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
      </div>
    </>

  );
}
