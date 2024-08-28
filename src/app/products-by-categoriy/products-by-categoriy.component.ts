import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-products-by-categoriy',
  templateUrl: './products-by-categoriy.component.html',
  styleUrls: ['./products-by-categoriy.component.css']
})
export class ProductsByCategoriyComponent implements OnInit {
  articles: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<ProductsByCategoriyComponent>,
    private adminService: AdminService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.adminService.getProductsByCategory(this.data.categorieName).subscribe(
      (data: any[]) => {
        this.articles = data;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des produits', error);
      }
    );
  }
  getImageData(article: any): string {
    if (!article || !article.image) {
      return ''; // Retourne une chaîne vide si aucune image n'est disponible
    }
  
    let imageType = this.getImageType(article.image);
  
    if (imageType !== '') {
      return `data:image/${imageType};base64,${article.image}`;
    } else {
      return '';
    }
  }
  calculateQuantity(article:any){
    let qte=article.qteEnStock - article.qteReservee;
    return qte;

  }
  getImageType(imageData: string): string {
    let type = '';
    if (imageData.startsWith('/9j/')) {
      type = 'jpeg';
    } else if (imageData.startsWith('iVBORw0KGgoAAAANSUhEUgAA')) {
      type = 'png';
    } else if (imageData.startsWith('R0lGOD')) {
      type = 'gif';
    } else {
      type = 'jpeg'; // Valeur par défaut si le type n'est pas détecté correctement
    }
    return type;
  }
  onClose(){
    this.dialogRef.close();

  }

}
