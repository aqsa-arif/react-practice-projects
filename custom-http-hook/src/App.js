import { useEffect, useState } from "react";
import NewTask from "./NewTask/NewTask";
import Tasks from "./Tasks/Tasks";
import useHttp from "./hooks/use-http";


function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, isError, sendHttpRequest : fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (data) => {
      let loadedTasks = [];

      for (const key in data) {
         loadedTasks.push({id: key, taskText: data[key].taskText });
      }

      setTasks(loadedTasks);
    }

    fetchTasks({
      url: 'https://custom-http-hook-18d71-default-rtdb.firebaseio.com/tasks.json'
    },
     transformTasks
    )
  },[fetchTasks]);

  const taskHandler = (newTask) => {
    setTasks(prevTasks =>  prevTasks.concat(newTask) );
  }

  return (
    <div>
       <NewTask  taskHandler={taskHandler} />
       <Tasks 
       isLoading={isLoading}
       isError={isError}
       tasks={tasks}
       fetchTasks={fetchTasks}
       />
    </div>
  );
}

export default App;
