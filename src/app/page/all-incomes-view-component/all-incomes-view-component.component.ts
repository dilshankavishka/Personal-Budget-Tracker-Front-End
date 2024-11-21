import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../SharedService';

@Component({
  selector: 'app-all-incomes-view-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './all-incomes-view-component.component.html',
  styleUrl: './all-incomes-view-component.component.css'
})
export class AllIncomesViewComponentComponent {
 
  public incomes:any = [];

  constructor(private http:HttpClient, private sharedService: SharedService){
    this.loadTable();  
  }

  public incomeTemp:any={}
  editIncome(income:any){
      console.log(income);
      this.incomeTemp=income;
      
  }

  saveIncome(){
    this.http.put("http://localhost:8080/income/update-income",this.incomeTemp).subscribe(data=>{
      alert("Income Updated!!!!!")
    },
    error => {
      console.error("Error updating income", error);
      alert("Failed to update Income.");
  }
  )
}

deleteIncome(id:any){
  console.log(id);
  
  this.http.delete(`http://localhost:8080/income/delete-by-id/${id}`).subscribe(data=>{
    alert("Income deleted !!!!");
    this.loadTable();
  })
  
}

loadTable(){
  this.http.get(`http://localhost:8080/income/get-all/${this.sharedService.getUsername()}`).subscribe(data=>{
    console.log(data);
    this.incomes=data;
    
  })
}
}
