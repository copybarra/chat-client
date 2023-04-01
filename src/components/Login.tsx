import style from '../styles/Login.module.scss';
import { useRef } from 'react';
import Container from './Container';
export default function Login(): JSX.Element {
  const username = useRef<string>();
  const password = useRef<string>();

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    username.current = event.target.value;
  }

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    password.current = event.target.value;
  }

  const signIn = () => {
    alert([username.current, password.current]);
  }

  return (
    <Container>
      <form className={style.ui}>
        <h1 className={style.uiTitle}>You Chat</h1>
        <div className={style.inputs}>
          <div className={style.inputWrapper}>
            <label htmlFor='username'>USERNAME</label>
            <input type='text' id='username' autoComplete='username' onChange={onChangeUsername} />
          </div>
          <div className={style.inputWrapper}>
            <label htmlFor='password'>PASSWORD</label>
            <input type='password' id='password' autoComplete='password' onChange={onChangePassword} />
          </div>
        </div>
        <div className={style.buttons}>
          <button className={style.register}>REGISTER</button>
          <button onClick={signIn}>SIGN IN</button>
        </div>
      </form>
    </Container>
  )
}