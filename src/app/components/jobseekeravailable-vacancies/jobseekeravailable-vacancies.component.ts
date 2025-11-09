import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../services/apiservice.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-jobseekeravailable-vacancies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobseekeravailable-vacancies.component.html',
  styleUrl: './jobseekeravailable-vacancies.component.css'
})
export class JobseekeravailableVacanciesComponent implements OnInit{
loading: boolean=true;
ApplyForJob(_t4: any) {
this.router.navigate(['vacancydetailsforapplication', _t4]);
}
  vacancies:any;
   user$ = this.authService.user$;



  constructor(private apiService:ApiserviceService, private router:Router,private authService:AuthService) { }
  
  
  ngOnInit(): void {

this.apiService.getAllVacancies().subscribe({
  next: (response) => {
   this.vacancies = response;
   this.loading=false;
  } ,
  error: (err) => {
    console.error('Error fetching vacancies data:', err);
  }
}); 




   }



  
}
