import { Component, Inject } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SuccessModalEditComComponent } from '../success-modal-edit-com/success-modal-edit-com.component';

@Component({
  selector: 'app-edit-commercial-modal',
  templateUrl: './edit-commercial-modal.component.html',
  styleUrls: ['./edit-commercial-modal.component.css']
})
export class EditCommercialModalComponent {

  commercial: any;
  selectedFile: File | null = null;
  droitsArray: string[] = [];

  constructor(
    private adminService: AdminService,
    public dialogRef: MatDialogRef<EditCommercialModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogg: MatDialog
  ) {
    this.commercial = { ...data.commercial };
    // Initialize droitsArray from the string
    this.droitsArray = this.commercial.droits ? this.commercial.droits.split(',') : [];
  }

  onSubmit(): void {
    if (this.commercial) {
      // Convert droitsArray back to a comma-separated string
      this.commercial.droits = this.droitsArray.join(',');

      // Handle image upload, if any
      if (this.selectedFile) {
        this.convertToBase64(this.selectedFile);
      }

      console.log("Commercial Envoyé :", this.commercial);
      this.adminService.updateCommercial(this.commercial.id, this.commercial).subscribe(
        (response) => {
          this.onConfirm();
          this.openSuccessModal();
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du commercial', error);
        }
      );
    }
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  openSuccessModal(): void {
    const dialogRef = this.dialogg.open(SuccessModalEditComComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '80vh',
      panelClass: 'custom-success-modal',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        // Any action after the modal is closed
      }
    });
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
        this.commercial.image = base64String;
      }
    };
    reader.readAsDataURL(file);
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
