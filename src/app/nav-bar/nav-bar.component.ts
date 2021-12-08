import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  myReactiveForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm=new FormGroup({
      'FirstNameOfCandidate': new FormControl(null),
    'LastNameOfCandidate': new FormControl(null),
    'EmailAdressOfCandidate': new FormControl(null),
    'PanNumerOfCandidate':new FormControl(null)
    })
  }
  onSubmit(){
    console.log(this.myReactiveForm.value);
  }

}
