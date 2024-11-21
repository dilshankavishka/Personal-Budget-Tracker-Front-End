import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartDataset, registerables } from 'chart.js';

interface Income {
  month: string;
  totalAmount: number;
}

interface CategoryIncome {
  month: string;
  totalAmount: number;
}

@Component({
  selector: 'app-income-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './income-graph.component.html',
  styleUrl: './income-graph.component.css'
})
export class IncomeGraphComponent implements OnInit{
  @ViewChild('barChart', { static: true })
  barChart!: ElementRef<HTMLCanvasElement>;
  public chart!: Chart;
  public barChartLabels: string[] = [];
  public barChartData: ChartDataset[] = [];
  public categoryData: CategoryIncome[] = [];
  public totalForCurrentMonth: number = 0;

  constructor(private http: HttpClient) {
    Chart.register(...registerables)
  }
  ngOnInit(): void {
    this.fetchMonthlyIncome();
    this.fetchCategoryIncome();
  }
  ngAfterViewInit(): void {
    this.initChart();
  }
  fetchMonthlyIncome() {
    this.http.get<Income[]>('http://localhost:8080/income/monthly-incomes').subscribe((data) => {
      this.barChartLabels = data.map((item) => item.month);
      this.barChartData = [
        {
          data: data.map((item) => item.totalAmount),
          label: 'Monthly Income (LKR)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ];
      this.updateChart();
    });
  }
  fetchCategoryIncome() {
    this.http
      .get<CategoryIncome[]>('http://localhost:8080/income/current-month-category-incomes')
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
            title: { display: true, text: 'Total Income (LKR)' },
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
