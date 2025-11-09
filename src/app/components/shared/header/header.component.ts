import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { ApiserviceService } from '../../../services/apiservice.service';

import { RouterLink, Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
   user$ = this.authService.user$;
ngOnInit(): void {
 }
logout() {



  this.apiService.postUserLogout().subscribe({
    next: (response) => {
      console.log('Logout successful:', response);
 this.authService.clearUser();

  
      this.router.navigate(['/login']); // Use Angular router
    },
    error: (err) => {
      console.error('Error during logout:', err);
    }
  });
}


  constructor(private authService: AuthService, private apiService:ApiserviceService,private router:Router) {}
  


}
