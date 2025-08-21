

export function TaskList({ tasks }) {

    return(
        <ul className="TaskList">
            {tasks.map((task, index) => (<li key={index}>{task}</li>))}
        </ul>
    );
}