export function NoChatSelected({ profile }){

  const {name, avatar} = profile;

  return(
    <div className="flex flex-col w-full h-screen  gap-8 text-white bg-[#0F0F25] items-center justify-center">
      <p className="text-4xl">Hey, <strong>{name}</strong>!</p>
      <img className="w-48" alt={name} src={avatar}/>
      <p className="opacity-60">Chat a lover, friend or that bitch you fucking hate...</p>
    </div>
  )
}