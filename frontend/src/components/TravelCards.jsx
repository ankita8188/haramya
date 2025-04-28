import Image from "next/image";

export default function BestDestinations() {
  const destinations = [
    {
      title: "Place name",
      subtitle: "about place",
      img: "neom-GCrvnNHJAMo-unsplash1.jpg",
      author: "Traveler",
    
      rowSpan: "row-span-3",    },
    {
      title: "Place name",
      subtitle: "about place",
      img: "omar-al-ghosson-YS23gFKcxRk-unsplash1.jpg",
      author: "Traveler",
    
      rowSpan: "row-span-2",
      
    },
    {
      title: "Place name",
      subtitle: "about place",
      img: "jeremiah-del-mar-NjZPpFQlTPs-unsplash1.jpg",
      author: "influencer",

      rowSpan: "row-span-3",
        },
    {
      title: "The best of Place name",
      subtitle: "about place ",
      img: "saleh-caljrUf41Jw-unsplash1.jpg",
      author: "influencer",
    
      rowSpan: "row-span-3",
    },
    {
      title: "Place name",
      subtitle: "about place",
      img: "pawel-nolbert-62OK9xwVA0c-unsplash1.jpg",
      author: "Traveler",
    
      rowSpan: "row-span-2",
        },
    {
      title: "The best things to do in place name",
      subtitle: "about place",
      img: "Al-Hada-Mountain-min1.jpg",
      author: "Traveler",
    
      rowSpan: "row-span-2",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-white text-center  text-4xl  poppins mb-2 font-bold">Best Destinations</h1>
      <p className="text-gray-300 text-center  text-xl poppins not-italic font-normal text-base/6 mb-10">
      Explore the enchanting landscapes of Bharat, from <br />
      the breathtaking deserts to the stunning coastal shores.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[10rem] gap-6">
                {destinations.map((dest, idx) => (
          <div
            key={idx}
            className={`rounded-2xl overflow-hidden relative bg-cover bg-center poppins ${dest.rowSpan || "row-span-2"}`}      
            style={{ backgroundImage: `url(${dest.img})` }}
          >
            <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold capitalize leading-snug">
                  {dest.title}
                </h2>
                <p className="text-lg text-gray-300 poppins">{dest.subtitle}</p>
              </div>
              <div className="flex items-center gap-2">
              <div
                
                
                  className="rounded-full w-[3rem] h-[3rem] bg-white  border-2 border-white"
                />
                <span className="text-md poppins">Shot by<br /> <strong>{dest.author}</strong></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}