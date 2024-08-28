import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal-commercial',
  templateUrl: './confirmation-modal-commercial.component.html',
  styleUrls: ['./confirmation-modal-commercial.component.css']
})
export class ConfirmationModalCommercialComponent  {

  constructor(public dialogRef: MatDialogRef<ConfirmationModalCommercialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { commercialName: string }

  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }


}
