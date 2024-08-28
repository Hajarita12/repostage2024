import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SucessModalSetComComponent } from '../sucess-modal-set-com/sucess-modal-set-com.component';

@Component({
  selector: 'app-sucess-modal-set-assis',
  templateUrl: './sucess-modal-set-assis.component.html',
  styleUrls: ['./sucess-modal-set-assis.component.css']
})
export class SucessModalSetAssisComponent  {
  
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
    this.router.navigate(['/assistant-sidebar']);
  }

 

}
