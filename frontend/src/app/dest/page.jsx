import Image from "next/image";

export default function BestDestinations() {
  const destinations = [
    {
      title: "Place name",
      subtitle: "#Europe",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      author: "Shanky",
      profile: "https://randomuser.me/api/portraits/men/32.jpg",
      rowSpan: "row-span-3",    },
    {
      title: "Place name",
      subtitle: "Asia's view",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      author: "Shanky",
      profile: "https://randomuser.me/api/portraits/women/44.jpg",
      rowSpan: "row-span-2",
      
    },
    {
      title: "Place name",
      subtitle: "Mountains",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      author: "Shanky Prakash",
      profile: "https://randomuser.me/api/portraits/men/45.jpg",
      rowSpan: "row-span-3",
        },
    {
      title: "The best of Place name",
      subtitle: "#culture",
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      author: "Shanky",
      profile: "https://randomuser.me/api/portraits/women/33.jpg",
      rowSpan: "row-span-3",
    },
    {
      title: "Place name",
      subtitle: "Explore now",
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      author: "Shanky",
      profile: "https://randomuser.me/api/portraits/men/60.jpg",
      rowSpan: "row-span-2",
        },
    {
      title: "The best things to do in place name",
      subtitle: "#adventure",
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      author: "Shanky",
      profile: "https://randomuser.me/api/portraits/women/12.jpg",
      rowSpan: "row-span-2",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-6 sm:py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">Best Destinations</h1>
      <p className="text-center text-gray-400 mb-6 sm:mb-10 text-sm sm:text-base">
        Explore the amazing journeys shared by travelers.<br className="hidden sm:block" /> The best amazing places to see during a season of joy.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[8rem] sm:auto-rows-[10rem] gap-4 sm:gap-6">
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className={`rounded-xl sm:rounded-2xl overflow-hidden relative bg-cover bg-center ${dest.rowSpan || "row-span-2"}`}      
            style={{ backgroundImage: `url(${dest.img})` }}
          >
            <div className="absolute inset-0 bg-black/40 p-3 sm:p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold capitalize leading-snug">
                  {dest.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-300">{dest.subtitle}</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={dest.profile}
                  width={40}
                  height={40}
                  alt="author"
                  className="rounded-full border-2 border-white w-10 h-10 sm:w-[60px] sm:h-[60px]"
                />
                <span className="text-sm sm:text-md">Start by <strong>{dest.author}</strong></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}