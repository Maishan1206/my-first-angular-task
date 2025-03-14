import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.less'],
  imports: [FormsModule],
})
export class TaskFormComponent {
  task = { id: 0, name: '', status: 'Pending', priority: 'Medium', dueDate: '' };
  isEdit = false;

  constructor(private taskService: TaskService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['task']) {
      this.task = { ...navigation.extras.state['task'] };
      this.isEdit = true;
    }
  }

  saveTask() {
    if (this.isEdit) {
      this.taskService.updateTask(this.task);
    } else {
      this.task.id = Date.now();
      this.taskService.addTask(this.task);
    }
    this.router.navigate(['/tasks']);
  }
}
