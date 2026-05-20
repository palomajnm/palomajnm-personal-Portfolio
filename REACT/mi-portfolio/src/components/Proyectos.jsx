import React, { useState, useEffect } from 'react';

function Proyectos({ usuario }) {
    const [repos, setRepos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function obtenerRepositorios() {
        try {
            const respuesta = await fetch(`https://api.github.com/users/${usuario}/repos?sort=updated`);
            if (!respuesta.ok) {
            throw new Error("No se pudo obtener la información de GitHub");
            }
            const datos = await respuesta.json();
            // Filtramos los que no sean forks
            setRepos(datos.filter(repo => !repo.fork));
        } catch (err) {
            console.error("Error:", err);
            setError(true);
        } finally {
            setCargando(false);
        }
        }

        obtenerRepositorios();
    }, [usuario]);

    return (
        <section id="proyectos">
        <h2>Mis Proyectos GitHub</h2>
        <div id="github-repos" className="repos-container">
            {cargando && <p>Cargando repositorios...</p>}
            {error && <p>Hubo un error al cargar los proyectos de GitHub.</p>}
            
            {!cargando && !error && (
            <ul>
                {repos.map((repo) => (
                <li key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                    <div>
                        <h3>{repo.name.toUpperCase().replace(/-/g, ' ')}</h3>
                        <p>{repo.description || "Sin descripción disponible"}</p>
                        <span style={{ color: '#38bdf8', fontSize: '0.8rem' }}>
                        👍 {repo.stargazers_count} | 🔄 {repo.forks_count}
                        </span>
                    </div>
                    </a>
                </li>
                ))}
            </ul>
            )}
        </div>
        </section>
    );
}

export default Proyectos;