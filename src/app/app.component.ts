import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./common/nav-bar/nav-bar.component";
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { HomeComponent } from './page/home/home.component';
import { AddExpensePageComponentComponent } from './page/add-expense-page-component/add-expense-page-component.component';
import { AllExpensesViewComponentComponent } from './page/all-expenses-view-component/all-expenses-view-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent,LoginComponent,SignupComponent,HomeComponent,AddExpensePageComponentComponent,AllExpensesViewComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customer-manage-front-end';
}
