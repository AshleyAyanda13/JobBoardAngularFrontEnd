import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { ApiserviceService } from '../../services/apiservice.service';
import { Inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router'; // Import Router
import { AuthService } from '../../services/auth.service';
 


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required,]),
    password: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });
  error: string = "";
  holder: any;
formSubmitted: any;
  constructor(private authState:AuthService, private apiService: ApiserviceService, private router: Router) {} 
 

  onLogin(): void {
     this.formSubmitted=true;
    const payload = {
      email: this.loginForm.value.email ,
      password: this.loginForm.value.password
    };
 console.log(payload);
    this.apiService.postData(payload).subscribe({
      next: (response: { token: string; }) => {
        this.error = "";

        this.authState.fetchUser().subscribe(() => {
      this.router.navigate(['/availablevacancies']);
    });
       

    
       
      },
      error: () => {
         this.error = 'Invalid email or password';
        console.error('Login failed');
      }
    });

 



}}



