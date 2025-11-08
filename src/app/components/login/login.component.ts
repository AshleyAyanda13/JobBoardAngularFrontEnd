import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { ApiserviceService } from '../../services/apiservice.service';
import { Inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router'; // Import Router
 


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required,]),
    Password: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });
  error: string = "";
  holder: any;
  constructor(@Inject(ApiserviceService) private apiService: ApiserviceService, private router: Router) {} // Inject Router
 

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const payload = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.Password
    };
 
    this.apiService.postData(payload).subscribe({
      next: (response: { token: string; }) => {
        this.error = "";

      
       

    
       
      },
      error: () => {
         
      }
    });

 



}}



