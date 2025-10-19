import { Component } from '@angular/core';
import { PostedjobsComponent } from '../../../employer/jobs/postedjobs/postedjobs.component';

@Component({
  selector: 'app-posted-jobs-page',
  standalone: true,
  imports: [PostedjobsComponent],
  templateUrl: './posted-jobs-page.component.html',
  styleUrl: './posted-jobs-page.component.css'
})
export class PostedJobsPageComponent {

}
