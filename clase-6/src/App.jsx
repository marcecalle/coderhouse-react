import { useEffect, useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import ProductList from './components/ProductList';

function App() {
  
  const tasks = [
    {
      id: 1,
      name: 'Estudiar React',
    },
    {
      id: 2,
      name: 'Tomar sol',
    },
    {
      id: 3,
      name: 'Bañar al perro',
    },
    {
      id: 4,
      name: 'Preparar el almuerzo',
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tareas = new Promise((resolve, /*reject*/) => {
    setTimeout(() => {
      resolve(tasks);
    }, 3000);
  });

  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    tareas
      .then((data) => setAllTasks(data))
      .catch((error) => console.log('Error: ' + error));
  }, [tareas]);

  return (
    <>
      <ProductList />
      <TaskList tareas={allTasks} />
    </>
  );
}

export default App;
