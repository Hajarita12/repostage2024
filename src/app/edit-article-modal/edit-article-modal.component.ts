import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AdminService } from '../services/admin.service';
import { SuccessEditArticleComponent } from '../success-edit-article/success-edit-article.component';

@Component({
  selector: 'app-edit-article-modal',
  templateUrl: './edit-article-modal.component.html',
  styleUrls: ['./edit-article-modal.component.css']
})
export class EditArticleModalComponent implements OnInit {
  selectedFile: any;
  categories: any[] = [];
  categorieId: any;
  article: any;

  constructor(private adminService: AdminService,
              public dialogRef: MatDialogRef<EditArticleModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialog) {
    this.article = this.data.article;
  }

  ngOnInit(): void {
    this.loadCategories();
    this.categorieId = this.article.categorie ? this.article.categorie.id : null;
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

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  saveArticle(): void {
    if (this.categorieId) {
      this.adminService.getCategorieById(this.categorieId).subscribe(
        (response: any) => {
          this.article.categorie = response;
          console.log("nvelle actegorie :",response);
          console.log("nouv article to update :",this.article);

  
          this.adminService.updateArticle(this.article.reference, this.article).subscribe(
            (response: any) => {  
            console.log(response);            
            this.onConfirm();
            const dialogRef = this.dialog.open(SuccessEditArticleComponent, {
              width: '400px',
              height: 'auto',
              maxHeight: '80vh'
            });
            
            },
            (error: any) => {
              console.error('Error updating article', error);
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
  

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.convertToBase64(this.selectedFile);
    }
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result?.toString().split(',')[1]; // Exclude metadata
      if (base64String) {
        this.article.image = base64String;
      }
    };
    reader.readAsDataURL(file);
  }

  close(): void {
    this.dialogRef.close();
  }
}
