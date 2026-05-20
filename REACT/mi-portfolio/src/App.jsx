import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Estudios from './components/Estudios';
import Proyectos from './components/Proyectos';
import Tecnologias from './components/Tecnologias';
import Hobbies from './components/Hobbies';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  // Inicializamos el tema desde localStorage o por defecto 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Efecto para añadir/quitar la clase 'light-mode' al body
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Inicio />
        <SobreMi />
        <Estudios />
        <Proyectos usuario="PalomaJNM" />
        <Tecnologias />
        <Hobbies />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;