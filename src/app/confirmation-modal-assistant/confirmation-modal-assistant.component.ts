import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationModalCommercialComponent } from '../confirmation-modal-commercial/confirmation-modal-commercial.component';

@Component({
  selector: 'app-confirmation-modal-assistant',
  templateUrl: './confirmation-modal-assistant.component.html',
  styleUrls: ['./confirmation-modal-assistant.component.css']
})
export class ConfirmationModalAssistantComponent  {

  constructor(public dialogRef: MatDialogRef<ConfirmationModalCommercialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { assistantName: string }

  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }


}
