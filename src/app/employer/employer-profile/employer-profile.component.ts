import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ApiserviceService } from '../../services/apiservice.service';
@Component({
  selector: 'app-employer-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employer-profile.component.html',
  styleUrl: './employer-profile.component.css'
})
export class EmployerProfileComponent implements OnInit {
loading: any;
user: any;

constructor (private apiService:ApiserviceService) { }
  ngOnInit(): void {

this.apiService.getLoggedInUserDetails().subscribe({
  next: (response) => {
    console.log('Employer profile data:', response);
    this.user= response;
    this.loading=false;
  } ,
  error: (err) => {
    console.error('Error fetching employer profile data:', err);
  }
});

   }

}
