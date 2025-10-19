import { Component } from '@angular/core';
import { CvSectionComponent } from '../../components/profile/cv-section/cv-section.component';
import { JobseekerhistoryComponent } from '../../components/profile/jobseekerhistory/jobseekerhistory.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CvSectionComponent, JobseekerhistoryComponent,CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

}
