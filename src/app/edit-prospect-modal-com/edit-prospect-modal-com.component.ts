import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../services/admin.service';
import { SuccessModalEditProspectComponent } from '../success-modal-edit-prospect/success-modal-edit-prospect.component';

@Component({
  selector: 'app-edit-prospect-modal-com',
  templateUrl: './edit-prospect-modal-com.component.html',
  styleUrls: ['./edit-prospect-modal-com.component.css']
})
export class EditProspectModalComComponent {

  constructor(
    public dialogRef: MatDialogRef<EditProspectModalComComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService ,
    public dialogg: MatDialog

  ) {}

  saveChanges(): void {
    if (this.data.prospect) {
      console.log("prospect to update :",this.data.prospect);
      this.adminService.updateProspect(this.data.prospect.id,this.data.prospect).subscribe(
        () => {
          this.onConfirm();
          this.openSuccessModal();        },
        (error: any) => {
          console.error('Erreur lors de la modification du prospect', error);
        }
      );
    }
  }
  onConfirm(): void {
    this.dialogRef.close(true);
  }
  openSuccessModal(): void {
    const dialogRef = this.dialogg.open(SuccessModalEditProspectComponent, {
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
  onCancel(): void {
    this.dialogRef.close(); // Ferme le modal sans modification
  }
}
