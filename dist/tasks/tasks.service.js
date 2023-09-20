"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    getTaskById(id) {
        throw new Error('Method not implemented.');
    }
    getAllTasks() {
        return this.tasks;
    }
    getTaskByName(name) {
        return this.tasks.find((task) => task.name === name);
    }
    createTask(name, type, size, stars) {
        const task = {
            name,
            type,
            size,
            stars,
        };
        this.tasks.push(task);
        return task;
    }
    deleteTask(name) {
        const taskIndex = this.tasks.findIndex((task) => task.name === name);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
        }
        else {
            throw new common_1.NotFoundException(`Task with name '${name}' not found.`);
        }
    }
    updateTaskStatus(name, taskStatus) {
        const task = this.getTaskByName(name);
        if (task) {
            return task;
        }
        throw new common_1.NotFoundException(`Task with name '${name}' not found.`);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=tasks.service.js.map