import { Component } from '@angular/core';
import { JobseekerRegistrationComponent } from '../../components/jobseeker-registration/jobseeker-registration.component';
@Component({
  selector: 'app-job-seeker-registration-page',
  standalone: true,
  imports: [JobseekerRegistrationComponent],
  templateUrl: './job-seeker-registration-page.component.html',
  styleUrl: './job-seeker-registration-page.component.css'
})
export class JobSeekerRegistrationPageComponent {

}
