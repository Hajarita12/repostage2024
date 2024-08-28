import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-performance-commerciaux',
  templateUrl: './performance-commerciaux.component.html',
  styleUrls: ['./performance-commerciaux.component.css']
})
export class PerformanceCommerciauxComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadPerformanceData();
  }

  loadPerformanceData(): void {
    this.adminService.getPerformanceData().subscribe(data => {
      console.log(data); // Vérifiez ici la structure de `data`
      if (data && data.performance && typeof data.performance === 'object') {
        this.renderChart(data.performance);
      } else {
        console.error('Invalid data format', data);
      }
    }, error => {
      console.error('Error loading performance data', error);
    });
  }
  

  renderChart(performanceData: { [key: string]: number }): void {
    const chart = echarts.init(document.getElementById('performance-chart') as HTMLElement);

    const categories = Object.keys(performanceData);
    const values = Object.values(performanceData);

    const option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: categories,
        axisLabel: {
          rotate: 45 // Rotation des étiquettes pour une meilleure lisibilité
        }
      },
      yAxis: {
        type: 'value',
        name: 'Nombre de devis'
      },
      series: [{
        data: values,
        type: 'bar',
        itemStyle: {
          color: '#5a4b6b'
        }
      }]
    };

    chart.setOption(option);
  }
}
