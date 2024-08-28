import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-categorie-chart',
  templateUrl: './categorie-chart.component.html',
  styleUrls: ['./categorie-chart.component.css']
})
export class CategorieChartComponent implements OnInit {
  public chart: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadCategoryData();
  }

  loadCategoryData(): void {
    this.adminService.getCategoryData().subscribe(data => {
      console.log(data); // Vérifiez la structure des données reçues
      if (data && data.categories && Array.isArray(data.categories)) {
        this.renderChart(data.categories);
      } else {
        console.error('Invalid data format', data);
      }
    }, error => {
      console.error('Error loading category data', error);
    });
  }

  renderChart(categories: { name: string, productCount: number }[]): void {
    const labels = categories.map(category => category.name);
    const data = categories.map(category => category.productCount);

    if (this.chart) {
      this.chart.destroy(); // Détruire le graphique précédent s'il existe
    }

    this.chart = new Chart('categorie-chart', {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Répartition des Produits par Catégorie',
          data: data,
          backgroundColor: [
            '#491a9a',
            '#df8be3',
            '#d51675',
            '#640f5a',
            '#c824b5',
            '#46BF91',
            '#FDB45C',
            '#949FB1',
            '#4D5360',
          ],
          hoverBackgroundColor: [
            '#491a9a',
            '#df8be3',
            '#d51675',
            '#640f5a',
            '#c824b5',
            '#46BF91',
            '#FDB45C',
            '#949FB1',
            '#4D5360',
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem: any) {
                const total = data.reduce((a, b) => a + b, 0);
                const percentage = (tooltipItem.raw / total * 100).toFixed(2);
                return `${tooltipItem.label}: ${tooltipItem.raw} produits (${percentage}%)`;
              }
            }
          }
        }
      }
    });
  }
}
