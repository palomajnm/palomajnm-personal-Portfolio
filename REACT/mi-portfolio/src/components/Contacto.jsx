import React from 'react';

function Contacto() {
    return (
        <section id="contacto">
        <h2>Contacto</h2>
        <p>Puedes contactarme a traves de: </p>

        <form action="#" method="post">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" placeholder="Escribe aqui tu nombre" />
            <br /><br />

            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" name="email" id="email" placeholder="tu@email.com" />
            <br /><br />

            <label htmlFor="asunto">Asunto:</label>
            <select name="asunto" id="asunto">
            <option value="pregunta">Pregunta técnica</option>
            <option value="sugerencia">Sugerencia</option>
            <option value="otro">Otro</option>
            </select>
            <br /><br />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea name="mensaje" id="mensaje" rows="5" placeholder="Escribe aqui tu pregunta o sugerencia..." required></textarea>
            <br /><br />

            <button type="submit">Enviar Mensaje</button>
            <br /><br />
        </form>
        </section>
    );
}

export default Contacto;