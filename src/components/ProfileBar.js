import { useState, useEffect, useRef } from "react";
import searchIcon from '../assets/icons/search.png';
import profPicSample from '../assets/images/profpic-sample.png'

export default function ProfileBar() {

  const [profPic, setProfPic]     = useState(undefined);
  const [isOpen, setIsOpen]       = useState(false);

  const searchRef                 = useRef(null);

  useEffect(() => setProfPic(profPicSample), []);

  const onMouseEnterSearchIcon = () => {
    setIsOpen(true);
    searchRef.current.focus();
  }

  const onBlurSearchIcon = () => {
    setIsOpen(false);
  }

  return (
    <div className="profile-bar flex h-full px-4 items-center justify-between text-white border-r-0 border-white">
      <img alt="profile pic" src={profPic} className="w-12" />
      <div
        className="flex rounded-lg bg-[#414163]"
        onMouseEnter={onMouseEnterSearchIcon}
        onBlur={onBlurSearchIcon}
      >
        <img className="w-8 h-8" alt="search" src={searchIcon} />
        <input 
          id="pb-search" 
          type="text" 
          ref={searchRef} 
          className={`flex focus:outline-0 duration-500 items-center bg-[#414163] text-[12px] rounded-lg ${isOpen ? 'w-52' : 'w-0'}`} 
          placeholder="Search..." 
        />
      </div>
    </div>
  );
}