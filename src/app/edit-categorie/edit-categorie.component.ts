import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AdminService } from '../services/admin.service';
import { SucessEditCatComponent } from '../sucess-edit-cat/sucess-edit-cat.component';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent {
  categorie: any;
  selectedFile: any;

  constructor(
    public dialogRef: MatDialogRef<EditCategorieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService,
    public dialog: MatDialog
  ) {
    this.categorie = { ...data.categorie }; // Copie les données pour ne pas modifier directement l'original
  }

  onCancel(): void {
    this.dialogRef.close();
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
        this.categorie.image = base64String;
      }
    };
    reader.readAsDataURL(file);
  }
  onSave(): void {
    this.adminService.updateCategorie(this.categorie.id,this.categorie).subscribe(() => {
      this.dialogRef.close(true);
      const dialogRef = this.dialog.open(SucessEditCatComponent, {
        width: '400px',
        height: 'auto',
        maxHeight: '80vh'
      });
    }, (error: any) => {
      console.error('Error updating category', error);
    });
  }
}
