import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
 import { Chart, ChartOptions, ChartType, ChartData, ChartDataset, registerables } from 'chart.js';

interface Expense {
  month: string;
  totalAmount: number;
}

interface CategoryExpense {
  month: string;
  totalAmount: number;
}

@Component({
  selector: 'app-expense-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-graph.component.html',
  styleUrl: './expense-graph.component.css',
})
export class ExpenseGraphComponent implements OnInit {
  @ViewChild('barChart', { static: true })
  barChart!: ElementRef<HTMLCanvasElement>;
  public chart!: Chart;
  public barChartLabels: string[] = [];
  public barChartData: ChartDataset[] = [];
  public categoryData: CategoryExpense[] = [];
  public totalForCurrentMonth: number = 0;

  constructor(private http: HttpClient) {
    Chart.register(...registerables)
  }
  ngOnInit(): void {
    this.fetchMonthlyExpenses();
    this.fetchCategoryExpenses();
  }
  ngAfterViewInit(): void {
    this.initChart();
  }
  fetchMonthlyExpenses() {
    this.http.get<Expense[]>('http://localhost:8080/expense/monthly-expenses').subscribe((data) => {
      this.barChartLabels = data.map((item) => item.month);
      this.barChartData = [
        {
          data: data.map((item) => item.totalAmount),
          label: 'Monthly Expenses (LKR)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ];
      this.updateChart();
    });
  }
  fetchCategoryExpenses() {
    this.http
      .get<CategoryExpense[]>('http://localhost:8080/expense/current-month-category-expenses')
      .subscribe((data) => {
        this.categoryData = data;
        this.totalForCurrentMonth = data.reduce(
          (sum, item) => sum + item.totalAmount,
          0
        );
      });
  }
  initChart() {
    this.chart = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: { labels: this.barChartLabels, datasets: this.barChartData },
      options: {
        responsive: true,
        scales: {
          x: { title: { display: true, text: 'Months' } },
          y: {
            title: { display: true, text: 'Total Expenses (LKR)' },
            beginAtZero: true,
          },
        },
        plugins: { legend: { display: true } },
      },
    });
  }
  updateChart() {
    if (this.chart) {
      this.chart.data.labels = this.barChartLabels;
      this.chart.data.datasets = this.barChartData;
      this.chart.update();
    }
  }
}
