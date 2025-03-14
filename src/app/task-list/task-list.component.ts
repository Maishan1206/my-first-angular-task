import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
 id: number;
 name: string;
 status: string;
 priority: string;
 createdAt: string;
 dueDate?: string | null;
}

@Component({
 selector: 'app-task-list',
 standalone: true,
 templateUrl: './task-list.component.html',
 styleUrls: ['./task-list.component.less'],
 imports: [CommonModule, FormsModule],
})
export class TaskListComponent {
 tasks: Task[] = [];
 searchText = '';
 filterStatus = '';

 constructor(private taskService: TaskService, private router: Router) {
 this.tasks = this.taskService.getTasks();
 this.updateTaskDates();
 }

 addTask() {
 this.router.navigate(['/task-form']);
 }

 editTask(task: Task) {
 this.router.navigate(['/task-form'], { state: { task } });
 }

 deleteTask(id: number) {
 this.taskService.deleteTask(id);
 this.tasks = this.taskService.getTasks();
 this.updateTaskDates();
 }

 filteredTasks() {
 return this.tasks
 .filter(
 (task) =>
 task.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
 (this.filterStatus ? task.status === this.filterStatus : true)
 )
 .sort((a, b) => a.priority.localeCompare(b.priority));
 }

 private updateTaskDates() {
 this.tasks.forEach((task) => {
 task.createdAt = task.createdAt ? new Date(task.createdAt).toISOString() : new Date().toISOString();
 task.dueDate = task.dueDate ? new Date(task.dueDate).toISOString() : null;
 });
 }
}