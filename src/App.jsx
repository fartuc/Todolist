import './App.css'
import { Inputbox } from './input_task.jsx'
import { TaskList } from "./list_task.jsx"
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';



function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    const addTask = (taskText) => {
        if (taskText.trim() !== '') {
            setTasks(tasks => [...tasks, {
                id: Date.now(),
                text: taskText,
                completed: false
            }]);
        }
    };

    const deleteTask = (taskId) => {
        setTasks(tasks => tasks.filter(task => task.id !== taskId));
    };

    const toggleTask = (taskId) => {
        setTasks(tasks => tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="App">
            <Typography variant="h1" gutterBottom>
                Список задач:
            </Typography>
            <Inputbox onAddTask={addTask} />
            <TaskList
                tasks={tasks}
                onDeleteTask={deleteTask}
                onToggleTask={toggleTask}
            />
        </div>
    )
}

export default App