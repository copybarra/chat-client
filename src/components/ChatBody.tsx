import style from '../styles/ChatBody.module.scss';

export default function ChatBody({ }) {
  const messages = Array(20).fill({
    id: 1,
    body: 'Hello world'
  })
  return (
    <div className={style.chatBody}>
      <div className={style.chatLog}>
        <div>{messages.map((message => <p className={style.message}>{message.body}</p>))}</div>
      </div>
      <input type="text" />
    </div>
  )
}