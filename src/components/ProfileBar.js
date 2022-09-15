import { useState, useEffect } from "react";
import searchIcon from '../assets/icons/search.png';
import profPicSample from '../assets/images/profpic-sample.png'

export default function ProfileBar() {

  const [profPic, setProfPic] = useState(undefined);

  useEffect(() => setProfPic(profPicSample), []);

  const onMouseEnterSearchIcon = () => {
    document.querySelector('#pb-search').className = 'flex items-center bg-[#414163] text-[12px] rounded-lg w-52 duration-1000 focus:outline-0';
  }

  const onBlurSearchIcon = () => {
    document.querySelector('#pb-search').className = 'flex w-0 duration-500';
  }

  return (
    <div className="profile-bar flex h-full px-4 items-center justify-between text-white border-r-0 border-white">
      <img alt="profile pic" src={profPic} className="w-12"/>
      <div 
        className="flex rounded-lg bg-[#414163]" 
        onMouseEnter={onMouseEnterSearchIcon}
        onBlur={onBlurSearchIcon}
      >
        <img className="w-8 h-8" alt="search" src={searchIcon} />
        <input id="pb-search" type="text" className="flex w-0" placeholder="Search..."/>
      </div>
    </div>
  );
}