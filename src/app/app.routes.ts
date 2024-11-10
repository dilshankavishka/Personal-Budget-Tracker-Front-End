import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { AddExpensePageComponentComponent } from './page/add-expense-page-component/add-expense-page-component.component';
import { AllExpensesViewComponentComponent } from './page/all-expenses-view-component/all-expenses-view-component.component';

export const routes: Routes = [
    {
        path: "",
        component:HomeComponent
    },
    {
        path: "login",
        component:LoginComponent
    },
    {
        path: "signup",
        component:SignupComponent
    },
    {
        path: "add-expense",
        component:AddExpensePageComponentComponent
    },
    {
        path: "all-expenses",
        component:AllExpensesViewComponentComponent
    }
];
