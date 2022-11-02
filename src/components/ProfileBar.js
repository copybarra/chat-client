import { useState, useRef } from "react";
import searchIcon from '../assets/icons/search.png';

export default function ProfileBar({ profile, onSearchChats }) {

  const { name, avatar } = profile;

  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  const onMouseEnterSearchIcon = () => {
    setIsOpen(true);
    searchRef.current.focus();
  }

  const onBlurSearchIcon = () => {
    setIsOpen(false);
  }

  return (
    <div className="profile-bar flex h-full px-4 items-center justify-between text-white border-r-0 border-white">
      <img alt={name} src={avatar} className="w-12 bg-white rounded-full" />
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
          onChange={(e) => onSearchChats(e.target.value)}
          className={`flex focus:outline-0 duration-500 items-center bg-[#414163] text-[12px] rounded-lg ${isOpen ? 'w-44' : 'w-0'}`}
          placeholder={"Search..."}
        />
      </div>
    </div>
  );
}