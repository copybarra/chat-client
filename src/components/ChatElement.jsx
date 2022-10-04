/**
 * Creates the chat element. Aditional functionality 
 * can be added with elementProps wich contains all props for parent element.
 * @param {{ elementProps: JSX.ElementAttributesProperty, avatarURL: string, username: string, subtitle: string }} props 
 * @returns {JSX.IntrinsicElements.div} Chat Element
 */
export default function ChatElement(props){
    return (
        <div className="flex w-full items-center bg-transparent hover:bg-[rgba(255,255,255,0.05)]" {...props.elementProps}>
            <div className='w-16 h-16 p-1'>
                <figure className="w-full h-full bg-white bg-cover bg-no-repeat rounded-full" style={{
                    backgroundImage: `url('${props.avatarURL}')`,
                }}/>
            </div>
            <div className="select-none">
                <div>
                    <strong>{props.username}</strong>
                </div>
                <div>
                    <span>{props.subtitle}</span> 
                </div>
            </div>
        </div>
    )
}