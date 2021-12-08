import { Component, OnInit } from '@angular/core';
import { NeedDataService } from 'src/app/need-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(service:NeedDataService) { 
    this.products=service.products;
  }

  ngOnInit(): void {
  }
products:any;
}
