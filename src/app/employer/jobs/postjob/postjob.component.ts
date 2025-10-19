import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ApiserviceService } from '../../../services/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postjob',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './postjob.component.html',
  styleUrl: './postjob.component.css'
})
export class PostjobComponent implements OnInit{



  constructor( private fb: FormBuilder,private apiService: ApiserviceService,private router:Router) { 





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
