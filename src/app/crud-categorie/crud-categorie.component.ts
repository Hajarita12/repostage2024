import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../services/admin.service';
import { AddCategorieComponent } from '../add-categorie/add-categorie.component';
import { EditCategorieComponent } from '../edit-categorie/edit-categorie.component';
import { ConfirmationModalCategorieComponent } from '../confirmation-modal-categorie/confirmation-modal-categorie.component';
import { ProductsByCategoriyComponent } from '../products-by-categoriy/products-by-categoriy.component';

@Component({
  selector: 'app-crud-categorie',
  templateUrl: './crud-categorie.component.html',
  styleUrls: ['./crud-categorie.component.css']
})
export class CrudCategorieComponent implements OnInit {
  categories: any[] = [];
  filteredCategories: any[] = [];
  searchTerm: string = '';

  constructor(private adminService: AdminService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.adminService.getCategories().subscribe(
      (data: any[]) => {
        this.categories = data;
        this.filteredCategories = data;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des catégories', error);
      }
    );
  }

  filterCategories(): void {
    if (!this.searchTerm) {
      this.filteredCategories = this.categories;
    } else {
      this.filteredCategories = this.categories.filter(categorie =>
        categorie.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddCategorieComponent,{
      width: '600px',
      height: 'auto',
      maxHeight: '80vh',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCategories();
      }
    });
  }
  getImageData(categorie: any): string {
    if (!categorie || !categorie.image) {
      return ''; // Retourne une chaîne vide si aucune image n'est disponible
    }
  
    let imageType = this.getImageType(categorie.image);
  
    if (imageType !== '') {
      return `data:image/${imageType};base64,${categorie.image}`;
    } else {
      return '';
    }
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

  editCategorie(categorie: any): void {
    const dialogRef = this.dialog.open(EditCategorieComponent, {
      width: '600px',
      height: 'auto',
      maxHeight: '80vh',
      panelClass: 'custom-dialog-container',

      data: { categorie: categorie }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCategories();
      }
    });
  }

  deleteCategorie(categorie: any): void {
    const dialogRef = this.dialog.open(ConfirmationModalCategorieComponent, {
      width: '500px',
      data: { categorieName: categorie.name  }

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
    this.adminService.deleteCategorie(categorie.id).subscribe(
      () => {
        this.loadCategories();
      },
      (error: any) => {
        console.error('Erreur lors de la suppression de la catégorie', error);
      }
    );
  }
    });

  }
  viewProducts(categorie: any): void {
    const dialogRef = this.dialog.open(ProductsByCategoriyComponent, {
      width: '700px',
      height: 'auto',
      maxHeight: '80vh',
      panelClass: 'custom-dialog-container',

      data: { categorieId: categorie.id, categorieName: categorie.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Optionally, you can refresh the categories or handle the result
      }
    });
  }
}
