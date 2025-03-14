import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  validUsers = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' },
  ];

  constructor(private router: Router) {}

  login() {
    const user = this.validUsers.find(
      (u) => u.username === this.username && u.password === this.password
    );

    if (user) {
      localStorage.setItem('user', this.username);
      this.router.navigate(['/tasks']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
