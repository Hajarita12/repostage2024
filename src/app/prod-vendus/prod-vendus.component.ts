import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-prod-vendus',
  templateUrl: './prod-vendus.component.html',
  styleUrls: ['./prod-vendus.component.css']
})
export class ProdVendusComponent implements OnInit {

  public monthlySalesData: ChartDataSets[] = [{ data: [], label: 'Ventes Mensuelles' }];
  public monthlySalesLabels: Label[] = [];
  public salesChartOptions: ChartOptions = {
    responsive: true,
    animation: {
      duration: 1000, // Durée de l'animation en millisecondes
      easing: 'easeInOutQuad' // Type d'animation
    },
    elements: {
      line: {
        tension: 0.4, // Courbure des lignes
        borderWidth: 2, // Épaisseur des lignes
      },
      point: {
        radius: 6, // Taille des points
        hoverRadius: 8, // Taille des points au survol
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context: { dataset: { label: string; }; raw: { toLocaleString: (arg0: string, arg1: { style: string; currency: string; }) => string; }; }) {
            return context.dataset.label + ': ' + context.raw.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
          }
        }
      }
    }
  };
  public salesChartColors: Color[] = [{ borderColor: '#6a1b9a', backgroundColor: 'rgba(106, 27, 154, 0.2)' }];
  public salesChartLegend = true;
  public salesChartPlugins = [];
  public salesChartType: ChartType = 'line';

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getMonthlySales().subscribe(data => {
      this.monthlySalesLabels = data.labels;
      this.monthlySalesData[0].data = data.values;
    });
  }
}
