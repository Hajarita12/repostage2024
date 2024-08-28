import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-chart-articles-vendus',
  templateUrl: './chart-articles-vendus.component.html',
  styleUrls: ['./chart-articles-vendus.component.css']
})
export class ChartArticlesVendusComponent implements OnInit {

  public chart: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getArticleQuantities().subscribe(data => {
      this.createChart(data.labels, data.values);
    });
  }

  createChart(labels: string[], values: number[]): void {
    const colors = this.generateColors(values.length);

    this.chart = new Chart('chartCanvas', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Articles Vendus',
          data: values,
          backgroundColor: colors, // Couleurs dynamiques pour chaque barre
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Articles'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Quantité'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem: any) {
              return tooltipItem.yLabel.toLocaleString('fr-FR') + ' unités';
            }
          }
        },
        legend: {
          display: false // Désactiver la légende
        },
        title: {
          display: true, // Afficher le titre
          text: 'La quantité des Articles vendus', // Texte du titre global
          fontSize: 24, // Taille de la police du titre
          fontStyle: 'bold', // Poids de la police du titre
          fontColor: '#333' // Couleur du titre
        }
      }
    });
  }

  generateColors(length: number): string[] {
    const colors = [
      '#491a9a', '#df8be3', '#d51675', '#640f5a', '#c824b5',
      '#46BF91', '#FDB45C', '#949FB1', '#4D5360', '#f54291'
    ];

    // Répéter les couleurs si la taille dépasse le nombre de couleurs définies
    return Array.from({ length }, (_, i) => colors[i % colors.length]);
  }
}
