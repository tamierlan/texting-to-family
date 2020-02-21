import React, { useState } from 'react';
import { Link } from "react-router-dom";
import picture from '../image/tommy.jpeg';

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('Эрманбетовтор');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <img src={picture} alt="men" />
        <h3 className="heading">кошул Таминин групасына</h3>
        <div>
          <input placeholder="атынызды жазыныз" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">баскычты бас</button>
        </Link>
      </div>
    </div>
  );
}
