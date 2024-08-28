import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartTooltipItem } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-article-pourcentage-devis',
  templateUrl: './article-pourcentage-devis.component.html',
  styleUrls: ['./article-pourcentage-devis.component.css']
})
export class ArticlePourcentageDevisComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Dominance des Articles dans les Commandes',
      fontSize: 16
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem: ChartTooltipItem, data: any) => {
          const datasetIndex = tooltipItem.datasetIndex ?? 0;
          const index = tooltipItem.index ?? 0;

          if (data.datasets && data.datasets[datasetIndex]) {
            const dataset = data.datasets[datasetIndex];
            const value = dataset.data[index];
            return data.labels && data.labels[index] ? `${data.labels[index]}: ${value.toFixed(2)}%` : `${value.toFixed(2)}%`;
          }
          return '';
        }
      }
    }
  };

  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors: Color[] = [
    {
      backgroundColor: [
        '#6a1b9a', // Violet
        '#d5a6e0', // Mauve pâle
        '#ff69b4', // Rose vif
        '#4a90e2', // Bleu clair
        '#1abc9c', // Turquoise
        '#e74c3c', // Rouge corail
        '#bdc3c7', // Gris clair
        '#f57c00', // Orange brûlé
        '#f5f5dc', // Beige clair
        '#e6e6fa'  // Lavande
      ]
    }
  ];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getArticlesPresence().subscribe((data: { labels: Label[]; values: SingleDataSet; }) => {
      this.pieChartLabels = data.labels;
      this.pieChartData = data.values;
    });
  }
}
