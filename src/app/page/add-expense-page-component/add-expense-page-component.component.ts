import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../SharedService';

@Component({
  selector: 'app-add-expense-page-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-expense-page-component.component.html',
  styleUrl: './add-expense-page-component.component.css'
})
export class AddExpensePageComponentComponent implements OnInit{

  public expense:any;
  public username:any;

  constructor(private http:HttpClient, private router: Router, private sharedService: SharedService){}

  ngOnInit() {
    this.expense = {
        username: this.sharedService.getUsername(),
        description: "",
        type: "",
        date: "",
        amount: ""
    };
    console.log('Initialized expense:', this.expense);
    this.username=this.sharedService.getUsername();
}

  public addExpense(){
    console.log('Sending expense:', this.expense);
    this.http.post("http://localhost:8080/expense/add-expense",this.expense).subscribe((data)=>{
      alert("expense Added!!!!");
      this.expense = {
        username: this.username,
        description: "",
        type: "",
        date: "",
        amount: ""
      };
      console.log('Expense user:', this.expense.user);

  })
  }
}


