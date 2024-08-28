import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-devis-details',
  templateUrl: './modal-devis-details.component.html',
  styleUrls: ['./modal-devis-details.component.css']
})
export class ModalDevisDetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalDevisDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
