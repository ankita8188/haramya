
"use client";

import { useEffect, useState } from "react";
import { Phone, CheckCircle, Users, Star, Link } from 'lucide-react';


import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

const images = ["/th (1).jfif", "/mahal.jfif", "/beech.jfif"];
const imageData = [
  { src: 'place5.jpg', border: 'border-yellow-400', width: 202, height: 146 },
  { src: 'place2.jpeg', border: 'border-yellow-400', width: 202, height: 154 },
  { src: 'place3.jpg', border: 'border-yellow-400', width: 202, height: 146 },
  { src: 'place4.jpg', border: 'border-yellow-400', width: 202, height: 146 },
  { src: 'place1.jpg', border: 'border-yellow-400', width: 202, height: 146 },
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
    <main className="min-h-screen bg-cover bg-center bg-no-repeat font-sans bg-[#028B95] ">
      {/* Navbar */}


      {/* Hero Section with Custom Carousel */}
      <section className="relative pt-3 w-full h-screen overflow-hidden bg-[radial-gradient(61.07%_61.07%_at_50%_38.93%,_#E7EDEF_0%,_#028B95_100%)] ">
        {/* Your content here */}
        {/* Navbar (should be above the overlay) */}
        <Navbar />

        {/* Heading Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-2">
          <h1 className="text-[#004146] font-bold text-[28px] sm:text-[23px] md:text-[38px] lg:text-[54px] leading-[1.2] drop-shadow-xl [font-family:'Poppins-Bold',Helvetica]">
            Explore <br className="hidden sm:block" /> Bharat Virtually
          </h1>

          <p className="mt-[-10px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#004146] text-[11px] text-center tracking-[0] leading-[23.3px] whitespace-nowrap">
            Bringing places at the comfort of your Homes.
          </p>
        </div>



        {/* Info Section */}
        <div className="absolute bg-[#006271] bottom-8 left-1/2 -translate-x-1/2 w-[96vw] flex flex-col md:flex-row justify-between text-white px-10 sm:px-10 py-2 gap-y-6 md:gap-y-0 z-10">
          {/* Box 1 */}
          <div className="w-full md:w-[30%]">
            <h2 className="text-[15px] sm:text-[18px] md:text-[20px] font-semibold mb-1">
              History and Heritage
            </h2>
            <p className="text-[12px] sm:text-[13px] md:text-[10px] leading-snug">
              Bharat has long occupied an<br /> important role at the center of the<br /> world from ancient times. Located at<br /> the Indian Ocean.
            </p>
          </div>

          {/* Box 2 */}
          <div className="w-full md:w-[30%]">
            <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold mb-1">
              People and Culture
            </h2>
            <p className="text-[12px] sm:text-[13px] md:text-[10px] leading-snug">
              Bharat has a rich Culture<br />
              Shaped by the diversity of its people,<br />
              which has formed the basis of its cultural identity.
            </p>
          </div>
        </div>

      </section>





      <section className="relative bg-[#002F36] pt-6 px-2 sm:px-6 xl:px-0 min-h-[100vh] sm:min-h-[120vh] xl:h-[193vh] mt-22">

<div className="relative z-10 max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between">

  {/* Left Side - Image Grid and Text */}
  <div className="max-w-xl w-full mt-[-60px] sm:mt-[-80px] xl:mt-[-107px]">
    <div className="w-full px-2 sm:px-8 xl:px-10 text-center xl:text-left">
      <h2 className="text-2xl sm:text-3xl xl:text-4xl font-medium notosans">Beat the Summer Heat</h2>
      <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold mt-2 leading-tight">
        <span className="text-yellow-400 notosans">Escape</span> to<br />
        <span className="notosans">the Hills</span>
      </h1>
      <h3 className="text-6xl sm:text-8xl xl:text-[140px] mt-10 italic font-cursive island">Harmya</h3>
      <p className="text-xl sm:text-2xl xl:text-[35px] mb-12 montserrat">making Travel Easy</p>
    </div>

    {/* Image Grid */}
    <div className="flex flex-col ml-6 sm:flex-row gap-6 items-center sm:items-start mt-20 sm:mt-40 xl:mt-50">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        {imageData.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className={`rounded-3xl overflow-hidden border-5 ${image.border} w-32 sm:w-40 xl:w-55 ${index === 2 ? 'h-36 sm:h-44 xl:h-73' : 'h-32 sm:h-40 xl:h-49'}`}
          >
            <img
              src={image.src}
              alt={`place-${index}`}
              width={image.width}
              height={image.height}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        {imageData.slice(3).map((image, index) => (
          <div
            key={index + 3}
            className={`rounded-3xl mt-10 overflow-hidden border-5 ${image.border} w-32 sm:w-40 xl:w-55 ${index === 0 ? 'h-44 sm:h-52 xl:h-73' : 'h-32 sm:h-40 xl:h-49'}`}
          >
            <img
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
  <div className=" border w-[80vw]  flex flex-col items-center lg:px-0 px-4 sm:px-6 mt-[-30px] sm:mt-[-120px] xl:mt-[-230px]">
    <div className="w-full sm:w-[80vw] xl:w-[60vw]">
      <Image
        src="/elephant.webp"
        alt="Elephant Image"
        width={1400}
        height={890}
        className="object-cover rounded-3xl w-full h-auto mt-10 sm:mt-16 xl:mt-20    "
        priority
      />
    </div>

    {/* Text Below Image */}
    <div className="text-white rounded-2xl p-4 sm:p-6 text-center sm:text-left mt-5 w-full sm:w-[80vw] xl:w-[60vw]">
      <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 xl:mb-6 ml-0 sm:ml-2 xl:ml-10">
        Why
      </h2>
      <h3 className="text-5xl sm:text-6xl xl:text-7xl island text-yellow-300 -mt-1 ml-0 sm:ml-2 xl:ml-11">
        Harmya?
      </h3>

      <p className="mt-4 sm:mt-6 text-[13px] sm:text-[15px] xl:text-[16px] leading-[1.6] ml-0 sm:ml-2 xl:ml-50">
        A future where your travel choices have no geographic<br />
        constraints. Where you can join your friends in the front row of<br />
        a Ganga Aarti during Dev Deepawali — but the crowd is 30<br />
        million strong, your friends are on the other side of the world,<br />
        and it’s all happening at the Great Kashi. Later you’ll do some<br />
        shopping at the virtual streets of Gudualia and Dal Mandi of<br />
        Kashi and take a digital Ganga cruise, before teleporting back<br />
        home in an instant.<br/>
   
        Impossible? Or tempting?
      </p>
    </div>
  </div>

</div>

{/* Stats Section */}
<div className="md:absolute md:bottom-[-50] md:left-100 sm:mt-[-70px] flex flex-col sm:flex-row gap-4 mx-auto w-full sm:w-[200px] xl:w-[500px] lg:w-[500px]">
  <div className="bg-black flex justify-center items-center rounded-4xl px-2 sm:px-3 gap-2 py-3 text-center flex-1">
    <h4 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-yellow-400">02</h4>
    <p className="text-[10px] sm:text-base text-white font-medium">Sites Operational in spiritual tourism</p>
  </div>
  <div className="bg-black flex justify-center items-center rounded-4xl px-2 sm:px-3 gap-2 py-3 text-center flex-1">
    <h4 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-yellow-400">00</h4>
    <p className="text-[10px] sm:text-base text-white font-medium">Eco tourism coming soon</p>
  </div>
</div>

</section>


      <section className="bg-gradient-to-b from-cyan-700 to-white py-18 px-6"></section>

      <section className="bg-white py-16 px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center text-black">

          {/* Feature 1 */}
          <div className="flex  items-center">

            <img src="/temple.jfif" alt="Plane Icon" className="w-20 h-20 mb-4 rounded-full" />
            <div>
              <h3 className="text-md font-bold mb-2">Travels & Tours</h3>
              <p className="text-[10px] max-w-xs">
                Sparking the traveler’s interest in a<br /> destination. HARMYA offers virtual<br /> tours, immersive destination previews,<br /> and personalized recommendations.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex  items-center ">
            <img src="/mahal.jfif" alt="Hotel Icon" className="w-20 h-20 mb-4 rounded-full" />
            <div>

              <h3 className="text-md font-bold mb-2">Planning & Booking</h3>
              <p className="text-[10px] max-w-xs">
                HAR
                MYA can facilitate seamless<br /> bookings, offer augmented reality<br /> previews of hotels, and provide real-time<br /> information on availability and pricing.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex  items-center">
            <img src="/beech.jfif " alt="Car Icon" className="w-20 h-20 mb-4 rounded-full" />
            <div>
              <h3 className="text-md font-bold mb-2">L&E and Visitors Support</h3>
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
            <h2 className="text-3xl md:text-3xl text-black font-bold">Best Destinations</h2>
            <p className="text-sm md:text-sm mt-2 max-w-3xl mx-auto text-black px-2">
              Explore the enchanting landscapes of Bharat, from<br /> the breathtaking deserts and mountains to the stunning coastal shores.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-18">
            {/* Left Arrow */}
            <div
              className="bg-[#222] text-white p-4 md:p-6 rounded-full cursor-pointer hover:scale-110 hover:shadow-2xl transition-all duration-300 h-20 w-20 md:h-[184px] md:w-[60px] flex items-center justify-center"
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
              <div className="bg-black text-white rounded-[2rem] overflow-hidden flex flex-col md:flex-row max-w-full md:max-w-4xl w-full md:w-[550px] h-auto md:h-[280px] shadow-2xl">
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
                    <p className="text-[10px] md:text-[13px]">
                      {destinations[current].description}
                    </p>
                  </div>
                </div>
              </div>

            </div>


            {/* Right Arrow */}
            <div
              className="bg-[#222] text-white p-4 md:p-6 rounded-full cursor-pointer hover:scale-110 hover:shadow-2xl transition-all duration-300 h-20 w-20 md:h-[180px] md:w-[60px] flex items-center justify-center"
              onClick={handleNext}
            >
              <svg className="w-6 h-6 md:w-16 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          {/* Button */}
          <div className="mt-14 flex justify-center">
            <button onClick={() => { router.push("/map") }} className="w-100 bg-gray-800 text-white px-4 py-3 md:px-6 md:py-4 rounded-full text-lg md:text-2xl font-semibold hover:bg-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
              Explore Virtually
            </button>
          </div>
        </div>
      </section>




      <section className="relative w-full h-[110vh]">
        {/* Background Image */}
        <img
          src="/neom-xXqWVUvf_Gw-unsplash1.png" // Replace with your actual image
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
            src="imagecontain.png"
            alt="Explore Bharat Virtually"
            className="w-full h-[250px] md:h-[250px] object-cover"
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
            <div className="w-14 h-14 md:w-16 md:h-16 border-2 border-white rounded-full flex justify-center items-center hover:bg-white/20 cursor-pointer transition duration-300">
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


     <Footer></Footer>

    </main>


  );
}