export default function ChatElement(props){
    return (
        <div className="flex w-full bg-transparent hover:bg-white bg-opacity-5">
            <div className="">
                <figure className="bg-[url('http://localhost:3000/smiley.png')] bg-no-repeat bg-cover w-4 h-4"/>
            </div>
            <div className="table-row-group">
                <div>
                    <strong>{props.username}</strong>
                </div>
                <div>
                    <small>{props.subtitle}</small> 
                </div>
            </div>
        </div>
    )
}