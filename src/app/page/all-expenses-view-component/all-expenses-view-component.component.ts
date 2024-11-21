import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../SharedService';

@Component({
  selector: 'app-all-expenses-view-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './all-expenses-view-component.component.html',
  styleUrl: './all-expenses-view-component.component.css'
})
export class AllExpensesViewComponentComponent {

  constructor(private http:HttpClient, private sharedService: SharedService){
    this.loadTable();  
  }
    public expenses:any = [];


  public expenseTemp:any={}
  editExpense(expense:any){
      console.log(expense);
      this.expenseTemp=expense;
      
  }

  saveExpense(){
      this.http.put("http://localhost:8080/expense/update-expense",this.expenseTemp).subscribe(data=>{
        alert("expense Updated!!!!!")
      },
      error => {
        console.error("Error updating expense", error);
        alert("Failed to update expense.");
    }
    )
 }

  deleteExpense(id:any){
    console.log(id);
    
    this.http.delete(`http://localhost:8080/expense/delete-by-id/${id}`).subscribe(data=>{
      alert("expense deleted !!!!");
      this.loadTable();
    })
    
}

  loadTable(){
    this.http.get(`http://localhost:8080/expense/get-all/${this.sharedService.getUsername()}`).subscribe(data=>{
      console.log(data);
      this.expenses=data;
      
    })
  }
}
