import React from 'react';
import './Userbox.css';

function Userbox({setModalBox}) {
  return (
    <div className="Userbox">
      <button onClick={() => setModalBox('Login')}>Вход</button>
      <button onClick={() => setModalBox('Registration')}>Регистрация</button>
    </div>
  );
}

export default Userbox;