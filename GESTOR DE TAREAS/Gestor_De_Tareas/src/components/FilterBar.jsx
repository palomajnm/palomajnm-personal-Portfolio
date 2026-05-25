export default function FilterBar({ 
    filterStatus, setFilterStatus, 
    filterPriority, setFilterPriority, 
    sortBy, setSortBy 
    }) {
    return (
        <div className="filter-bar">
        <div className="filter-group">
            <label>Estado:</label>
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En Progreso">En Progreso</option>
            <option value="Completada">Completada</option>
            </select>
        </div>

        <div className="filter-group">
            <label>Prioridad:</label>
            <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
            </select>
        </div>

        <div className="filter-group">
            <label>Ordenar por:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="fechaCreacion-desc">Más recientes primero</option>
            <option value="fechaCreacion-asc">Más antiguas primero</option>
            <option value="fechaLimite">Fecha límite (Próximas primero)</option>
            <option value="prioridad">Prioridad (Alta a Baja)</option>
            <option value="titulo-az">Título (A-Z)</option>
            <option value="titulo-za">Título (Z-A)</option>
            </select>
        </div>
        </div>
    );
}