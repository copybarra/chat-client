import { ReactComponent as Expand } from '../assets/icons/expand.svg';
import defaultPic from '../assets/images/profpic-sample.png';
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as VideoCall } from '../assets/icons/video-call.svg';

export default function ChatBodyHeader({ selectedChat }) {

  const {username, avatarURL} = selectedChat;

  return (
    <div className="chat-body-header flex flex-row gap-2 w-full h-full px-10 items-center justify-between font-bold text-xl z-20">
      <div className='flex flex-row gap-4 items-center'>
        <img alt="profile pic" src={avatarURL ?? defaultPic} className="w-10" />
        {username ?? 'Herr Ober'}
      </div>
      <div className='flex flex-row gap-6 items-center'>
        <Phone className='phone w-6 h-6 cursor-pointer' />
        <VideoCall className='vidcall w-6 h-6 cursor-pointer' />
        <Expand className='w-4 h-4 cursor-pointer' />
      </div>
    </div>
  )
}