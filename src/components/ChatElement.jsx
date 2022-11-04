/**
 * Creates the chat element. Aditional functionality 
 * can be added with elementProps wich contains all props for parent element.
 * @param {{ elementProps: JSX.ElementAttributesProperty, avatarURL: string, username: string, subtitle: string }} props 
 * @returns {JSX.IntrinsicElements.div} Chat Element
 */
export default function ChatElement({ isSelected, username, onSelect, subtitle, avatarURL, ...props }) {
  return (
    <div className="flex w-full items-center bg-transparent hover:bg-[rgba(255,255,255,0.05)] p-2 rounded-xl cursor-pointer" style={{ backgroundColor: isSelected ? 'rgba(255,255,255,0.05)' : 'transparent' }} {...props} onClick={() => onSelect(username)}>
      <div className='w-16 h-16 p-1'>
        <figure className="w-full h-full bg-white bg-no-repeat bg-cover bg-center rounded-full" style={{
          backgroundImage: `url('${avatarURL}')`,
        }} />
      </div>
      <div className="select-none">
        <div>
          <strong>{username}</strong>
        </div>
        <div>
          <span>{subtitle ?? 'New Chat'}</span>
        </div>
      </div>
    </div>
  )
}