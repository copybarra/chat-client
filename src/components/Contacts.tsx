import style from '../styles/Contacts.module.scss';
import { useEffect, useState } from 'react';
import ChatElement from './ChatElement';

export default function Contacts(): JSX.Element {

  const [contacts, setContacts] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    let cons = [];
    for (let i = 0; i < 20; i++) {
      cons.push(<ChatElement key={`12345${i}`} user='Jan Voigtländer' />);
    }
    setContacts(cons);
  }, []);

  if (!contacts.length) return <></>;

  return (
    <div className={style.contacts}>
      {contacts}
    </div>
  )
}