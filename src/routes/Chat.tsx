import style from '../styles/Chat.module.scss'
import ChatElement from '../components/ChatElement'
import ChatBody from '../components/ChatBody'
import Contacts from '../components/Contacts'

export default function Chat({ }) {
  return (
    <div className={style.chat}>
      <div className={style.sidebar}>
        {Array(10).fill({
          user: 'Bjarne Voigtländer',
        }).map(chat => {
          return (
            <ChatElement user={chat.user} />
          )
        })}
        <Contacts />
      </div>
      <ChatBody />
    </div>
  )
}