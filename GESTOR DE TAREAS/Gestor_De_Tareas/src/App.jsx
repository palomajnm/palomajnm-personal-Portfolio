import { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './index.css';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [taskToEdit, setTaskToEdit] = useState(null);
  const [filterStatus, setFilterStatus] = useState('Todas');
  const [filterPriority, setFilterPriority] = useState('Todas');
  const [sortBy, setSortBy] = useState('fechaCreacion-desc');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addOrCreateTask = (taskData) => {
    if (taskToEdit) {
      setTasks(tasks.map(t => t.id === taskToEdit.id ? { ...t, ...taskData } : t));
      setTaskToEdit(null);
      alert('¡Tarea actualizada con éxito!');
    } else {
      // Crear
      const newTask = {
        id: crypto.randomUUID(), 
        createdAt: new Date().toISOString(),
        ...taskData
      };
      setTasks([newTask, ...tasks]);
      alert('¡Tarea creada con éxito!');
    }
  };

  const deleteTask = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar permanentemente esta tarea?')) {
      setTasks(tasks.filter(t => t.id !== id));
    }
  };

  const toggleCompleteTask = (id) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        const nuevoEstado = t.estado === 'Completada' ? 'Pendiente' : 'Completada';
        return { ...t, estado: nuevoEstado };
      }
      return t;
    }));
  };

  const filteredAndSortedTasks = tasks
    .filter(task => {
      const matchStatus = filterStatus === 'Todas' || task.estado === filterStatus;
      const matchPriority = filterPriority === 'Todas' || task.prioridad === filterPriority;
      return matchStatus && matchPriority;
    })
    .sort((a, b) => {
      if (sortBy === 'fechaCreacion-desc') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'fechaCreacion-asc') return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortBy === 'fechaLimite') {
        if (!a.fechaLimite) return 1;
        if (!b.fechaLimite) return -1;
        return new Date(a.fechaLimite) - new Date(b.fechaLimite);
      }
      if (sortBy === 'prioridad') {
        const peso = { 'Alta': 3, 'Media': 2, 'Baja': 1 };
        return peso[b.prioridad] - peso[a.prioridad];
      }
      if (sortBy === 'titulo-az') return a.titulo.localeCompare(b.titulo);
      if (sortBy === 'titulo-za') return b.titulo.localeCompare(a.titulo);
      return 0;
    });

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="sidebar">
          <TaskForm 
            onSubmit={addOrCreateTask} 
            taskToEdit={taskToEdit} 
            cancelEdit={() => setTaskToEdit(null)} 
          />
        </div>
        <div className="content-area">
          <FilterBar 
            filterStatus={filterStatus} setFilterStatus={setFilterStatus}
            filterPriority={filterPriority} setFilterPriority={setFilterPriority}
            sortBy={sortBy} setSortBy={setSortBy}
          />
          <TaskList 
            tasks={filteredAndSortedTasks} 
            totalTasks={tasks.length}
            onEdit={setTaskToEdit} 
            onDelete={deleteTask} 
            onToggleComplete={toggleCompleteTask} 
          />
        </div>
      </main>
    </div>
  );
}