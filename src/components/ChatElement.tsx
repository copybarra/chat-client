import style from '../styles/ChatElement.module.scss';

type ChatElementProps = {
  user: string;
  lastMSG?: string;
}

export default function ChatElement({ user, lastMSG = 'Empty Chat' }: ChatElementProps): JSX.Element {
  const avatarURL = `url("https://api.dicebear.com/5.x/initials/png?seed=${user}")`;
  return (
    <div draggable={true} className={style.chatElementBox}>
      <div className={style.avatar}>
        <span style={{
          backgroundImage: avatarURL,
        }} />
      </div>
      <div className={style.chatElementRightBox}>
        <div className={style.chatElementUserName}>
          {user}
        </div>
        <sub className={style.chatElementLastMSG}>
          {lastMSG}
        </sub>
      </div>
    </div>
  )
}