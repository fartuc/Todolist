export interface Task {
    id: number;
    name: string;
    completed: boolean;
}

export interface TaskListProps {
    tasks: Task[];
    onDeleteTask: (taskId: number) => void;
    onToggleTask: (taskId: number) => void;
}

export interface InputBoxProps {
    onAddTask: (taskText: string) => void;
}