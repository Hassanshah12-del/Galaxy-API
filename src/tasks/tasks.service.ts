import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  getTaskById(id: string): Task {
      throw new Error('Method not implemented.');
  }
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskByName(name: string): Task {
    return this.tasks.find((task) => task.name === name);
  }

  createTask(name: string, type: string, size: number, stars: string[]): Task {
    const task: Task = {
      name,
      type,
      size,
      stars,
    };
    this.tasks.push(task);
    return task;
  }

  deleteTask(name: string) {
    const taskIndex = this.tasks.findIndex((task) => task.name === name);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    } else {
      throw new NotFoundException(`Task with name '${name}' not found.`);
    }
  }

  
}
