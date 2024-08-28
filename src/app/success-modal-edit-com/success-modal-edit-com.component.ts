import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuccessModalAddcomComponent } from '../success-modal-addcom/success-modal-addcom.component';

@Component({
  selector: 'app-success-modal-edit-com',
  templateUrl: './success-modal-edit-com.component.html',
  styleUrls: ['./success-modal-edit-com.component.css']
})
export class SuccessModalEditComComponent {

  
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
