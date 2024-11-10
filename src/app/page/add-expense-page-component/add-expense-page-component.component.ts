import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense-page-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-expense-page-component.component.html',
  styleUrl: './add-expense-page-component.component.css'
})
export class AddExpensePageComponentComponent {

  constructor(private http:HttpClient, private router: Router){}
  
  public expense:any={
      description: "",
      type: "",
      date: "",
      amount:""
  }

  public addExpense(){
    this.http.post("http://localhost:8080/expense/add-expense",this.expense).subscribe((data)=>{
      alert("expense Added!!!!");
      this.expense = {
        description: "",
        type: "",
        date: "",
        amount: ""
      };
  })
  }
}
