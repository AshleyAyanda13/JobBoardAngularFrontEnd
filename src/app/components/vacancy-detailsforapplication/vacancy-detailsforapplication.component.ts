import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../services/apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-vacancy-detailsforapplication',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vacancy-detailsforapplication.component.html',
  styleUrl: './vacancy-detailsforapplication.component.css'
})
export class VacancyDetailsforapplicationComponent  implements OnInit {

   user$ = this.authService.user$;
 
jobId: any;


  
submitApplication() {
this.apiService.postApplicationforvacancy(this.jobId,this.applicationForm.value).subscribe({
  next: (response) => {
   this.applicationForm=response;
   Swal.fire('Success!', 'You have successfully Applied for this vacancy .', 'success');
   this.router.navigate(['/jobseekeravailablevacancies']);

  } ,
  error: (err) => {
     this.router.navigate(['/jobseekeravailablevacancies']);
    console.error('Error submitting application data:', err);
  }
});
}
applicationForm: any;



  vacancyDetails: any;
  constructor(  private apiService:ApiserviceService, private router:Router, private route:ActivatedRoute,private fb: FormBuilder,private authService:AuthService ) {



    
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

  } ,
  error: (err) => {
    console.error('Error fetching vacancy details data:', err);
    
  }

});


  }
}
