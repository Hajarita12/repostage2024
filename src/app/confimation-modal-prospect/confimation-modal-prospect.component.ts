import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confimation-modal-prospect',
  templateUrl: './confimation-modal-prospect.component.html',
  styleUrls: ['./confimation-modal-prospect.component.css']
})
export class ConfimationModalProspectComponent  {

  constructor(public dialogRef: MatDialogRef<ConfimationModalProspectComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}
