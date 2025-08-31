import { createStore } from '@tanstack/react-store';
import { Task } from './types';

export interface TaskState {
    tasks: Task[];
}


const initialState: TaskState = {
    tasks: []
};

const saveTasksToStorage = (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadTasksFromStorage = () => {
    try{
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    } catch(error){
        console.error('Error loading tasks from localstorage', error);
        return [];
    }
};

export const taskStore = createStore<TaskState>({
    initialState: {
        tasks: loadTasksFromStorage()
    },

    actions: {
        // Загрузка задач из localStorage
        loadTasks: (state) => {
            const tasks = loadTasksFromStorage();
            return {...state, tasks};
        },

        // Добавление задачи
        addTask: (state, taskText: string) => {
            if (taskText.trim() === '') return state;

            const newTask: Task = {
                id: Date.now(),
                text: taskText,
                completed: false
            };

            const newTasks = [...state.tasks, newTask];
            saveTasksToStorage(newTasks);
            return {...state, tasks: newTasks};
        },

        // Удаление задачи
        deleteTask: (state, taskId: number) => {
            const newTasks = state.tasks.filter((task) => task.id !== taskId);
            saveTasksToStorage(newTasks);
            return {...state, tasks: newTasks};
        },

        // Переключение статуса задачи
        toggleTask: (state, taskId: number) => {
            const newTasks = state.tasks.map(task => task.id === taskId ?
                { ...task, completed: !task.completed } : task);
            saveTasksToStorage(newTasks);
            return {...state, tasks: newTasks};
        },

        // Очистка всех задач
        clearTasks: (state) => {
            saveTasksToStorage([]);
            return {...state, tasks: []};
        }
    }
});