import { Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { TaskListComponent } from '../app/task-list/task-list.component';
import { TaskFormComponent } from '../app/task-form/task-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'task-form', component: TaskFormComponent },
  { path: '**', redirectTo: 'login' }
];
