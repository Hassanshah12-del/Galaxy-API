import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task,  } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(@Body() task: Task): Task {
    const { name, type, size, stars } = task;
    return this.taskService.createTask(name, type, size, stars);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): string {
    this.taskService.deleteTask(id);
    return `Task ${id} is deleted`;
  }

}
