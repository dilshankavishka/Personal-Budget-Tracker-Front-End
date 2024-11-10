import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private http: HttpClient, private router: Router){}

  public user = {
    username: "",
    password: "",
    repeatPassword: ""
  };

  public signUp() {
    // Check if username already exists
    this.http.get<any>(`http://localhost:8080/user/search-by-username/${this.user.username}`).subscribe(
      (existingUser) => {
        if (existingUser) {
          alert("Username already exists. Please choose another one.");
        } else if (this.user.password.length < 8) {
          alert("Password must be at least 8 characters long.");
        } else if (this.user.password !== this.user.repeatPassword) {
          alert("Passwords do not match. Please try again.");
        } else {
          // Proceed with signup if username is unique and passwords match
          const newUser = { username: this.user.username, password: this.user.password };
          this.http.post(`http://localhost:8080/user/add-user`, newUser).subscribe(
            () => {
              alert("Sign up successful!");
              this.router.navigate(['/login']); // Redirect to login page after signup
            },
            (error) => {
              console.error("Error during signup:", error);
              alert("An error occurred. Please try again later.");
            }
          );
        }
      },
      (error) => {
        console.error("Error checking username:", error);
        alert("An error occurred while checking username. Please try again.");
      }
    );
  }
}
