import './App.css';
import { Inputbox } from './inputTask';
import { TaskList } from "./listTask";
import { useEffect } from "react";
import { Task } from './types';
import { useTasks, useTasksActions} from './useTaskStore'

function App() {
    const tasks = useTasks();
    const { loadTasks } = useTasksActions();

    useEffect(() => {
        loadTasks();
    }, [loadTasks]);

    return (
        <div className="App">
            <h1>Список задач:</h1>
            <Inputbox />
            <TaskList
                tasks={tasks}
            />
        </div>
    );
}

export default App;