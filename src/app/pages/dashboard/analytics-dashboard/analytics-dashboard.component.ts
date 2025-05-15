import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexResponsive, ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.scss']
})
export class AnalyticsDashboardComponent implements OnInit {
  // Participation Rate Chart
  participationChartOptions: ApexOptions = {
    chart: {
      type: 'donut',
      height: 350
    },
    series: [75],
    labels: ['Taux de participation'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  // Satisfaction Scores Chart
  satisfactionChartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350
    },
    series: [{
      name: 'Satisfaction',
      data: [4.5, 4.2, 4.8, 4.0, 4.7]
    }],
    xaxis: {
      categories: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5']
    }
  };

  // Time Comparison Chart
  timeComparisonChartOptions: ApexOptions = {
    chart: {
      type: 'line',
      height: 350
    },
    series: [{
      name: 'Satisfaction',
      data: [4.2, 4.4, 4.6, 4.5, 4.7]
    }],
    xaxis: {
      categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai']
    }
  };

  // Filter options
  dateRange = {
    start: null,
    end: null
  };
  selectedForm = 'all';
  selectedUserSegment = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  applyFilters(): void {
    // Implement filter logic here
    console.log('Applying filters:', {
      dateRange: this.dateRange,
      form: this.selectedForm,
      userSegment: this.selectedUserSegment
    });
  }
}
