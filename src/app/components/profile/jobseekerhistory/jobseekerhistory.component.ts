import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../services/apiservice.service';
import { CommonModule } from '@angular/common';
 
 import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
 import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-jobseekerhistory',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './jobseekerhistory.component.html',
  styleUrl: './jobseekerhistory.component.css'
})
export class JobseekerhistoryComponent implements OnInit{


   user$ = this.authService.user$;
loading: boolean=true;
submitEditForm() {
const payload = this.EditEducationForm.value;
this.cvService.EditEducation(this.editEducationId,payload).subscribe({
  next: (response) => {
   this.data=response;
    window.location.reload();

  } ,
  error: (err) => {
    console.error('Error fetching experience data:', err);
  }

});
console.log(payload);
}
SubmitEducationForm() {
const payload = this.AddeducationForm.value;

this.cvService.postEducation(payload).subscribe({
  next: (response) => {
   this.data=response;
    window.location.reload();

  } ,
  error: (err) => {
    console.error('Error fetching experience data:', err);
  }

});
console.log(payload);
}
RemoveEditeducationForm() {
this.showEditEducationForm =false;
}
EditEducationForm: any;
showEditEducationForm: boolean=false;
RemoveeducationForm() {
this.showEducationForm = false;
}
EditeducationForm: any;
AddeducationForm: any;
showEducationForm: boolean=false;

RemoveWorkExperience() {
  this.showEditWorkExpForm = false;
}
showEditWorkExpForm: boolean=false;


ShowEditWorkExpForm(item:any) {

  this.editingId = item.id;
  console.log("id is"+this.editingId);
   this.EditWorkExpForm.patchValue({
    company: item.company,
    position: item.position,
    startDate: item.startDate,
    endDate: item.endDate,
    currentlyWorking: item.currentlyWorking,
    description: item.description
  });
  this.showEditWorkExpForm = true;
  
this.showEditWorkExpForm = true;
}
CancelWorkExperience() {
this.showWorkExperienceForm = false;
}


SubmitEditForm() {
const payload = this.workForm.value;
this.cvService.postWorkExperience(payload).subscribe({
  next: (response) => {
   this.data=response;
    window.location.reload();

  } ,
  error: (err) => {
    console.error('Error fetching experience data:', err);
  }

});

console.log(payload);
}

submitForm() {
const payload = this.workForm.value;
this.cvService.postWorkExperience(payload).subscribe({
  next: (response) => {
   this.data=response;
    window.location.reload();

  } ,
  error: (err) => {
    console.error('Error fetching experience data:', err);
  }

});

console.log(payload);
}
 
removeExperience: any;
workForm: any;
EditWorkExpForm: any;
 
editingId: number  = 0;
jobseekerdetails:any;
editWorkExperience() {
 
  const payload = this.EditWorkExpForm.value;
this.cvService.postEditExp(this.editingId,payload).subscribe({
  next: (response) => {
   this.data=response;
    

  } ,
  error: (err) => {
    console.error('Error fetching experience data:', err);
  }

});
 
}
  
showWorkExperienceForm: boolean=false;
EditworkExp: boolean=false;
editeducation: boolean=false;
Isadded: boolean=false;
editEducationId: any  ;
editEducation(currenteducation:any  ) {

this.editEducationId = currenteducation.id;
console.log("id is"+this.editEducationId);
 this.EditEducationForm.patchValue({ 
  institution: currenteducation.institution,
  fieldOfStudy: currenteducation.fieldOfStudy,
  startDate: currenteducation.startDate,
  endDate: currenteducation.endDate,
  degree: currenteducation.degree
});
this.showEditEducationForm=true;
}
DeleteEducation() {

this.cvService.DeleteEducation(this.editEducationId).subscribe({
  next: (response) => {
   this.data=response;
    window.location.reload(); 
  } ,
  error: (err) => {
    console.error('Error fetching experience data:', err);
  }

}
)
}
GetloggedinUser() {

this.cvService.getLoggedInUser().subscribe({
  next: (response) => {
  this.jobseekerdetails=response;
    console.log(this.jobseekerdetails);
  } ,
  error: (err) => {
    console.error('Error fetching experience data:', err);
  }

}
)
}
DeleteExperience() {

this.cvService.DeleteExp(this.editingId).subscribe({
  next: (response) => {
   this.data=response;
    window.location.reload(); 
  } ,
  error: (err) => {
    console.error('Error fetching experience data:', err);
  }

}
)
}
addEducation() {
  this.showEducationForm = true;
}
addWorkExperience() {
  this.showWorkExperienceForm = true;
}

data:any;
educationdata:any;
  constructor(private cvService: ApiserviceService, private fb: FormBuilder, private authService:AuthService)  
{ 
    this.workForm = this.fb.group({
      position: [''],
      company: [''],
      startDate: [''],
      endDate: [''],
      currentlyWorking: [false],
      description: ['']
    });
    this.EditWorkExpForm = this.fb.group({
      position: [''],
      company: [''],
      startDate: [''],
      endDate: [''],
      currentlyWorking: [false],
      description: ['']
    });


    this.AddeducationForm = this.fb.group({
      institution: [''],
      fieldOfStudy: [''],
      startDate: [''],
      endDate: [''],
      degree: ['']
    });


    
    this.EditEducationForm = this.fb.group({
      institution: [''],
      fieldOfStudy: [''],
      startDate: [''],
      endDate: [''],
      degree: ['']
    });
} 
  

  ngOnInit(): void {
this.cvService.getExperienceData().subscribe({
  next: (response) => {
   this.data=response;
    console.log(this.data);
this.loading=false;
  } ,
  error: (err) => {
    console.error('Error fetching experience data:', err);
  }

});
this.cvService.getEducationData().subscribe({
  next: (response) => {
   this.educationdata=response;
   console.log(this.educationdata);
     
  } ,
  error: (err) => {
    console.error('Error fetching experience data:', err);
  }

});
  this.GetloggedinUser()


};
}
