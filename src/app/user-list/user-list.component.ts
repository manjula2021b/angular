import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `

  <h1>
  Hey Template works
  </h1>
  <h1>{{name}}</h1>

  <br>
  <br>
  <div class="Box">
  <h1>Employee Interest Form</h1>
  <form>
  <label for="name of employee">Enter Your Name:</label>
  <input type="text" id="name of employee" name="name of employee">
  <br>
  <br>
  <label for="dept name">Enter Your Department:</label>
  <input type="text" id="dept name" name="dept name">
  <br>
  <br>
  <label for="aboutYourself">Tell Us a little about yourself:</label>
  <textarea rows="5" cols="60" name="description"></textarea>
<br>
<br>
<p>Do you exercise at home?</p>
<input type="radio">yes
<input type="radio">no
<br>
<br>
<p>How do you like to read about your favorite topics?</p>
<input type="checkbox">Books
<input type="checkbox">Online Resource
<input type="checkbox">Phone Apps
<input type="checkbox">Magazines
<br>
<br>
<label form="movies">What genre of movies do you like?</label>
<select name="movies" id="movies">
<option value="comedy">Comedy</option>
<option value="comedy">Horror</option>
<option value="comedy">Thriller</option>
<option value="comedy">Adventure</option>
</select>
<br>
<br>
<input type="submit" values="Submit Forms">

  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   name="Bruce";
}
