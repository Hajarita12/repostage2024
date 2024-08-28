import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuccessModalComponent } from '../success-modal/success-modal.component';

@Component({
  selector: 'app-modal-add-assistant',
  templateUrl: './modal-add-assistant.component.html',
  styleUrls: ['./modal-add-assistant.component.css']
})
export class ModalAddAssistantComponent  {

  constructor(
    public dialogRef: MatDialogRef<SuccessModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
