import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
   registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authState: AuthService, private router: Router, private apiService:ApiserviceService) {
    this.registerForm = this.fb.group({
      title: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required],
      username: "Recruiter"+Math.floor(Math.random()*10000)
    });
  }

formSubmitted = false;
successMessage: any;
errorMessage: any;
errors: any;
adderrors: any;
 static passwordsMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('repeatPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

 onSubmit() {
    if (true) {

      this.formSubmitted = true;
this.apiService.postRecruiterRegistrationData(this.registerForm.value).subscribe({
  next: (response: any) => {
    this.successMessage = "Registration successful!";
    this.errorMessage = "";
    this.errors = {};
    this.adderrors = {};
    console.log('Registration successful:', response);
    this.registerForm.reset();
    this.router.navigate(['/employer/login']);
  },
  error: (error: any) => {
    this.errorMessage = "Registration failed. Please try again.";
    this.successMessage = "";
    if (error.error) {
      this.errors = error.error.errors || {};
      this.adderrors = error.error.additionalErrors || {};
    }
    console.error('Registration error:', error);
  }
});
      console.log('Form submitted:', this.registerForm.value);







    }




  }}
