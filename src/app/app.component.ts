import { getNsPrefix } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  lname="Bruce"
  getN(par){
    console.log(par);
    return par;
  }
  getName(name){
    console.log(name);
    return name;
  }
  myEvent(par)
{
  console.log(par);
}
  myName="manjula";


  dname="Manu"
  disabledBox=true
  enableInput(){
    this.disabledBox=false 
  }
  pholder="enter first name"
changepholder(){
this.pholder="enter last name"
}

day="morning";
holiday="today";
greet=true;


aNames=[
  {
    studentName:"Manu-->",
    studentAge:24
  },
  {
    studentName:"Dhanu-->",
    studentAge:22
  },
  {
    studentName:"Thanu-->",
    studentAge:22
  }]


  animals=[
    {
    studentName:"Dog--->",
    studentAge:"pet animal"
    },
    {
      animalName:"Lion--->",
      animalType:"wild Animal"
    },
    {
      animalName:"cat--->",
      animalType:"pet animal"
    },
    {
      animalName:"rabbit--->",
      animalType:"pet animal"
    }]

    SNames=[
      {
        StuName:"Manu",
        StuPercentage:95
      },
      {
        StuName:"Dhanu",
        StuPercentage:85
      },
      {
        StuName:"thanu",
        StuPercentage:90
      }]
     
        
        

      textColor="gray";

            bgColor="black";
      styleColor="newfont"

dateExample=Date.now();


StudentFName:string='';
StudentLName:string='';
StudentAgee:string='';
terms:boolean=false;

onSubmit(formValue:NgForm){
  console.log(formValue.value);
  console.log(formValue)
}
resetForm(formValue:NgForm){
  formValue.reset();
}
}



