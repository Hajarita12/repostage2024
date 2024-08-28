import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { SuccessAddArticleComponent } from '../success-add-article/success-add-article.component';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  article: any = {
    reference: null,
    designation: '',
    prixUnitaire: 0,
    prixAchat: 0,
    image: null,
    pvp: 0,
    qteEnStock: 0,
    qteCommandee: 0,
    qteReservee: 0,
    categorie: {
      id: null,
      name: ''
    }
  };
  categorieId: any = '';  // Initialize to empty string to select the default option
  selectedFile: File | null = null;
  showModal: boolean = false;
  categories: any[] = [];

  constructor(private adminService: AdminService, public dialogRef: MatDialogRef<AddArticleComponent>,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.adminService.getCategories().subscribe(
      (response: any) => {
        this.categories = response;
      },
      (error: any) => {
        console.error('Error loading categories', error);
      }
    );
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.convertToBase64(this.selectedFile);
    }
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result?.toString().split(',')[1]; // Exclure les métadonnées
      if (base64String) {
        this.article.image = base64String;
      }
    };
    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    if (this.categorieId) {
      this.adminService.getCategorieById(this.categorieId).subscribe(
        (response: any) => {
          this.article.categorie = response;

          this.adminService.addArticle(this.article).subscribe(
            (response: any) => {
              console.log('Article ajouté avec succès', response);
              this.onConfirm();
              this.showModal = true;
              const dialogRef = this.dialog.open(SuccessAddArticleComponent, {
                width: '400px',
                height: 'auto',
                maxHeight: '80vh'
              });
              

              // Réinitialiser le formulaire après l'ajout
              this.resetForm();
            },
            (error: any) => {
              console.error('Error adding article', error);
            }
          );
        },
        (error: any) => {
          console.error('Error loading category', error);
        }
      );
    } else {
      console.error('Aucune catégorie sélectionnée');
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  resetForm(): void {
    this.article = {
      reference: null,
      designation: '',
      prixUnitaire: 0,
      prixAchat: 0,
      image: null,
      pvp: 0,
      qteEnStock: 0,
      qteCommandee: 0,
      qteReservee: 0,
      categorie: {
        id: null,
        name: ''
      }
    };
    this.selectedFile = null;
  }

  hideModal(): void {
    this.showModal = false;
  }
}
