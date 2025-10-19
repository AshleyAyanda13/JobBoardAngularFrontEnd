import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ApiserviceService]
})
export class HomeComponent implements OnInit{

  
  constructor(private service:ApiserviceService){}
  ngOnInit(): void {

 
      
  }

}
