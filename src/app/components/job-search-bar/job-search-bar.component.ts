import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-job-search-bar',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './job-search-bar.component.html',
  styleUrl: './job-search-bar.component.css'
})
export class JobSearchBarComponent {
 searchTitle: string = '';
  searchLocation: string = '';
  user$ = this.authService.user$;




  constructor(private router: Router,private apiService:ApiserviceService,private authService: AuthService) {}

  onSearch(): void {
   
   const queryParams = {
  keyword: this.searchTitle.trim(),
  location: this.searchLocation.trim()
 
};
console.log(queryParams);
   
this.router.navigate(['/jobseekeravailablesearchedvacancies'], { queryParams: queryParams });
    };


    
  }




