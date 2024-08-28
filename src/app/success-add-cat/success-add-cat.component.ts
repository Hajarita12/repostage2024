import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuccessModalAddcomComponent } from '../success-modal-addcom/success-modal-addcom.component';

@Component({
  selector: 'app-success-add-cat',
  templateUrl: './success-add-cat.component.html',
  styleUrls: ['./success-add-cat.component.css']
})
export class SuccessAddCatComponent  {

  
  @Input() message: string = '';

  showModal: boolean = false;
  constructor( public dialogRef: MatDialogRef<SuccessAddCatComponent>,
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
