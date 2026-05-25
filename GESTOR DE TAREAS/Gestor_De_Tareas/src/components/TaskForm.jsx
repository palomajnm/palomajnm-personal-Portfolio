import { useState, useEffect } from 'react';

export default function TaskForm({ onSubmit, taskToEdit, cancelEdit }) {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [prioridad, setPrioridad] = useState('Media');
    const [estado, setEstado] = useState('Pendiente');
    const [fechaLimite, setFechaLimite] = useState('');

    // Efecto para pre-rellenar el formulario si estamos editando
    useEffect(() => {
        if (taskToEdit) {
        setTitulo(taskToEdit.titulo);
        setDescripcion(taskToEdit.descripcion);
        setPrioridad(taskToEdit.prioridad);
        setEstado(taskToEdit.estado);
        setFechaLimite(taskToEdit.fechaLimite || '');
        } else {
        resetForm();
        }
    }, [taskToEdit]);

    const resetForm = () => {
        setTitulo('');
        setDescripcion('');
        setPrioridad('Media');
        setEstado('Pendiente');
        setFechaLimite('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titulo.trim()) return alert('El título es obligatorio.');
        
        onSubmit({ titulo, descripcion, prioridad, estado, fechaLimite });
        resetForm();
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
        <h2>{taskToEdit ? 'Editar Tarea' : 'Nueva Tarea'}</h2>
        
        <div className="form-group">
            <label>Título *</label>
            <input 
            type="text" 
            maxLength="100" 
            required 
            value={titulo} 
            onChange={(e) => setTitulo(e.target.value)} 
            placeholder="Ej: Estudiar para examen interfaces"
            />
        </div>

        <div className="form-group">
            <label>Descripción</label>
            <textarea 
            maxLength="500" 
            value={descripcion} 
            onChange={(e) => setDescripcion(e.target.value)} 
            placeholder="Detalles de la tarea..."
            />
        </div>

        <div className="form-row">
            <div className="form-group">
            <label>Prioridad</label>
            <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
            </select>
            </div>

            <div className="form-group">
            <label>Estado</label>
            <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option value="Pendiente">Pendiente</option>
                <option value="En Progreso">En Progreso</option>
                <option value="Completada">Completada</option>
            </select>
            </div>
        </div>

        <div className="form-group">
            <label>Fecha Límite</label>
            <input 
            type="date" 
            value={fechaLimite} 
            onChange={(e) => setFechaLimite(e.target.value)} 
            />
        </div>

        <div className="form-actions">
            <button type="submit" className="btn btn-primary">
            {taskToEdit ? 'Guardar Cambios' : 'Crear Tarea'}
            </button>
            {taskToEdit && (
            <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
                Cancelar
            </button>
            )}
        </div>
        </form>
    );
    }