import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuccessModalAddcomComponent } from '../success-modal-addcom/success-modal-addcom.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucess-modal-set-com',
  templateUrl: './sucess-modal-set-com.component.html',
  styleUrls: ['./sucess-modal-set-com.component.css']
})
export class SucessModalSetComComponent  {

  @Input() message: string = '';

  showModal: boolean = false;
  constructor( public dialogRef: MatDialogRef<SucessModalSetComComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private router:Router,
  ){}

  show(message: string) {
    this.message = message;
    this.showModal = true;
    setTimeout(() => {
      this.showModal = false;
    }, 3000); // Modal will be visible for 3 seconds
  }
  closeDialog(): void {
    this.dialogRef.close();
    this.router.navigate(['/espace-final-commercial']);
  }


}
