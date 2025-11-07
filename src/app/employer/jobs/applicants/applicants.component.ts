import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../../services/apiservice.service';
import { ActivatedRoute, Route, Router, ɵEmptyOutletComponent } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-applicants',
  standalone: true,
  imports: [CommonModule, ɵEmptyOutletComponent],
  templateUrl: './applicants.component.html',
  styleUrl: './applicants.component.css'
})
export class ApplicantsComponent implements OnInit{

 user$ = this.authService.user$;


DownloadCv(resumeId: any) {
this.apiservice.getApplicantsCV(resumeId).subscribe({
  next: (response) => {
    const blob = new Blob([response], { type: this.applicantCvDetails.fileType });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
       
    a.href = url;
    a.download = this.applicantCvDetails.fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  },
  error: (err) => {
    console.error('Error downloading resume:', err);
  }   
}); 
}
ViewResume(resumeId: number): void {
  this.apiservice.getApplicantsCV(resumeId).subscribe({
    next: (response) => {
      const blob = new Blob([response], { type: 'application/pdf' }); // or use resume.fileType if dynamic
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    },
    error: (err) => {
      console.error('Error viewing resume:', err);
    }
  });




}

constructor(private apiservice:ApiserviceService,private route: ActivatedRoute, private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  const jobId = this.route.snapshot.paramMap.get('id');
  this.jobId = jobId;

  this.apiservice.getVacancyApplications(jobId).subscribe({
    next: (applicants) => {
      this.applicants = applicants;

      console.log(applicants);
      this.applicants.forEach((applicant: any) => {
        if (applicant.resumeId) {
          this.apiservice.getApplicantCvDetails(applicant.resumeId).subscribe({
            next: (cvDetails) => {
              applicant.resumeFileName = cvDetails.fileName; 
this.applicantCvDetails=cvDetails;
  applicant.fileType = cvDetails.fileType; 
             },
            error: (err) => {
              console.error(`Error fetching CV for applicant ${applicant.id}:`, err);
            }
          });
        }
      });
    },
    error: (err) => {
      console.error('Error fetching applicants:', err);
    }
  });
}
applicants: any;
applicantcvId: any;
applicantCvDetails: any;  
goBack() {
 this.router.navigate(['postedjobs']);

}
jobId: any;




}
