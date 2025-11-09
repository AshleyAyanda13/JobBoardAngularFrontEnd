import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';

import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-jobseekersapplications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobseekersapplications.component.html',
  styleUrl: './jobseekersapplications.component.css'
})
export class JobseekersapplicationsComponent implements OnInit {
  userId: number = 0;
  data: any[] = [];
 user$ = this.authService.user$;
loading: boolean=true;
  constructor(
    private apiService: ApiserviceService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.apiService.getLoggedInUserDetails().subscribe({
      next: (userResponse) => {
        this.userId = userResponse.userId;

        this.apiService.getJobSeekersApplications(this.userId).subscribe({
          next: (applications) => {
            this.data = applications;
 
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
                  this.loading = false;

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
      },
      error: (err) => {
        console.error('Error fetching user details:', err);
      }
    });
  }
}