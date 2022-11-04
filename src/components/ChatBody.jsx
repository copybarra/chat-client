import React, { useEffect, useState } from 'react'
import ChatBodyHeader from './ChatBodyHeader'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import NoChatSelected from './NoChatSelected'

export default function ChatBody({ socket, currentUser, selectedChat }) {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.on('chat-message', (message) => {
        console.log(message)
        setMessages(messages => {
          return [...messages, message]
        })
      });
      return () => {
        socket.off('chat-message');
      };
    }
  }, [socket]);

  useEffect(() => {
    setMessages([])
  }, [selectedChat])


  const sendMessage = (message) => {
    setMessages(messages => {
      console.log(socket.id)
      return [...messages, { content: message, id: socket.id }]
    })
    socket.emit('send-chat-message', { message, recipient: selectedChat })
  }

  if(!selectedChat){
    return <NoChatSelected profile={currentUser}/>
  }

  return (
    <div className="grid grid-rows-[.1fr_1fr_.115fr] w-full h-screen text-white bg-[#0F0F25]">
      <ChatBodyHeader selectedChat={selectedChat} />
      <div className="flex flex-col p-8 gap-y-2 overflow-y-scroll">
        {messages.map(message => <ChatMessage key={message.id} id={message.id} content={message.content} server={message.id === -1} own={message.id === socket.id} />)}
      </div>
      <ChatInput onSend={sendMessage} />
    </div>
  )
}
