import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { ApiserviceService } from '../../../services/apiservice.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
   user$ = this.authService.user$;
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
logout() {



  this.apiService.postUserLogout().subscribe({
    next: (response) => {
      console.log('Logout successful:', response);
 this.authService.clearUser();

      window.location.href = '/login'; // Redirect to login page
    },
    error: (err) => {
      console.error('Error during logout:', err);
    }
  });
}


  constructor(private authService: AuthService, private apiService:ApiserviceService) {}
  


}
