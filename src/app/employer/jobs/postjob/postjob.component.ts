import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ApiserviceService } from '../../../services/apiservice.service';
import { Router, ɵEmptyOutletComponent } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-postjob',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ɵEmptyOutletComponent],
  templateUrl: './postjob.component.html',
  styleUrl: './postjob.component.css'
})
export class PostjobComponent implements OnInit{

 user$ = this.authService.user$;


  constructor( private fb: FormBuilder,private apiService: ApiserviceService,private router:Router, private authService:AuthService ) { 





    this.vacancyForm = this.fb.group({
      jobTitle: [''],
      jobDescription: [''],
      datePosted: [''],
      endDate: [''],
     location: [''],
     category: [''],
     salary: [''],
    });
  }
  ngOnInit(): void {
   


  


    
  }



vacancyForm: any;
submitVacancy() {
 


this.apiService.postEmployersVacancy(this.vacancyForm.value).subscribe({
  next: (response) => {
   this.vacancyForm=response;
   Swal.fire('Success!', 'You have successfully Added the vacancy .', 'success');
   this.router.navigate(['postedjobs']);
    
  } ,
  error: (err) => {
     this.router.navigate(['postedjobs']);
    console.error('Error fetching experience data:', err);
  }
});

}


cancelForm() {
 this.router.navigate(['postedjobs']);
    
}

}
