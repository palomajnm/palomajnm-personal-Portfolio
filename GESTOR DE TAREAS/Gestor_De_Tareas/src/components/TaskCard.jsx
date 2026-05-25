export default function TaskCard({ task, onEdit, onDelete, onToggleComplete }) {
    const isCompleted = task.estado === 'Completada';

    const truncateText = (text, max) => {
        if (!text) return '';
        return text.length > max ? text.substring(0, max) + '...' : text;
    };

    return (
        <div className={`task-card ${isCompleted ? 'completed' : ''}`}>
        <div className={`priority-indicator priority-${task.prioridad.toLowerCase()}`}>
            Prioridad {task.prioridad}
        </div>

        <div className="task-card-content">
            <h3 className={isCompleted ? 'text-dashed' : ''}>{task.titulo}</h3>
            <p className="task-desc">{truncateText(task.descripcion, 120)}</p>
            
            <div className="task-meta">
            <span className={`status-badge status-${task.estado.toLowerCase().replace(" ", "-")}`}>
                {task.estado}
            </span>
            {task.fechaLimite && (
                <span className="date-badge">
                📅 {new Date(task.fechaLimite).toLocaleDateString()}
                </span>
            )}
            </div>
        </div>

        <div className="task-card-actions">
            <button 
            className={`btn-action btn-complete ${isCompleted ? 'active' : ''}`}
            onClick={() => onToggleComplete(task.id)}
            title={isCompleted ? "Marcar como pendiente" : "Marcar como completada"}
            >
            {isCompleted ? '🔄 Reabrir' : '✓ Completar'}
            </button>
            <button className="btn-action btn-edit" onClick={() => onEdit(task)}>
            ✏️ Editar
            </button>
            <button className="btn-action btn-delete" onClick={() => onDelete(task.id)}>
            🗑️ Eliminar
            </button>
        </div>
        </div>
    );
}