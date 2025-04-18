// AboutCard.jsx
import { ArrowRight } from 'lucide-react';

const AboutCard = () => {
  return (
    <div className="relative w-[550px] h-[420px] rounded-2xl overflow-hidden shadow-lg">
      <img
        src="/hawa.jpg"
        alt="Himachal"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-end p-4">
        <div className="bg-white/60 backdrop-blur-md w-full flex justify-between items-center px-4 py-2 rounded-lg">
          <span className="text-gray-800 font-medium">About Himachal</span>
        
        </div>
      </div>
    </div>
  );
};

export default AboutCard;