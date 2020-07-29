import React from 'react';

import Logo from '../../assets/img/minhaflix.png';

import './Menu.css';

import Button from '../Button';


export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/" >
        <img className="Logo" src={Logo} alt="MinhaFLix logo"/>
      </a>
      <Button as="a" className="ButtonLink" href="/novo">
        Novo vídeo
      </Button>
    </nav>
  );
} 