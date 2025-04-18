"use client";

import { useEffect, useState } from "react";
import { Phone, CheckCircle, Users, Star, Link } from 'lucide-react';
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

const images = ["/th (1).jfif", "/mahal.jfif", "/beech.jfif"];
const imageData = [
  { src: '/beech.jfif', border: 'border-yellow-400', width: 202, height: 144 },
  { src: '/th (2).jfif', border: 'border-white', width: 202, height: 154 },
  { src: '/mahal.jfif', border: 'border-yellow-400', width: 202, height: 144 },
  { src: '/temple.jfif', border: 'border-white', width: 202, height: 144 },
  { src: '/th (1).jfif', border: 'border-yellow-400', width: 202, height: 144 },
];

const destinations = [
  {
    title: 'Kashi',
    image: '/temple.jfif',
    description:
      "Kashi, or Varanasi, is India's spiritual heart where every street, temple, and ghats whispers ancient stories. With the mighty Ganges flowing at its feet, Kashi offers a profound journey of history, culture, and devotion. Witness mesmerizing Ganga Aarti, explore sacred sites, and soak in the spiritual energy of one of the world's oldest cities."
  },
  {
    title: 'Jaipur',
    image: '/mahal.jfif',
    description:
      'Jaipur, the Pink City, is known for its royal palaces, colorful streets, and rich Rajasthani culture. Explore the Amber Fort, City Palace, and vibrant bazaars full of handicrafts and traditional goods.'
  },
  {
    title: 'Goa',
    image: '/beech.jfif',
    description:
      'Goa offers golden beaches, lively nightlife, and serene churches. Whether you want adventure, relaxation, or cultural experiences, Goa is a perfect escape.'
  }
];

export default function Home() {

  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  const handlePrev = () => {
    setSlideDirection("left");
    setCurrent((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideDirection("right");
    setCurrent((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat font-sans ">
      {/* Navbar */}
   

      {/* Hero Section with Custom Carousel */}
      <section className="relative pt-8 w-full h-screen overflow-hidden bg-[radial-gradient(61.07%_61.07%_at_50%_38.93%,_#E7EDEF_0%,_#028B95_100%)]">
      {/* Your content here */}
  {/* Navbar (should be above the overlay) */}
  <Navbar />

  {/* Heading Section */}
  <div className="absolute inset-0 flex justify-center items-center z-10 text-center mt-[-24px] px-2">
    <h1 className="text-[#004247] font-bold text-[20px] sm:text-[43px] md:text-[65px] lg:text-[60px] leading-[1.2] drop-shadow-xl vietnam">
      Explore <br className="hidden sm:block " /> Bharat  Virtually
    </h1>
  </div>

  {/* Info Section */}
  <div className="absolute bg-[#006271] bottom-6 left-1/2 -translate-x-1/2 w-[96vw] flex flex-col md:flex-row justify-between text-white px-10 sm:px-10 py-2 gap-y-6 md:gap-y-0 z-10">
  {/* Box 1 */}
  <div className="w-full md:w-[30%]">
    <h2 className="text-[20px] sm:text-[18px] md:text-[33px] font-bold mb-1">
      History and Heritage
    </h2>
    <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-snug">
      Bharat has long occupied an<br/> important role at the center of the<br/> world from ancient times. Located at<br/> the Indian Ocean.
    </p>
  </div>

  {/* Box 2 */}
  <div className="w-full md:w-[30%]">
    <h2 className="text-[16px] sm:text-[18px] md:text-[33px] font-bold mb-1">
      People and Culture
    </h2>
    <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-snug">
      Bharat has a rich Culture<br />
      Shaped by the diversity of its people,<br />
      which has formed the basis of its cultural identity.
    </p>
  </div>
</div>

</section>



    
   

<section className="relative bg-[#028B95] pt-6 px-4 sm:px-6 overflow-hidden">

  <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center  justify-between gap-8">

    {/* Left Side - Image Grid and Text */}
    <div className=" max-w-xl w-full mt-[0px]">
      <div className=" w-full px-4 sm:px-8 md:px-16 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl notosans md:text-4xl font-medium">Beat the Summer Heat</h2>
        <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold mt-2 leading-tight">
          <span className="text-yellow-400 notosans">Escape</span> to<br />
          <span className="notosans">the Hills</span>
        </h1>
        <h3 className="text-8xl sm:text-5xl island md:text-[140px]  mt-18 italic font-cursive">Harmya</h3>
        <p className="text-xl sm:text-xl montserrat md:text-[35px]  mb-12">making Travel Easy</p>
      </div>

      {/* Image Grid */}
      <div className="flex flex-col ml-6 sm:flex-row gap-6 items-center sm:items-start">
        {/* Left Column - First 3 images */}
        <div className="flex flex-col gap-6">
          {imageData.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className={`rounded-3xl overflow-hidden border-10 ${image.border} w-40 sm:w-53 ${index === 2 ? 'h-44 sm:h-68' : 'h-40 sm:h-44'}`}
            >
              <Image
                src={image.src}
                alt={`place-${index}`}
                width={image.width}
                height={image.height}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Right Column - Last 2 images */}
        <div className="flex flex-col gap-6">
          {imageData.slice(3).map((image, index) => (
            <div
              key={index + 3}
              className={`rounded-3xl mt-10 overflow-hidden border-10 ${image.border} w-40 sm:w-52 ${index === 0 ? 'h-52 sm:h-68' : 'h-40 sm:h-44'}`}
            >
              <Image
                src={image.src}
                alt={`place-${index + 3}`}
                width={image.width}
                height={image.height}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Right Side - Main Image + Description */}
    <div className="w-full md:w-1/2 flex flex-col mt-[-120px] items-center px-4 sm:px-6">
        <Image
          src="/elephant.webp"
          alt="image"
          width={652}
          height={544}
          className="object-cover w-full h-full mr-10 mt-20"
        />
      

      {/* Text Below Image */}
      <div className="bg-[#028b95] text-white rounded-2xl p-4 sm:p-6 text-center sm:text-left">
        <h2 className="text-5xl sm:text-4xl md:text-7xl font-bold mb-6">Why</h2>
        <h3 className="text-6xl sm:text-4xl md:text-7xl island text-yellow-300 -mt-1">Harmya?</h3>

        <p className="mt-4 sm:mt-6 text-[15px] sm:text-[17px] leading-none">
          A future where your travel choices have no geographic constraints. Where you can join your friends in the front row of a Ganga Aarti during Dev Deepawali — but the crowd is 30 million strong, your friends are on the other side of the world, and it’s all happening at the Great Kashi.
        </p>
        <p className="mt-4 text-[15px] sm:text-[17px] leading-none">
          Later you’ll do some shopping at the virtual streets of Gudualia and Dal Mandi of Kashi and take a digital Ganga cruise, before teleporting back home in an instant.
        </p>
        <p className="mt-4 text-[15px] sm:text-[17px] font-medium">Impossible? Or tempting ?</p>

        {/* Stats */}
      </div>
    </div>
  </div>
  <div className="mt-8 sm:mt-16 flex flex-col sm:flex-row gap-4 mx-auto w-[95%] sm:w-[600px] md:w-[700px] lg:w-[800px]">
    <div className="bg-black flex justify-center items-center border rounded-2xl px-4 sm:px-6 gap-2 py-4 text-center flex-1">
      <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">16</h4>
      <p className="text-sm sm:text-base font-medium">Lakh Foreign Tourists<br />per year</p>
    </div>
    <div className="bg-black border flex justify-center items-center gap-2 rounded-2xl px-4 sm:px-6 py-4 text-center flex-1">
      <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">01</h4>
      <p className="text-sm sm:text-base font-medium mt-1">Lakh Tourists per year<br />for Wildlife, in UP</p>
    </div>
  </div>

</section>


      <section className="bg-gradient-to-b from-cyan-700 to-white py-16 px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center text-black">

          {/* Feature 1 */}
          <div className="flex  items-center">
            
            <img src="/temple.jfif" alt="Plane Icon" className="w-20 h-20 mb-4 rounded-full" />
            <div>
            <h3 className="text-lg font-bold mb-2">Travels & Tours</h3>
            <p className="text-[10px] max-w-xs">
              Sparking the traveler’s interest in a destination. HARMYA offers virtual tours, immersive destination previews, and personalized recommendations.
            </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex  items-center ">
            <img src="/mahal.jfif" alt="Hotel Icon" className="w-20 h-20 mb-4 rounded-full" />
            <div>
            
            <h3 className="text-lg font-bold mb-2">Planning & Booking</h3>
            <p className="text-[10px] max-w-xs">
              HAR
              MYA can facilitate seamless bookings, offer augmented reality previews of hotels, and provide real-time information on availability and pricing.
            </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex  items-center">
            <img src="/beech.jfif" alt="Car Icon" className="w-20 h-20 mb-4 rounded-full" />
            <div>
            <h3 className="text-lg font-bold mb-2">L&E and Visitors Support</h3>
            <p className="text-[10px] max-w-xs">
              HARMYA can suggest activities based on preferences, offer virtual and certified human guides, and provide immersive extended reality tours and real-time support.
            </p>
            </div>
          </div>

        </div>
      </section>

      <section className="relative bg-gradient-to-b from-white to-[#85becb] py-16 px-4">
  {/* Dimming overlay */}

  {/* Content container */}
  <div className="relative z-10">
    <div className="text-center mb-10">
      <h2 className="text-5xl md:text-5xl text-black font-bold">Best Destinations</h2>
      <p className="text-xl md:text-2xl mt-2 max-w-3xl mx-auto text-black px-2">
        Explore the enchanting landscapes of Bharat, from the breathtaking deserts and mountains to the stunning coastal shores.
      </p>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-18">
      {/* Left Arrow */}
      <div
        className="bg-[#222] text-white p-4 md:p-6 rounded-full cursor-pointer hover:scale-110 hover:shadow-2xl transition-all duration-300 h-20 w-20 md:h-[354px] md:w-[120px] flex items-center justify-center"
        onClick={handlePrev}
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      {/* Destination Card */}
      <div
        key={current}
        className={`bg-black p-4 md:p-6 rounded-[2rem] transition-all duration-700 ease-in-out transform 
        ${slideDirection === "left" ? "animate-slideFromLeft" : "animate-slideFromRight"}`}
      >
        <div className="bg-black text-white rounded-[2rem] overflow-hidden flex flex-col md:flex-row max-w-full md:max-w-6xl w-full md:w-[770px] h-auto md:h-[380px] shadow-2xl">
          {/* Image */}
          <img
            src={destinations[current].image}
            alt={destinations[current].title}
            className="w-full md:w-[330px] h-60 md:h-full object-cover rounded-[2rem] transform hover:scale-105 transition-transform duration-500"
          />

          {/* Text */}
          <div className="p-4 md:p-6 text-left overflow-y-auto flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">{destinations[current].title}</h3>
              <p className="text-sm md:text-base leading-relaxed">
                {destinations[current].description}
              </p>
            </div>
          </div>
        </div>

      </div>
    

      {/* Right Arrow */}
      <div
        className="bg-[#222] text-white p-4 md:p-6 rounded-full cursor-pointer hover:scale-110 hover:shadow-2xl transition-all duration-300 h-20 w-20 md:h-[354px] md:w-[120px] flex items-center justify-center"
        onClick={handleNext}
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
          {/* Button */}
        <div className="mt-14 flex justify-center">
          <button onClick={()=>{router.push("/map")}} className="bg-gray-800 text-white px-4 py-3 md:px-6 md:py-4 rounded-full text-lg md:text-4xl font-semibold hover:bg-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
            Explore Virtually
          </button>
        </div>
  </div>
</section>




      <section className="relative w-full h-[110vh]">
        {/* Background Image */}
        <img
          src="/th.jfif" // Replace with your actual image
          alt="Hawa Mahal"
          className="w-full h-full object-cover"
        />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Text Content */}
        <div className="absolute bottom-1 left-6 md:left-15 text-white max-w-6xl">
          <h2 className="text-[40px] md:text-7xl italic font-light mb-1 imperial">Hawa</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 notosans">Mahal</h1>
          <p className="text-sm md:text-lg leading-relaxed">
            Built in 1799 by Maharaja Sawai Pratap Singh, the grandson of Maharaja Sawai Jai Singh and designed by
            Lal Chand Ustad, the iconic Hawa Mahal is a cherished landmark nestled right in the heart of Jaipur. It
            gets its name from an astonishing 953 windows or ‘jharokhas’ cleverly designed to create a honeycombed
            cooling system that keeps the palace well-aired and cool, even in sun-reflecting summers.
          </p>
        </div>
      </section>

      <section className="relative bg-[linear-gradient(to_bottom,_#000000,_#027D86)]  py-6 px-4 flex justify-center items-center">
  {/* Dim Overlay */}

  {/* Foreground Content */}
  <div className="relative w-full max-w-7xl rounded-lg overflow-hidden shadow-2xl z-10">
    {/* Foreground image */}
    <img
      src="/temple.jfif"
      alt="Explore Bharat Virtually"
      className="w-full h-[300px] md:h-[350px] object-cover"
    />

    {/* Overlay Text + Arrow */}
    <div className="absolute inset-0 flex justify-between items-center px-6 md:px-12">
      {/* Text */}
      <div className="text-white text-left">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg notosans">
          Explore <br /> Bharat Virtually
        </h2>
      </div>

      {/* Arrow Button */}
      <div  className="w-14 h-14 md:w-16 md:h-16 border-2 border-white rounded-full flex justify-center items-center hover:bg-white/20 cursor-pointer transition duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
</section>



      <section className="bg-white py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-6 items-center px-4 text-black text-sm">


          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 5a2 2 0 012-2h1.28a1 1 0 01.95.68l1.22 3.66a1 1 0 01-.24 1.05l-1.58 1.58a16.004 16.004 0 006.59 6.59l1.58-1.58a1 1 0 011.05-.24l3.66 1.22a1 1 0 01.68.95V19a2 2 0 01-2 2h-.5C9.82 21 3 14.18 3 5.5V5z" />
            </svg>
            <span>Call on +91-8736051236</span>
          </div>


          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v8z" />
            </svg>
            <span>info@harmya.in</span>
          </div>

        </div>
      </section>

      <section className="bg-[#4caab8] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around gap-8 items-center text-black">

          <div className="flex flex-col items-center space-y-2">
            <Phone className="w-4 h-4" />
            <p className="text-[12px]">Here for you</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <CheckCircle className="w-4 h-4" />
            <p className="text-[12px]">Best Price Guarantee</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Users className="w-4 h-4" />
            <p className="text-[12px]">For All Age Groups</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Star className="w-4 h-4" />
            <p className="text-[12px]">Curated Experience</p>
          </div>

        </div>
      </section>


      <footer className="bg-[#002623] text-white py-10 pt-50 px-3 md:px-15">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0">
    
    {/* Logo and Tagline */}
    <div className="flex flex-col items-start">
  <p className="text-[95px] text-white island leading-none">
    Harmya
  </p>
  <p className="text-[25px] italic island text-yellow-400  ml-44 mt-[-27px]">
    making travel easy
  </p>
</div>


    {/* Sections Container */}
    <div className="flex flex-col sm:flex-row justify-between gap-14 w-full md:w-auto mr-20">
      
      {/* About Section */}
      <div className="text-left">
        <h2 className="font-bold mb-2 text-2xl md:text-3xl">About</h2>
        <ul className="space-y-1 leading-1.5">
          <li><a href="#" className="hover:underline text-lg md:text-2xl leading-12">About us</a></li>
          <li><a href="#" className="hover:underline text-lg md:text-2xl leading-12">Features</a></li>
          <li><a href="#" className="hover:underline text-lg md:text-2xl leading-12">News & Blogs</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="text-left">
        <h2 className="font-bold mb-2 text-2xl md:text-3xl">Contact</h2>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline text-lg md:text-2xl leading-12">Instagram</a></li>
          <li><a href="#" className="hover:underline text-lg md:text-2xl leading-12">Twitter</a></li>
          <li><a href="#" className="hover:underline text-lg md:text-2xl leading-12">Facebook</a></li>
        </ul>
      </div>

      {/* Support Section */}
      <div className="text-left">
        <h2 className="font-bold mb-2 text-2xl md:text-3xl">Support</h2>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline text-lg md:text-2xl leading-12">FAQs</a></li>
          <li><a href="#" className="hover:underline text-lg md:text-2xl leading-12">Support Centre</a></li>
          <li><a href="#" className="hover:underline text-lg md:text-2xl leading-12">Feedback</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </main>


  );
}
