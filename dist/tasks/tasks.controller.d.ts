import { TasksService } from './tasks.service';
import { Task } from './task.model';
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TasksService);
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(task: Task): Task;
    deleteTask(id: string): string;
    updateTaskStatus(id: string, status: Task): Task;
}
