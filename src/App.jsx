import './App.css'
import { Inputbox } from './input_task.jsx'
import { TaskList } from "./list_task.jsx"
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([]);


    function addTask(taskText) {
        if (taskText.trim() !== ''){
            setTasks(tasks => [...tasks, taskText]);
        }
    }

    return (
      <div className="App">
          <h1>Список задач:</h1>
          <Inputbox onAddTask={addTask} />
          <TaskList tasks={tasks} />
      </div>
    )
}

export default App
