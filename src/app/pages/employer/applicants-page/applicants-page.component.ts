import { Component } from '@angular/core';
import { ApplicantsComponent } from '../../../employer/jobs/applicants/applicants.component';
@Component({
  selector: 'app-applicants-page',
  standalone: true,
  imports: [ApplicantsComponent],
  templateUrl: './applicants-page.component.html',
  styleUrl: './applicants-page.component.css'
})
export class ApplicantsPageComponent {

}
