import { Component } from '@angular/core';
import { EmployerProfileComponent } from '../../../employer/employer-profile/employer-profile.component';
 

@Component({
  selector: 'app-recruiter-profile-page',
  standalone: true,
  imports: [EmployerProfileComponent],
  templateUrl: './recruiter-profile-page.component.html',
  styleUrl: './recruiter-profile-page.component.css'
})
export class RecruiterProfilePageComponent {

}
