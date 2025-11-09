import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-jobseeker-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './jobseeker-registration.component.html',
  styleUrl: './jobseeker-registration.component.css'
})
export class JobseekerRegistrationComponent {

  constructor(private authService:AuthService, private apiService:ApiserviceService,private fb: FormBuilder,private router: Router) {}

registerForm!: FormGroup;

   

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      title: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      idNumber: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const repeatPassword = form.get('repeatPassword')?.value;
    return password === repeatPassword ? null : { mismatch: true };
  }



successMessage: any;
errorMessage: any;
formSubmitted: any;
errors: any;
adderrors: any;

onSubmit() {


const payload = {
  title: this.registerForm.value.title,
  name: this.registerForm.value.name,
  surname: this.registerForm.value.surname,
  username: this.registerForm.value.username,
  email: this.registerForm.value.email,
  phoneNumber: this.registerForm.value.phoneNumber,
  idNumber: this.registerForm.value.idNumber,
  password: this.registerForm.value.password,
  repeatPassword: this.registerForm.value.repeatPassword
};
this.apiService.postJobSekeerRegistrationData(payload).subscribe({
  next: (response: any) => {
    this.successMessage = "Registration successful!";
    this.errorMessage = "";
    this.errors = null;
    Swal.fire({
      icon: 'success',
      title: 'Registration Successful', 
      text: 'You have been registered successfully!',
      confirmButtonText: 'OK'
    });
   this.router.navigate(['/login']);
  } ,
  error: (error: any) => {
    this.successMessage = "";
    if (error.status === 400 && error.error && error.error.errors) {
      this.errors = error.error.errors;
    } else {
      this.errorMessage = "An error occurred during registration. Please try again.";
    }
  }
});
this.formSubmitted=true;






}

}
