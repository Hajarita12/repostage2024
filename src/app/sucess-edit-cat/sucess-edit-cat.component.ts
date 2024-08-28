import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sucess-edit-cat',
  templateUrl: './sucess-edit-cat.component.html',
  styleUrls: ['./sucess-edit-cat.component.css']
})
export class SucessEditCatComponent  {

  
  @Input() message: string = '';

  showModal: boolean = false;
  constructor( public dialogRef: MatDialogRef<SucessEditCatComponent>,
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
