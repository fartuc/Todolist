import './App.css';
import { Inputbox } from './inputTask';
import { TaskList } from "./listTask";
import { useState, useEffect } from "react";
import { Task } from './types';

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    // Загрузка задач из LocalStorage при загрузке страницы
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            try {
                const parsedTasks: Task[] = JSON.parse(savedTasks);
                setTasks(parsedTasks);
            } catch (error) {
                console.error('Error parsing tasks from localStorage:', error);
            }
        }
    }, []);

    // Сохранение задач в LocalStorage при каждом изменении
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (taskText: string) => {
        if (taskText.trim() !== '') {
            setTasks(tasks => [...tasks, {
                id: Date.now(),
                text: taskText,
                completed: false
            }]);
        }
    };

    const deleteTask = (taskId: number) => {
        setTasks(tasks => tasks.filter(task => task.id !== taskId));
    };

    const toggleTask = (taskId: number) => {
        setTasks(tasks => tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="App">
            <h1>Список задач:</h1>
            <Inputbox onAddTask={addTask} />
            <TaskList
                tasks={tasks}
                onDeleteTask={deleteTask}
                onToggleTask={toggleTask}
            />
        </div>
    );
}

export default App;