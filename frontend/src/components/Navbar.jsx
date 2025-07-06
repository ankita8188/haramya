"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [whoDropdownOpen, setWhoDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [travelerSubMenuOpen, setTravelerSubMenuOpen] = useState(false);
const [explorerSubMenuOpen, setExplorerSubMenuOpen] = useState(false);
const [plannerSubMenuOpen, setPlannerSubMenuOpen] = useState(false);


  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setWhoDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#1A959E]  text-white ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex space-x-2 relative w-60">
          <p className="text-[55px] top-[20px] text-black island font-island leading-none">
            Harmya
          </p>
          <p className="text-[10px] italic island absolute left-[105px] top-[37px] text-black">
            making travel easy
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-1 sm:space-x-6 lg:space-x-5 text-sm sm:text-base lg:text-lg font-medium">
          <Link href="/" className="hover:underline text-sm">
            Home
          </Link>

          {/* Dropdown: Who are you? */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setWhoDropdownOpen(!whoDropdownOpen)}
              className="text-sm hover:underline focus:outline-none"
            >
              Who are you?
            </button>

            {whoDropdownOpen && (
              <div className="absolute bg-white text-black rounded shadow-md mt-2 py-2 w-48 z-50">
           {/* Traveler Main Dropdown */}
<div className="relative">
  <button
    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
    onClick={() => {
      setTravelerSubMenuOpen(!travelerSubMenuOpen);
      // Close others
      setExplorerSubMenuOpen(false);
      setPlannerSubMenuOpen(false);
    }}
  >
    Traveler
  </button>

  {travelerSubMenuOpen && (
    <div className="absolute top-0 left-full bg-white text-black rounded shadow-md py-2 w-48 z-50">
      {/* Explorer submenu */}
      <div className="relative">
        <button
          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          onClick={() => {
            setExplorerSubMenuOpen(!explorerSubMenuOpen);
            setPlannerSubMenuOpen(false);
          }}
        >
           Bhartiya Tourist
        </button>
        {explorerSubMenuOpen && (
          <div className="absolute top-0 left-full bg-white text-black rounded shadow-md py-2 w-48 z-50">
            <Link
              href="/who/traveler/explorer/place1"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                setMenuOpen(false);
                setWhoDropdownOpen(false);
              }}
            >
            Explore Bharat Virtually
            </Link>
            <Link
              href="/who/traveler/explorer/place2"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                setMenuOpen(false);
                setWhoDropdownOpen(false);
              }}
            >
               Plan a trip
            </Link>
          </div>
        )}
      </div>

      {/* Trip Planner submenu */}
      <div className="relative">
        <button
          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          onClick={() => {
            setPlannerSubMenuOpen(!plannerSubMenuOpen);
            setExplorerSubMenuOpen(false);
          }}
        >
        Foreign Tourist
        </button>
        {plannerSubMenuOpen && (
          <div className="absolute top-0 left-full bg-white text-black rounded shadow-md py-2 w-48 z-50">
            <Link
              href="/who/traveler/planner/plan1"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                setMenuOpen(false);
                setWhoDropdownOpen(false);
              }}
            >
             Explore Bharat Virtually
            </Link>
            <Link
              href="/who/traveler/planner/plan2"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                setMenuOpen(false);
                setWhoDropdownOpen(false);
              }}
            >
             Plan a trip
            </Link>
            <Link
              href="/who/traveler/planner/plan2"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                setMenuOpen(false);
                setWhoDropdownOpen(false);
              }}
            >
             Apply E-Visa
            </Link>
          </div>
        )}
      </div>
    </div>
  )}
</div>


                <Link
                  href="/who/guide"
                  onClick={() => setWhoDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Tourism Stakeholder
                </Link>
                <Link
                  href="/who/agent"
                  onClick={() => setWhoDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Tour Guide
                </Link>
                <Link
                  href="/who/agent"
                  onClick={() => setWhoDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Vlogger
                </Link>
              </div>
            )}
          </div>

          <Link href="/destination" className="hover:underline text-sm">
            Destinations
          </Link>
          <Link href="/about" className="hover:underline text-sm">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline text-sm">
            Contact Us
          </Link>

          {/* Icons */}
          <div className="flex items-center space-x-4 sm:space-x-5 lg:space-x-6">
            <Link href="/cart" aria-label="Shopping Cart">
              <FiShoppingCart className="text-md sm:text-[26px] lg:text-xl hover:scale-110 transition-transform" />
            </Link>
            <Link href="/login" aria-label="User Account">
              <FiUser className="text-md sm:text-[26px] lg:text-xl hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-4 text-base font-medium bg-black bg-opacity-95 backdrop-blur-sm">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block">
            Home
          </Link>
          <Link href="/who/traveler" onClick={() => setMenuOpen(false)} className="block">
            Traveler
          </Link>
          <Link href="/who/guide" onClick={() => setMenuOpen(false)} className="block">
            Guide
          </Link>
          <Link href="/who/agent" onClick={() => setMenuOpen(false)} className="block">
            Travel Agent
          </Link>
          <Link href="/destination" onClick={() => setMenuOpen(false)} className="block">
            Destinations
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block">
            About Us
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block">
            Contact Us
          </Link>

          {/* Icons */}
          <div className="flex space-x-6 pt-2">
            <Link href="/cart" aria-label="Shopping Cart">
              <FiShoppingCart className="text-2xl sm:text-3xl" />
            </Link>
            <Link href="/login" aria-label="User Account">
              <FiUser className="text-2xl sm:text-3xl" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;