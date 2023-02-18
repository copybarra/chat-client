import style from '../styles/ChatElement.module.scss';

type ChatElementProps = {
  user: string;
  lastMSG?: string;
}

export default function ChatElement({ user, lastMSG = 'Empty Chat' }: ChatElementProps): JSX.Element {
  const avatarURL = `url("https://api.dicebear.com/5.x/pixel-art/png?seed=${user}")`;
  return (
    <div id={style.chatElementBox}>
      <div className={style.avatar}>
        <span style={{
          backgroundImage: avatarURL,
        }} />
      </div>
      <div id={style.chatElementRightBox}>
        <div id={style.chatElementUserName}>
          {user}
        </div>
        <sub id={style.chatElementLastMSG}>
          {lastMSG}
        </sub>
      </div>
    </div>
  )
}