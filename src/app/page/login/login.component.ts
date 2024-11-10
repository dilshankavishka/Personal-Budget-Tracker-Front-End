import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private http:HttpClient, private router: Router){}

  public usercheck:any = null;

  public user:any={
    username:"",
    password:"",
  };

  public login() {
    // Fetch users from the database
    this.http.get(`http://localhost:8080/user/search-by-username/${this.user.username}`).subscribe(data=>{
      this.usercheck=data;
      console.log(this.usercheck);

      if (this.usercheck && this.usercheck.password === this.user.password) {
        alert("Login successful!");
        this.router.navigate(['/all-expenses']);  // Replace '/all-expenses' with the desired route
      } else if (this.usercheck) {
        alert("Invalid password. Please try again.");
      } else {
        alert("User not found. Please check your username.");
      }
    },
    (error) => {
      console.error("Error fetching user data:", error);
      alert("An error occurred. Please try again later.");
    });

  }
  
}
