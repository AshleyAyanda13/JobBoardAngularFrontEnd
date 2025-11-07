import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../services/apiservice.service';

import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { ɵEmptyOutletComponent } from "@angular/router";

 

@Component({
  selector: 'app-cv-section',
  standalone: true,
  imports: [CommonModule, ɵEmptyOutletComponent],
  templateUrl: './cv-section.component.html',
  styleUrl: './cv-section.component.css'
})
export class CvSectionComponent implements OnInit {
 user$ = this.authService.user$;
  userId :number=0
DeleteCV() {

const confirmed = window.confirm('Are you sure you want to delete your CV?');
if (confirmed) {
  

  



   
    
 
  this.cvService.DeleteCv().subscribe({
      next: (response) => {
       this.data=response;

      
       
        

    
       
      },
      error: (err) => {
       
      }
    });
 

  }






}
  cvFileName = 'AyandaAshley Mthombeni CV.docx';
  uploadDate = 'Sep 1, 2025';
  selectedFile: File | null = null;
  acceptedTypes = '.pdf,.doc,.docx,.odt,.jpg,.jpeg,.png,.xls,.xlsx,.ods,.txt,.rtf';
data: any;
  constructor(private cvService: ApiserviceService,private cdr: ChangeDetectorRef, private authService:AuthService) {}

  ngOnInit(): void {
    

this.getUserCVData();

  }
getUserCVData() {
  this.cvService.getLoggedInUserDetails().subscribe({
    next: (userResponse) => {
      this.userId = userResponse.userId;

      
      this.cvService.getUsersCV(this.userId.toString()).subscribe({
        next: (response) => {
          console.log("User Response:", response);
          this.data = response;
        },
        error: (err) => {
          console.error('Failed to load CV:', err);
        }
      });
    },
    error: (err) => {
      console.error('Failed to get user info:', err);
    }
  });
}
 
  downloadCv() {
  this.cvService.DownloadCv().subscribe({
    next: (response: Blob) => {
      const blob = new Blob([response], { type: response.type }); 
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = this.data?.fileName; 
      a.click();
      window.URL.revokeObjectURL(url);
    },
    error: (err) => {
      console.error('Download failed:', err);
    }
  });
}


  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      if (file.size > 4 * 1024 * 1024) {
        alert('File exceeds 4MB limit.');
        return;
      }
      this.selectedFile = file;
    }
  }

  uploadCv() {
  if (!this.selectedFile) {
    alert('Please select a file first.');
    return;
  }

  const token = localStorage.getItem('jwtToken');
  if (!token) {
    alert('No token found. Please log in.');
    return;
  }

  
  const now = Math.floor(Date.now() / 1000);
  

  const formData = new FormData();
  formData.append('file', this.selectedFile);  
  
  this.cvService.postUserCV(formData).subscribe(() => {
    alert('CV Uploaded successfully!');
    this.selectedFile = null;
    window.location.reload();
  });
}
}