import newChat from "../assets/icons/new-chat.png";
import newGroup from "../assets/icons/new-group.png";
import settings from "../assets/icons/settings.png";

export default function MenuBar(){

  const imageClassName = 'w-[28px] h-auto opacity-70 hover:cursor-pointer hover:opacity-100';

  return(
    <div className="menu-bar grid grid-cols-3 w-full h-full content-center justify-items-center">
      <img className={imageClassName} alt="new chat" src={newChat} />
      <img className={imageClassName} alt="new group" src={newGroup} />
      <img className={imageClassName} alt="settings" src={settings} />
    </div>
  )
}