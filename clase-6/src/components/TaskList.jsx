// eslint-disable-next-line react/prop-types
export default function TaskList({ tareas }) {
return (
   <>
      <h2>Listado de Tareas</h2>
      <ul>
      {tareas.map((tarea) => (
         <li key={tarea.id}>
            {tarea.id} - {tarea.name}
         </li>
      ))}
      </ul>
   </>
);
}