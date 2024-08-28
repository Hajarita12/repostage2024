import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal-devis',
  templateUrl: './confirmation-modal-devis.component.html',
  styleUrls: ['./confirmation-modal-devis.component.css']
})
export class ConfirmationModalDevisComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationModalDevisComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
