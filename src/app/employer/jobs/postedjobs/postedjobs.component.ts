import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../services/apiservice.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ɵEmptyOutletComponent } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-postedjobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postedjobs.component.html',
  styleUrl: './postedjobs.component.css'
})
export class PostedjobsComponent implements OnInit{

   user$ = this.authService.user$;
loading: boolean=true ;
viewApplicants(arg0: any) {

this.router.navigate(['application', arg0]);

 }


   
editVacancy(vacancy: any) {


this.router.navigate(['editjob', vacancy]);



}
 
postedJobs: any;




  onAddJobClick() {
 this.router.navigate(['postjob']);


   }

  constructor( private apiService: ApiserviceService,private router:Router, private authService:AuthService) { }
  ngOnInit(): void {
    




    this.apiService.getEmployersVacancies().subscribe({ 
      next: (response) => {
        this.postedJobs = response;
 
        this.loading=false;
      }

      ,      error: (err) => {
        console.error('Error fetching posted jobs:', err);
      } 
    });
  } 

 
 
}
