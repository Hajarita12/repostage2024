import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EditCommercialModalComponent } from '../edit-commercial-modal/edit-commercial-modal.component';
import { AdminService } from '../services/admin.service';
import { SuccessModalEditAssComponent } from '../success-modal-edit-ass/success-modal-edit-ass.component';

@Component({
  selector: 'app-edit-assistant-modal',
  templateUrl: './edit-assistant-modal.component.html',
  styleUrls: ['./edit-assistant-modal.component.css']
})
export class EditAssistantModalComponent  {

  
  assistant: any;
  selectedFile: File | null = null;
  droitsArray: string[] = [];

  constructor(
    private adminService: AdminService,
    public dialogRef: MatDialogRef<EditAssistantModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogg: MatDialog

  ) {
    this.assistant = { ...data.assistant };
    this.droitsArray = this.assistant.droits ? this.assistant.droits.split(',') : [];

  }

  onSubmit(): void {
    if (this.assistant) {
      this.assistant.droits = this.droitsArray.join(',');

      console.log("assistant Envoyé :",this.assistant);
     this.adminService.updateAssistant(this.assistant.id,this.assistant).subscribe(
        (response) => {
          this.onConfirm();
          this.openSuccessModal();        },
        (error) => {
          console.error('Erreur lors de la mise à jour du commercial', error);
        }
      );
    }
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
      const base64String = reader.result?.toString().split(',')[1]; // Exclure les métadonnées
      if (base64String) {
        this.assistant.image = base64String;
      }
    };
    reader.readAsDataURL(file);
  }
  onConfirm(): void {
    this.dialogRef.close(true);
  }
  openSuccessModal(): void {
    const dialogRef = this.dialogg.open(SuccessModalEditAssComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '80vh',
      panelClass: 'custom-success-modal', // Classe CSS personnalisée pour le modal

      data: { } 
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
          
      }
    });
    
  }
  onDroitChange(droit: string, event: any): void {
    const isChecked = event.target.checked;
    const index = this.droitsArray.indexOf(droit);

    if (isChecked && index === -1) {
      this.droitsArray.push(droit);
    } else if (!isChecked && index !== -1) {
      this.droitsArray.splice(index, 1);
    }
  }
}
