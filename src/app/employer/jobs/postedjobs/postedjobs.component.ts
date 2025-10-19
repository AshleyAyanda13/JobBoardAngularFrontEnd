import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../services/apiservice.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-postedjobs',
  standalone: true,
  imports: [CommonModule  ],
  templateUrl: './postedjobs.component.html',
  styleUrl: './postedjobs.component.css'
})
export class PostedjobsComponent implements OnInit{
viewApplicants(arg0: any) {

this.router.navigate(['application', arg0]);

 }


   
editVacancy(vacancy: any) {

console.log('Editing vacancy:', vacancy);
this.router.navigate(['editjob', vacancy]);



}
 
postedJobs: any;




  onAddJobClick() {
 this.router.navigate(['postjob']);


   }

  constructor( private apiService: ApiserviceService,private router:Router) { }
  ngOnInit(): void {
    




    this.apiService.getEmployersVacancies().subscribe({ 
      next: (response) => {
        this.postedJobs = response;
        console.log(this.postedJobs);
      }

      ,      error: (err) => {
        console.error('Error fetching posted jobs:', err);
      } 
    });
  } 

 
 
}
