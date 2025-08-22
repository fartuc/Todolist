import './App.css'
import { Inputbox } from './input_task.jsx'
import { TaskList } from "./list_task.jsx"
import {useState} from "react";
import Typography from '@mui/material/Typography';

function App() {
    const [tasks, setTasks] = useState([]);


    function addTask(taskText) {
        if (taskText.trim() !== ''){
            setTasks(tasks => [...tasks, taskText]);
        }
    }

    return (
      <div className="App">
          <Typography variant="h1" gutterBottom>
              Список задач:
          </Typography>
          <Inputbox onAddTask={addTask} />
          <TaskList tasks={tasks} />
      </div>
    )
}

export default App
