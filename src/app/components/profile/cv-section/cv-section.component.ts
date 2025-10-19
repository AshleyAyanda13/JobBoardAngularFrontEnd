import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../services/apiservice.service';
import { jwtDecode } from 'jwt-decode';
import { CommonModule } from '@angular/common';

interface JwtPayload {
  sub: string;
  userId: number;
  iat: number;
  exp: number;
}

@Component({
  selector: 'app-cv-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-section.component.html',
  styleUrl: './cv-section.component.css'
})
export class CvSectionComponent implements OnInit {
DeleteCV() {

const confirmed = window.confirm('Are you sure you want to delete your CV?');
if (confirmed) {
  

  



  const token = localStorage.getItem('jwtToken');
   if (!token) {
    alert('No token found. Please log in.');
    return;
  }
    const decoded = jwtDecode<JwtPayload>(token);
 
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
  constructor(private cvService: ApiserviceService,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    

this.getUserCVData();

  }
getUserCVData() {
  const token = localStorage.getItem('jwtToken');
   if (!token) {
    alert('No token found. Please log in.');
    return;
  }
    const decoded = jwtDecode<JwtPayload>(token);


    this.cvService.getUsersCV(decoded.userId.toString()).subscribe({
      next: (response) => {
       this.data=response;    

    
       
      },
      error: (err) => {
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

  const decoded = jwtDecode<JwtPayload>(token);
  const now = Math.floor(Date.now() / 1000);
  if (decoded.exp < now) {
    alert('Session expired. Please log in again.');
    return;
  }

  const formData = new FormData();
  formData.append('file', this.selectedFile);  
  formData.append('userId', decoded.userId.toString());  

  this.cvService.postUserCV(formData).subscribe(() => {
    alert('CV Uploaded successfully!');
    this.selectedFile = null;
    window.location.reload();
  });
}
}