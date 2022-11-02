import React from 'react'

export default function ChatMessage({ id, content, own, server }) {
  return (
    <div key={id}className={`flex flex-col flex-wrap w-fit h-fit max-w-[60%] basis-auto bg-[#414163] font-light rounded-2xl p-2 ${server ? 'self-center' : own ? 'self-end' : 'self-start'}`}>
      <p className="px-2 text-sm">{content}</p>
    </div>
  )
}
