import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal-categorie',
  templateUrl: './confirmation-modal-categorie.component.html',
  styleUrls: ['./confirmation-modal-categorie.component.css']
})
export class ConfirmationModalCategorieComponent  {

  
  constructor(public dialogRef: MatDialogRef<ConfirmationModalCategorieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { categorieName: string }

  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}
