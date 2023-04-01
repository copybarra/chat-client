import style from '../styles/ChatBody.module.scss';

type Message = {
  id: number,
  body: String,
  sender: String
}

export default function ChatBody({ }) {
  const messages: Message[] = Array(20).fill({
    id: 1,
    body: 'Hello world',
    sender: 'Jan'
  })
  return (
    <div className={style.chat}>
      <div className={style.chatLog}>
        {messages.map((message, index) => {
          return (
            <div className={`${style.message} ${index % 2 ? style.sent : style.received}`}>
              <p>{message.body}</p>
            </div>
          )
        })}
      </div>
      <input type="text"></input>
    </div>
  )
}