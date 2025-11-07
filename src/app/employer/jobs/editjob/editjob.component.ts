import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ApiserviceService } from '../../../services/apiservice.service';
import { ActivatedRoute, Router, ɵEmptyOutletComponent } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editjob',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ɵEmptyOutletComponent],
  templateUrl: './editjob.component.html',
  styleUrl: './editjob.component.css'
})
export class EditjobComponent implements OnInit{
   user$ = this.authService.user$;
toggleDeleteModal(arg0: boolean) {
this.showDeleteMessage=arg0;
this.router.navigate(['postedjobs']);
}
showEditForm: boolean=true;
showDeleteMessage: boolean=false;
deleteJob() {
console.log('Delete job confirmed.');

this.showEditForm= false;
  this.showDeleteMessage = true;
}

dataholder: any;

  constructor(private cvService: ApiserviceService, private fb: FormBuilder,private route: ActivatedRoute,private router:Router, private authService:AuthService  ) { 
    this.editForm = this.fb.group({
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

const jobId = this.route.snapshot.paramMap.get('id');
  if (jobId) {
    console.log('Job ID from route:', jobId);
  }

  this.cvService.getVacancyById(jobId).subscribe({
    next: (response) => {
 this.dataholder=response;
      console.log(response);
        this.editForm.patchValue({
          jobTitle: this.dataholder.jobTitle,
          jobDescription: this.dataholder.jobDescription,
          datePosted: this.dataholder.datePosted,
          endDate: this.dataholder.endDate,
          location: this.dataholder.location,
          category: this.dataholder.category,
          salary: this.dataholder.salary
        });

    } ,
    error: (err) => {
      console.error('Error fetching vacancy data:', err);
    }
  });


  

}
RemoveEditForm() {
 this.showEditForm = false; 
 this.router.navigate(['postedjobs']);

}
DeleteJob() {
  const jobId = this.route.snapshot.paramMap.get('id');

  this.cvService.DeleteVacancy(jobId).subscribe({
    next: (response) => {
     this.dataholder=response;
Swal.fire('Success!', 'You have successfully deleted the vacancy .', 'success');

      window.location.reload();
    } ,
    error: (err) => {
      console.error('Error deleting vacancy:', err);
    }
  });


  this.router.navigate(['postedjobs']);
 }
 
editForm: any;
 
EditVacancy() {
this.cvService.EditPostedVacancy(this.dataholder.id,this.editForm.value).subscribe({
  next: (response) => {
Swal.fire('Success!', 'You have successfully Edit the vacancy .', 'success');
    this.router.navigate(['postedjobs']);
    
  
}
 
 ,
  error: (err) => {
    console.error('Error fetching experience data:', err);
  }   
});
}



}
