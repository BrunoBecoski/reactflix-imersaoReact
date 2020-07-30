import React from 'react';

import Logo from '../../assets/img/minhaflix.png';

import './Menu.css';

import Button from '../Button';

import { Link } from 'react-router-dom';


export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/" >
        <img className="Logo" src={Logo} alt="MinhaFLix logo"/>
      </Link>
      <Button to="/cadastro/video" as={Link} className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
} 