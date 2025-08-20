import { useState } from "react";

export function TaskList() {
    const [tasks, setTasks] = useState(['']);


    return(
        <ul className="TaskList">
            {tasks.map((task, index) => (<li key={index}>{task}</li>))}
        </ul>
    );
}