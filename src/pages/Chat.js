import { useState, useEffect, useRef } from "react";
import ProfileBar from "../components/ProfileBar";
import BottomMenu from "../components/BottomMenu";
import ChatBody from "../components/ChatBody";
import { io } from 'socket.io-client';

import ChatElement from "../components/ChatElement";

export default function Chat() {
  const chats = useRef([]);
  const [currentUser, setCurrentUser] = useState({});
  const [selectedChat, setSelectedChat] = useState(false);
  const [filteredChats, setFilteredChats] = useState([]);
  const [socket, setSocket] = useState(null);
  // const [chats, setChats] = useState([]);
  // const [sockets, setSockets] = useState([]);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:4000`);
    setSocket(newSocket);
    // newSocket.on('chat-rooms', setSockets);

    newSocket.on('fetch-users', users =>{ 
      chats.current = users;
      setFilteredChats(users); 
    });

    setCurrentUser({
      name: 'BjaDaJa', 
      avatar: `https://robohash.org/${encodeURI(newSocket.id)}?set=set4`
    })

    return () => {
      newSocket.close()
    };
  }, [setSocket]);

  const handleSelect = (chat) => setSelectedChat(chat);

  const filterChats = (term) => {
    if(!term){ 
      setFilteredChats(chats.current); 
      return;
    }
    setFilteredChats(chats.current.filter(chat => chat.username.toLowerCase().includes(term.toLowerCase())));
  }

  return (
    <div className="grid grid-cols-[.4fr_1fr] max-w-screen max-h-screen justify-items-start content-center">
      <div className="grid grid-rows-[.13fr_1fr_.115fr] min-w-[300px] w-full h-screen items-start text-white border-r-2 border-r-white">
        {socket && <ProfileBar profile={currentUser} onSearchChats={filterChats}/>}
        <div
          className="block h-full items-start justify-start text-white p-2 overflow-x-hidden overflow-y-auto"
          style={{ scrollbarWidth: '0px' }}
        >
          {/* {
            sockets.filter(chat => chat !== socket.id).map(chat => { 
              return <ChatElement username={chat} avatarURL={`https://robohash.org/${encodeURI(chat)}?set=set4`} subtitle='' key={chat} selected={selected === chat} onSelect={() => handleSelect(chat)} />
            })
          } */}
          { filteredChats && filteredChats.map((chat, index) => <ChatElement username={chat.username} avatarURL={chat.avatarURL} subtitle={chat.subtitle} key={index} isSelected={selectedChat === chat} onSelect={() => handleSelect(chat)} />)}
        </div>
        <div className="flex h-full items-center justify-center text-white">
          <BottomMenu />
        </div>
      </div>
      <ChatBody socket={socket} currentUser={currentUser} selectedChat={selectedChat} />
    </div>
  );
}