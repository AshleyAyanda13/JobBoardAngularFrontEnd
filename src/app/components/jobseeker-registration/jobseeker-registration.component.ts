import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-jobseeker-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './jobseeker-registration.component.html',
  styleUrl: './jobseeker-registration.component.css'
})
export class JobseekerRegistrationComponent {
successMessage: any;
errorMessage: any;
formSubmitted: any;
errors: any;
adderrors: any;
onSubmit() {
throw new Error('Method not implemented.');
}
registrationForm:any;

}
