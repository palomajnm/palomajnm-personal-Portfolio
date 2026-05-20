import React from 'react';

function Header({ theme, toggleTheme }) {
    return (
        <header>
        <nav>
            <img src="./IMAGES/fotomeee.jpg" alt="Foto del perfil" />
            <h1>PORTFOLIO</h1>
            <ul>
            <button id="theme-toggle" className="theme-btn" onClick={toggleTheme}>
                {theme === 'light' ? '☀️' : '🌙'}
            </button>
            <li><a href="#inicio">INICIO</a></li>
            <li><a href="#sobre_mi">SOBRE MI</a></li>
            <li><a href="#proyectos">MIS PROYECTOS</a></li>
            <li><a href="#tecnologias">TECNOLOGIAS</a></li>
            <li><a href="#hobbies">HOBBIES</a></li>
            <li><a href="#contacto">CONTACTO</a></li>
            </ul>
        </nav>
        </header>
    );
    }

export default Header;