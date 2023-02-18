import style from '../styles/Chat.module.scss';
import ChatElement from '../components/ChatElement';
import ChatBody from '../components/ChatBody';
import { generateTestChats } from '../helpers/generateTestChats';

export default function Chat({ }) {
  return (
    <div className={style.chat}>
      <div className={style.sidebar}>
        {generateTestChats(100).map((chat, i) => {
          return (
            <ChatElement key={i} {...chat} />
          )
        })}
      </div>
      <ChatBody />
    </div>
  )
}