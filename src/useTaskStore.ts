import { useStore } from '@tanstack/react-store';
import { taskStore } from "./taskStore";

export const useTasks = () => {
    return useStore(taskStore, (state) => state.tasks);
};

export const useTasksActions = () => {
    return{
        loadTasks: () => taskStore.actions.loadTasks(),
        addTask: (text: string) => taskStore.actions.addTask(text),
        deleteTask: (id: number) => taskStore.actions.deleteTask(id),
        toggleTask: (id: number) => taskStore.actions.toggleTask(id),
        clearTasks: () => taskStore.actions.clearTasks(),
    };
};