import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JobSearchBarComponent } from './components/job-search-bar/job-search-bar.component';
import { AuthService } from './services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,JobSearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private authService:AuthService) {}
  ngOnInit(): void {
 

 this.authService.fetchUser().subscribe(); 



  }
  title = 'JobBoardFrontEnd';
}
