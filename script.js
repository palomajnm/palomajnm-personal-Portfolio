//poner el modo oscuro o claro dependiendo de la preferencia del usuario guardada en localStorage
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    let theme = 'dark';
    if (body.classList.contains('light-mode')) {
        theme = 'light';
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }

    localStorage.setItem('theme', theme);
});

//Acciones para el formulario de estudios
const listaEstudios=[
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
];

function mostrarEstudios(){
    const contenedor = document.getElementById('estudios-lista');
    contenedor.innerHTML = "";

    const listaUl = document.createElement('ul');

    listaEstudios.forEach(estudio =>{
        const itemLi = document.createElement('li');
        itemLi.innerHTML = `<h3>${estudio.titulo}</h3>
                            <p><strong>${estudio.centro}</strong> (${estudio.fecha})</p>
                            <p>${estudio.descripcion}</p>
        `;
        listaUl.appendChild(itemLi);
    });

    contenedor.appendChild(listaUl);
}

document.getElementById('btn-añadir').addEventListener('click',(e)=>{
    e.preventDefault();

    const titulo = document.getElementById('estudio-titulo').value;
    const centro = document.getElementById('estudio-centro').value;
    const fecha = document.getElementById('estudio-fecha').value;
    const desc = document.getElementById('estudio-desc').value;

    if(titulo && centro){
        const nuevoEstudio ={
            titulo: titulo,
            centro: centro,
            fecha: fecha,
            descripcion: desc
        };

        listaEstudios.push(nuevoEstudio);
        mostrarEstudios();

        document.getElementById('formularioEstudios').reset();
    }else{
        alert("Por favor, rellena los capos principales");
    }
});

mostrarEstudios();

//logica paa mostrar/ocultar el formulario estudios
const toggleBtn = document.getElementById('toggle-form-btn');
const formularioContenedor = document.getElementById('contenedor-formulario');

toggleBtn.addEventListener('click', () => {
    if(formularioContenedor.style.display === 'none'){
        formularioContenedor.style.display = "block";
        toggleBtn.textContent = "x Cerrar Formulario";
        toggleBtn.style.backgroundColor = "#ef4444";
    }else{
        formularioContenedor.style.display = "none";
        toggleBtn.textContent = "+ Agregar Nuevo Estudio";
        toggleBtn.style.backgroundColor = "#38bdf8";
    }
});

document.getElementById('btn-añadir').addEventListener('click', () => {
    formularioContenedor.style.display = "none";
    toggleBtn.textContent = "+ Agregar Nuevo Estudio";
    toggleBtn.style.backgroundColor = "#38bdf8";
});

//Lógica para mostrar los repositorios de GitHub
async function obtenerRepositorios(usuario) {
    const contenedor = document.getElementById('github-repos');
    
    try {
        const respuesta = await fetch(`https://api.github.com/users/${usuario}/repos?sort=updated`);
        
        if (!respuesta.ok) {
            throw new Error("No se pudo obtener la información de GitHub");
        }

        const repos = await respuesta.json();
        contenedor.innerHTML = "";
        const listaUl = document.createElement('ul');

        repos.forEach(repo => {

            if (!repo.fork) {
                const itemLi = document.createElement('li');
                itemLi.innerHTML = `
                    <a href="${repo.html_url}" target="_blank">
                        <div>
                            <h3>${repo.name.toUpperCase().replace(/-/g, ' ')}</h3>
                            <p>${repo.description || "Sin descripción disponible"}</p>
                            <span style="color: #38bdf8; font-size: 0.8rem;">👍 ${repo.stargazers_count} | 🔄 ${repo.forks_count}</span>
                        </div>
                    </a>
                `;
                listaUl.appendChild(itemLi);
            }
        });

        contenedor.appendChild(listaUl);

    } catch (error) {
        console.error("Error:", error);
        contenedor.innerHTML = "<p>Hubo un error al cargar los proyectos de GitHub.</p>";
    }
}

obtenerRepositorios("PalomaJNM");