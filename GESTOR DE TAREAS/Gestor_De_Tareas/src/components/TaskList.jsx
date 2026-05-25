import TaskCard from './TaskCard';

export default function TaskList({ tasks, totalTasks, onEdit, onDelete, onToggleComplete }) {
    return (
        <div className="task-list-container">
        <div className="task-counter">
            <span>Mostrando <strong>{tasks.length}</strong> de <strong>{totalTasks}</strong> tareas totales</span>
        </div>
        
        {tasks.length === 0 ? (
            <div className="empty-state">No se encontraron tareas con los filtros seleccionados.</div>
        ) : (
            <div className="task-grid">
            {tasks.map(task => (
                <TaskCard 
                key={task.id} 
                task={task} 
                onEdit={onEdit} 
                onDelete={onDelete} 
                onToggleComplete={onToggleComplete} 
                />
            ))}
            </div>
        )}
        </div>
    );
}