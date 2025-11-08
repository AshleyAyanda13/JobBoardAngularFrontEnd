import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,]),
      Password: new FormControl('', [Validators.required, Validators.minLength(1)]),
    });
  error: any;
onLogin() {
  const payload = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.Password
    };
this.ApiService.postData(payload).subscribe({
  next: () => {
    this.authState.fetchUser().subscribe(() => {
      this.router.navigate(['/postedjobs']);
    });
  },
  error: (err) => {
    console.error('Login failed:', err);
  }
});


}
 
constructor(private authState: AuthService,private ApiService:ApiserviceService, private router: Router ) 
{




 }


 
}
