# TaskMaster RJDG - Gestor de Tareas React

**TaskMaster RJDG** es una aplicación web interactiva y modular diseñada para optimizar la gestión y el seguimiento de tareas académicas y personales. El proyecto ha sido desarrollado utilizando un enfoque moderno basado en componentes reutilizables, control de estado reactivo y persistencia de datos local, cumpliendo estrictamente con los requisitos del módulo de Desarrollo de Interfaces.

---

## Características del Proyecto

### 1. Gestión de Tareas (CRUD Completo)
- **Creación**: Formulario con validaciones nativas para campos obligatorios (Título con límite de 100 caracteres) y opcionales (Descripción de máx. 500 caracteres, selectores de prioridad y estado, y selector de fecha).
- **Visualización**: Renderizado dinámico en formato *grid* adaptativo. Las descripciones largas se truncan automáticamente para mantener la armonía visual de la interfaz.
- **Edición**: Sistema que precarga los datos actuales en el formulario principal para su modificación, permitiendo guardar cambios o cancelar la acción de forma segura.
- **Eliminación**: Mecanismo de borrado permanente respaldado por una ventana de confirmación nativa para evitar pérdidas accidentales.
- **Estado de Completado**: Acceso directo para marcar tareas como finalizadas, aplicando un cambio visual inmediato (atenuación y texto tachado).

### 2. Filtrado y Ordenación Inteligente
- **Filtros combinados**: Permite cribar la lista por **Estado** (Todas, Pendientes, En Progreso, Completadas) y por **Prioridad** (Todas, Alta, Media, Baja) de manera simultánea.
- **Criterios de ordenación**: El usuario puede ordenar las tarjetas por:
  - Fecha de creación (más recientes primero o viceversa).
  - Fecha límite de entrega (próximas a vencer primero).
  - Nivel de prioridad (de alta a baja).
  - Orden alfabético (A-Z y Z-A).

### 3. Persistencia en LocalStorage
- Sincronización automática a través de efectos secundarios. Las tareas persisten en el navegador del usuario, cargándose de forma transparente al iniciar o refrescar la aplicación.

---

##  Stack Tecnológico

- **Vite**: Herramienta de construcción (*Build tool*) y servidor de desarrollo ultra-rápido.
- **React 18**: Framework de JavaScript basado en componentes y un árbol de renderizado optimizado.
- **Hooks Utilizados**:
  - `useState`: Gestión de estados de tareas, filtros, ordenación y edición.
  - `useEffect`: Sincronización y persistencia de datos con la API de `localStorage`.
- **CSS3 Nativo**: Estructuración del diseño mediante **CSS Flexbox** y **CSS Grid**, garantizando una experiencia *Responsive Design* en dispositivos móviles, tablets y ordenadores de escritorio.
- **Generación de IDs**: Uso de la API nativa de navegadores `crypto.randomUUID()` para asignar identificadores únicos a cada tarea sin dependencias externas.

---

## Arquitectura de Componentes (Mínimos Obligatorios)

El código fuente se encuentra estructurado de forma limpia y desacoplada en los siguientes módulos clave:

1. **`Header`**: Barra superior que contiene el título principal (`TaskMaster RJDG`) y el subtítulo de la aplicación.
2. **`TaskForm`**: Componente inteligente que gestiona tanto la inserción de nuevas tareas como la edición de las existentes, manejando las validaciones y estados del formulario.
3. **`FilterBar`**: Contenedor superior con los tres selectores de control encargados de actualizar los criterios de filtrado y ordenación del estado global.
4. **`TaskList`**: Componente encargado de computar las tareas filtradas, mostrar el contador de tareas totales ("Mostrando X de Y tareas") y gestionar el estado vacío (*empty state*).
5. **`TaskCard`**: Tarjeta individual que recibe los datos de una tarea, renderiza dinámicamente los estilos según su prioridad/estado y expone los botones de acción (Editar, Eliminar, Completar).

---

## Instrucciones de Despliegue Local

Para poner en marcha el proyecto en tu máquina local, sigue estos sencillos pasos desde tu terminal:

1. **Clonar el repositorio:**
   ```bash
   git clone <Uhttps://github.com/palomajnm/palomajnm-trabajos-formacion>
