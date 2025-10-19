import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../services/apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jobseekeravailable-vacancies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobseekeravailable-vacancies.component.html',
  styleUrl: './jobseekeravailable-vacancies.component.css'
})
export class JobseekeravailableVacanciesComponent implements OnInit{
ApplyForJob(_t4: any) {
this.router.navigate(['vacancydetailsforapplication', _t4]);
}
  vacancies:any;
  
  constructor(private apiService:ApiserviceService, private router:Router) { }
  
  
  ngOnInit(): void {

this.apiService.getAllVacancies().subscribe({
  next: (response) => {
   this.vacancies = response;
   // console.log(this.vacancies);
  } ,
  error: (err) => {
    console.error('Error fetching vacancies data:', err);
  }
}); 




   }



  
}
