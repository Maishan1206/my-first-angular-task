import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = [
    {
      id: 1,
      name: 'Task 1',
      status: 'Pending',
      priority: 'Medium',
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: 'Task 2',
      status: 'Completed',
      priority: 'High',
      createdAt: new Date().toISOString(),
    },
  ];

  getTasks() {
    return this.tasks;
  }

  addTask(task: any) {
    const newTask = { ...task, createdAt: new Date().toISOString() };
    this.tasks.push(newTask);
  }

  updateTask(updatedTask: any) {
    this.tasks = this.tasks.map(task =>
      task.id === updatedTask.id ? { ...updatedTask, createdAt: task.createdAt } : task
    );
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
