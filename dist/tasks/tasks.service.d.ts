import { Task } from './task.model';
export declare class TasksService {
    getTaskById(id: string): Task;
    private tasks;
    getAllTasks(): Task[];
    getTaskByName(name: string): Task;
    createTask(name: string, type: string, size: number, stars: string[]): Task;
    deleteTask(name: string): void;
    updateTaskStatus(name: string, taskStatus: Task): Task;
}
