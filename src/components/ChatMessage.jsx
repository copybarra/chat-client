import React from 'react'

export default function ChatMessage({ id, content, own, server }) {
  return (
    <div className={`flex flex-col w-fit basis-auto bg-[#414163] font-light rounded-full p-2 ${server ? 'self-center' : own ? 'self-end' : 'self-start'}`}>
      <p className="">{content}</p>
    </div>
  )
}
