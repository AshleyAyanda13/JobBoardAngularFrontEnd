import { Component } from '@angular/core';
import { JobseekersapplicationsComponent } from '../../components/jobseekersapplications/jobseekersapplications.component';
@Component({
  selector: 'app-applications-page',
  standalone: true,
  imports: [JobseekersapplicationsComponent],
  templateUrl: './applications-page.component.html',
  styleUrl: './applications-page.component.css'
})
export class ApplicationsPageComponent {

}
