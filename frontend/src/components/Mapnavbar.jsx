import { FiShoppingCart, FiUser, FiMenu, FiX, FiInfo, FiShare, FiPlayCircle, FiEye, FiMaximize, FiMaximize2, FiShare2 } from "react-icons/fi";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import TranslateSelector from "./translator";
import { MdOutlineQuestionMark } from "react-icons/md";
import { useState } from 'react';
import { FileQuestion, List } from "lucide-react";
const Mapnavbar = () => {
    const lang = ["Engagement","Hindi"];
    const [selected, setSelected] = useState(lang[0]);
  return (
    <nav className="sticky top-2 bg-white text-black font-['Montserrat'] border-b border-black z-50">
      <div className="flex items-center h-14 divide-x divide-black">

        {/* Section 1: Logo */}
        <div className="flex items-center justify-center w-36 h-full px-4">
          <img src="/harmy.png" alt="Logo" className="h-10 object-contain" />
        </div>

        {/* Section 2: Placeholder Logo */}
        <div className="flex items-center w-60 h-full px-4">
            <img src="/exp.png" alt="Logo" className="h-12 w-20" />
            <img src="/person.svg" alt="Logo" className="h-8 w-14" />
            <img src="/q.svg" alt="Logo" className="h-8 w-14" />
          
        </div>

        {/* Section 3: Location Text */}
        <div className="flex items-center justify-center flex-grow h-full px-4 text-center text-xl font-normal">
          Lucknow Zoo, Hazratganj Road-Lucknow
        </div>

        {/* Section 4: Icons */}
        <div className="flex items-center justify-center w-36 h-full px-4 space-x-4 text-xl">
          <FiInfo/>
          <FiShare2 />
        
          <FiMaximize2/>
          
          <FiEye/>
        </div>

        {/* Section 5: Menu */}
        <div className="flex items-center justify-center w-16 h-full px-4 text-2xl">
          <Listbox value={selected} onChange={setSelected}>
            <ListboxButton> </ListboxButton>
          </Listbox>

          <TranslateSelector/>
        </div>

      </div>
    </nav>
  );
};

export default Mapnavbar;
