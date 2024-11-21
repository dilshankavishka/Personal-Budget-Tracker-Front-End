import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../SharedService';

@Component({
  selector: 'app-add-income-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-income-component.component.html',
  styleUrl: './add-income-component.component.css'
})
export class AddIncomeComponentComponent implements OnInit{

  public income:any;
  public username:any;

  constructor(private http:HttpClient, private router: Router, private sharedService: SharedService){}
  
  ngOnInit() {
    this.income = {
      username: this.sharedService.getUsername(),
      description: "",
      type: "",
      date: "",
      amount: ""
  };
  console.log('Initialized income:', this.income);
  this.username=this.sharedService.getUsername();
  }

  public addIncome(){
    console.log('Sending income:', this.income);
    this.http.post("http://localhost:8080/income/add-income",this.income).subscribe((data)=>{
      alert("income Added!!!!");
      this.income = {
        username: this.username,
        description: "",
        type: "",
        date: "",
        amount: ""
      };
      console.log('Income user:', this.income.user);

  })
  }
}
