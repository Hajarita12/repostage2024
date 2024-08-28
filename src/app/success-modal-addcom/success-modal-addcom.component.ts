import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-modal-addcom',
  templateUrl: './success-modal-addcom.component.html',
  styleUrls: ['./success-modal-addcom.component.css']
})
export class SuccessModalAddcomComponent  {

  @Input() message: string = '';

  showModal: boolean = false;
  constructor( public dialogRef: MatDialogRef<SuccessModalAddcomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

  show(message: string) {
    this.message = message;
    this.showModal = true;
    setTimeout(() => {
      this.showModal = false;
    }, 3000); // Modal will be visible for 3 seconds
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
