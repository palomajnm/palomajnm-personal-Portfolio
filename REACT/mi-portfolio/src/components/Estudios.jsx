import React, { useState } from 'react';

function Estudios() {
  // Lista inicial de estudios que tenías en script.js
    const [listaEstudios, setListaEstudios] = useState([
        {
        titulo: "Técnico en Sistemas Microinformáticos y Redes (SMR)",
        centro: "IES Gregorio Prieto (Valdepeñas)",
        fecha: "2018-2020",
        descripcion: "Formación profesional de grado medio que abarca la instalación, configuración y mantenimiento de sistemas informáticos, redes y servicios relacionados."
        },
        {
        titulo: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
        centro: "IES Gregorio Prieto (Valdepeñas)",
        fecha: "2025- Actualidad",
        descripcion: "Formación profesional de grado superior centrada en el desarrollo de aplicaciones para diferentes plataformas, incluyendo programación, diseño de interfaces y gestión de proyectos."
        }
    ]);

    // Estados para controlar la visibilidad y el formulario
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [centro, setCentro] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleAñadirEstudio = (e) => {
        e.preventDefault();

        if (titulo && centro) {
        const nuevoEstudio = { titulo, centro, fecha, descripcion };
        setListaEstudios([...listaEstudios, nuevoEstudio]);
        
        // Resetear formulario y cerrarlo
        setTitulo('');
        setCentro('');
        setFecha('');
        setDescripcion('');
        setMostrarFormulario(false);
        } else {
        alert("Por favor, rellena los campos principales");
        }
    };

    return (
        <section id="estudios">
        <h2>Formación Académica</h2>

        <button 
            className="theme-btn" 
            style={{ 
            width: 'auto', 
            borderRadius: '8px', 
            marginBottom: '20px',
            backgroundColor: mostrarFormulario ? '#ef4444' : '#38bdf8' 
            }}
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
            {mostrarFormulario ? 'x Cerrar Formulario' : '+ Agregar Nuevo Estudio'}
        </button>

        {mostrarFormulario && (
            <div id="contenedor-formulario">
            <form onSubmit={handleAñadirEstudio} id="formularioEstudios">
                <label htmlFor="estudio-titulo">Estudios Cursados</label>
                <input 
                type="text" 
                id="estudio-titulo" 
                placeholder="Título del estudio" 
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                />
                
                <label htmlFor="estudio-centro">Centro</label>
                <input 
                type="text" 
                id="estudio-centro" 
                placeholder="Centro" 
                value={centro}
                onChange={(e) => setCentro(e.target.value)}
                />
                
                <label htmlFor="estudio-fecha">Fecha de finalización</label>
                <input 
                type="text" 
                id="estudio-fecha" 
                placeholder="2000-2004" 
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                />
                
                <label htmlFor="estudio-desc">Descripción</label>
                <textarea 
                id="estudio-desc" 
                placeholder="Descripción breve"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                ></textarea>
                
                <button type="submit" id="btn-añadir">Añadir a la lista</button>
            </form>
            </div>
        )}

        <div id="estudios-lista">
            <ul>
            {listaEstudios.map((estudio, index) => (
                <li key={index}>
                <h3>{estudio.titulo}</h3>
                <p><strong>{estudio.centro}</strong> ({estudio.fecha})</p>
                <p>{estudio.descripcion}</p>
                </li>
            ))}
            </ul>
        </div>
        </section>
    );
    }

export default Estudios;