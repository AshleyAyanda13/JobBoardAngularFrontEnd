import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { jwtDecode } from 'jwt-decode';
import { CommonModule } from '@angular/common';

interface JwtPayload {
  sub: string;
  userId: number;
  iat: number;
  exp: number;
}
@Component({
  selector: 'app-jobseekersapplications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobseekersapplications.component.html',
  styleUrl: './jobseekersapplications.component.css'
})

export class JobseekersapplicationsComponent implements OnInit {
data: any[] = [];
  constructor(private apiService:ApiserviceService) { }
  
ngOnInit(): void {
  const token = localStorage.getItem('jwtToken');
  if (!token) {
    alert('No token found. Please log in.');
    return;
  }

  const decoded = jwtDecode<JwtPayload>(token);

  this.apiService.getJobSeekersApplications(decoded.userId).subscribe({
    next: (applications) => {
      this.data = applications;
console.log(this.data); 
      this.data.forEach((application, index) => {
        this.apiService.getVacancyById(application.vacancyId).subscribe({
          next: (vacancyDetails) => {
            this.data[index] = {
              ...application,
              jobTitle: vacancyDetails.jobTitle,
              jobDescription: vacancyDetails.jobDescription,
              location: vacancyDetails.location,
              endDate: vacancyDetails.endDate,
              salary: vacancyDetails.salary,
              datePosted: vacancyDetails.datePosted,
              category: vacancyDetails.category
            };
          },
          error: (err) => {
            console.error(`Error fetching vacancy ${application.vacancyId}:`, err);
          }
        });
      });
    },
    error: (err) => {
      console.error('Error fetching applications:', err);
    }
  });
}



    
  

}
