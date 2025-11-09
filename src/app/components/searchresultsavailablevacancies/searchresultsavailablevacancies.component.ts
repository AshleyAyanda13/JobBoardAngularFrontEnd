import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { ActivatedRoute, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-searchresultsavailablevacancies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searchresultsavailablevacancies.component.html',
  styleUrl: './searchresultsavailablevacancies.component.css'
})
export class SearchresultsavailablevacanciesComponent  implements OnInit {
   user$ = this.authService.user$;
loading: boolean=true;
ApplyForJob(arg0: any) {


  this.router.navigate(['vacancydetailsforapplication', arg0]);
}
  constructor(private apiService:ApiserviceService,private route:ActivatedRoute,private router:Router, private authService:AuthService) { }
   

vacancies:any;

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    const searchPayload = {
      keyword: params['keyword'] || '',
      location: params['location'] || ''
    };

    this.apiService.postSearchQuery(searchPayload).subscribe({
      next: (response) => {
        this.vacancies = response;
        this.loading=false;
      },
      error: (err) => {
        console.error('Error loading vacancies:', err);
      }
    });
  });
}


}
