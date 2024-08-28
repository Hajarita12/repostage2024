import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SuccessAddCatComponent } from '../success-add-cat/success-add-cat.component';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent {
  categorie : any = {
    name: '',
    image: null
  };

  selectedFile: File | null = null;

  constructor(private adminService: AdminService, private router: Router,public dialogRef: MatDialogRef<AddCategorieComponent>,public dialog: MatDialog) {}

  onSubmit(): void {
    this.adminService.createCategorie(this.categorie).subscribe(
      (      response: any) => {
        console.log('Catégorie ajoutée avec succès', response);
      this.onConfirm();
      const dialogRef = this.dialog.open(SuccessAddCatComponent, {
        width: '400px',
        height: 'auto',
        maxHeight: '80vh'
      });
      
      },
      (      error: any) => {
        console.error('Erreur lors de l\'ajout de la catégorie', error);
      }
    );
  }
  onConfirm(): void {
    this.dialogRef.close(true);
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
      const base64String = reader.result?.toString().split(',')[1]; // Exclure les métadonnées
      if (base64String) {
        this.categorie.image = base64String;
      }
    };
    reader.readAsDataURL(file);
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
