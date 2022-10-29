import ChatElement from "../components/ChatElement";
export default function Chat() {
    const chats = [
        {
            username: 'Bjarne',
            subtitle: 'Applewatch armband käufer',
            avatarURL: 'https://robohash.org/Bjarne'
        },
        {
            username: 'Dave',
            subtitle: 'Kaffeeliebhaber vorm herrn...',
            avatarURL: 'https://robohash.org/Dave'
        },
        {
            username: 'Jan',
            subtitle: 'Gay und nervig',
            avatarURL: 'https://robohash.org/Jan'
        }
    ]
    return (
        <div className="grid grid-cols-[.4fr_1fr] max-w-screen max-h-screen justify-items-start content-center">
            <div className="grid grid-rows-[.13fr_1fr_.125fr] w-full h-screen items-start text-white border-r-2 border-r-white">
                <div className="flex h-full items-center justify-center text-white border-2 border-white">
                    Profile Bar
                </div>
                <div className="block h-full items-start justify-start text-white border-2 border-white">
                    {/* Side Chat Container */}
                    {chats.map(chat => <ChatElement {...chat}/>)}
                </div>
                <div className="flex h-full items-center justify-center text-white border-2 border-white">
                    Bottom Menu Bar
                </div>
            </div>
            <div className="grid w-full h-screen items-center justify-center text-white">
                Chat Body Container
            </div>
        </div>
    );
}