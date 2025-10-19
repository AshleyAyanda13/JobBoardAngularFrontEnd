import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../services/apiservice.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-vacancy-detailsforapplication',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './vacancy-detailsforapplication.component.html',
  styleUrl: './vacancy-detailsforapplication.component.css'
})
export class VacancyDetailsforapplicationComponent  implements OnInit {

  
 
jobId: any;


  
submitApplication() {
this.apiService.postApplicationforvacancy(this.jobId,this.applicationForm.value).subscribe({
  next: (response) => {
   this.applicationForm=response;
   this.router.navigate(['jobseekeravailablevacancies']);

  } ,
  error: (err) => {
     this.router.navigate(['jobseekeravailablevacancies']);
    console.error('Error submitting application data:', err);
  }
});
}
applicationForm: any;



  vacancyDetails: any;
  constructor(  private apiService:ApiserviceService, private router:Router, private route:ActivatedRoute,private fb: FormBuilder,) {



    
    this.applicationForm = this.fb.group({
      coverletter: [''],
    
    });
  }
  ngOnInit(): void {
   
const jobId = this.route.snapshot.paramMap.get('id');
  if (jobId) {
    console.log('Job ID from route:', jobId);
  }
 



this.apiService.getVacancyById(jobId).subscribe({
  next: (response) => {
   this.vacancyDetails = response;
   this.jobId=jobId;
   // console.log(this.vacancyDetails);
  } ,
  error: (err) => {
    console.error('Error fetching vacancy details data:', err);
    
  }

});


  }
}
