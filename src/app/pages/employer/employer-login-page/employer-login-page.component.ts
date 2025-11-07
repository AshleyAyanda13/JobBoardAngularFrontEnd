import { Component } from '@angular/core';
import { LoginComponent } from '../../../employer/login/login.component';
@Component({
  selector: 'app-employer-login-page',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './employer-login-page.component.html',
  styleUrl: './employer-login-page.component.css'
})
export class EmployerLoginPageComponent {

}
