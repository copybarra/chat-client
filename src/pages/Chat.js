import { useState, useEffect, useCallback } from "react";
import ProfileBar from "../components/ProfileBar";
import BottomMenu from "../components/BottomMenu";
import ChatBody from "../components/ChatBody";
import { io } from 'socket.io-client';

import ChatElement from "../components/ChatElement";

export default function Chat() {
  const [selected, setSelected] = useState(false);
  const [chats, setChats] = useState([]);
  const [socket, setSocket] = useState(null);
  const [sockets, setSockets] = useState([]);
  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3003`);
    setSocket(newSocket);
    newSocket.on('chat-rooms', setSockets)
    return () => {
      newSocket.close()
    };
  }, [setSocket]);

  const handleSelect = (chatId) => {
    setSelected(chatId);
  }

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const memorizedChats = useCallback((count) => {
    const name = [
      'Jan',
      'Bjarne',
      'Dave',
      'Maximilian',
      'Sebastian',
      'Paul',
      'Maria',
      'Anna',
      'Magdalena',
      'Marianne',
      'Walter',
      'Gwendoline',
      'Jim',
      'Schokolade',
      'Bernd',
      'Armin',
      'Donald',
      'Arnd',
      'Ludvig',
      'Kurt',
      'Michael',
      'Leonhard',
      'Pater',
      'Emilia',
      'Jil',
      'Conrad',
      'Johannes',
      'Steven',
      'Stefan',
      'Christel',
      'Fritz',
      'Kannabis'
    ];

    const lastName = [
      'Müller',
      'Walenda',
      'Voigländer',
      'Deter',
      'Weinardy',
      'Hoffman',
      'Schäfer',
      'Fickmann',
      'Beethoven',
      'Mozart',
      'Cocain',
      'Cobain',
      'White',
      'Black',
      'Jackson',
      'Walter',
      'PPK',
      'Booth',
      'Kirk',
      'Checkow',
      'Ohura',
      'Picard',
      'Christus',
      'Peters',
      'Cook'
    ];

    const does = [
      'schwimt',
      'fickt',
      'isst',
      'guckt star trek',
      'fliegt wie superman...',
      'was willst du?',
      'willst dich prügeln?...',
      'geh nach hause',
      'schlaf gut!',
      'Ich liebe dich<3',
      'Mein Brot schimmelt',
      'Kannst du meinen bruder tö...',
      `Meiner ist ${randomIntFromInterval(10, 40)}cm lang`,
      'Koks macht deine probleme...',
      'Lets make meth',
      'Die drei besten coder der...',
    ]

    let out = [];

    for (let i = 0; i < count; i++) {
      const tmpName = name[Math.floor(Math.random() * name.length)];
      const tmpLastName = lastName[Math.floor(Math.random() * lastName.length)];
      const fullName = `${tmpName} ${tmpLastName}`;
      const tmp = {
        username: fullName,
        subtitle: `${does[Math.floor(Math.random() * does.length)]}`,
        avatarURL: `https://robohash.org/${encodeURI(fullName)}?set=set${randomIntFromInterval(1, 4)}`,
      };
      out.push(tmp);
    }
    return out;
  }, []);

  useEffect(() => setChats(memorizedChats(40)), [memorizedChats]);

  return (
    <div className="grid grid-cols-[.4fr_1fr] max-w-screen max-h-screen justify-items-start content-center">
      <div className="grid grid-rows-[.13fr_1fr_.115fr] min-w-[300px] w-full h-screen items-start text-white border-r-2 border-r-white">
        {socket && <ProfileBar name={socket.id} avatar={`https://robohash.org/${encodeURI(socket.id)}?set=set4`} />}
        <div
          className="block h-full items-start justify-start text-white p-2 overflow-x-hidden overflow-y-auto"
          style={{ scrollbarWidth: '0px' }}
        >
          {/* Side Chat Container */}
          {sockets.filter(chat => chat !== socket.id).map((chat => <ChatElement username={chat} avatarURL={`https://robohash.org/${encodeURI(chat)}?set=set4`} subtitle={'Socket.io Id'} key={chat} selected={selected === chat} onSelect={() => handleSelect(chat)} />))}
          {/* { chats.map((chat, index) => <ChatElement username={chat.username} avatarURL={chat.avatarURL} subtitle={chat.subtitle} key={index} selected={selected === chat.username} onSelect={handleSelect} />)} */}
        </div>
        <div className="flex h-full items-center justify-center text-white">
          <BottomMenu />
        </div>
      </div>
      <ChatBody socket={socket} selectedChat={selected} />
    </div>
  );
}