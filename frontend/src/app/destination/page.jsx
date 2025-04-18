import React from 'react'
import Navbar from '@/Components/Navbar'
import TravelCards from "@/Components/TravelCards"
import Cards from "@/Components/Cards"
import ImageSlider from "@/Components/ImageSlider"
import Footer from "@/Components/Footer"

const destinations = [
    {
      image: "/images/hawa.jpg",
      title: "Place Name",
      subtitle: "Mountains",
    }
  ];
 const Smalldestin=[
    {
        image: "/images/hawa.jpg",
        title: "Place Name",
        subtitle: "Mountains",
      }
 ]

const Hero = () => {
  return (
    <div>
        <section className="relative bg-[radial-gradient(61.07%_61.07%_at_50%_38.93%,_#E7EDEF_0%,_#028B95_100%)]  w-full h-[100vh] overflow-hidden">
  {/* Navbar */}
 <Navbar/>

  {/* Heading Section */}
  <div className="absolute inset-0 flex flex-col justify-center items-center z-10   text-center px-4 ">
    <h1 className="text-[#004247] font-bold text-[32px] sm:text-[48px] md:text-[72px] lg:text-[95px] leading-tight drop-shadow-xl">
      Destinations
    </h1>
    <p className='text-[#004247] font-bold text-[8px] sm:text-[8px] md:text-[12px] lg:text-[15px] leading-tight drop-shadow-xl'>Bharat is rich in heritage and history. The country is 
    home to hundreds of historically important sites.</p>
 </div>
</section>
 <div className=''><img src="Kashi.jpg"  alt="" className='w-95rem h-18rem' /></div>
<div>
  <TravelCards/>

</div>
<h1 className='bg-black text-white font-bold text-xl pl-[4rem]'>Traveler Essential</h1>
<div className=' flex justify-center gap-[6rem] items-center pt-[4rem] pl-8 pr-8 bg-black'>
<Cards/>
<Cards/>
<Cards/>
</div>

<div className=' bg-black pt-[6rem] pl-[4rem]'>
      <div className='bg-[linear-gradient(0deg,_#037D01_0%,_#025C00_100%)] h-[8rem] w-[85rem]  pl-4 rounded-full flex justify-center sho  shadow-lg '>
        <p className='text-xl text-white mt-[2rem] mr-[2rem]'>Contact Us On Whatsapp</p>
        <button className='bg-gray-300 rounded-xl w-25 h-10 justify-end text-xl ml-[60rem] mt-[2rem] text-green-400 text-center '>Start Chat</button>
      </div>
      </div>
    

      <div className='bg-black h-[42rem] w-[95rem] flex justify-center items-center '>
    <ImageSlider/>
    </div>
    <Footer/>

      
      
      </div>
    
  )
}

export default Hero