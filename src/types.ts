export interface Task {
    id: number;
    text: string;
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