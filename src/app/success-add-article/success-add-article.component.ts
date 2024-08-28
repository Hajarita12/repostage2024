import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuccessAddCatComponent } from '../success-add-cat/success-add-cat.component';

@Component({
  selector: 'app-success-add-article',
  templateUrl: './success-add-article.component.html',
  styleUrls: ['./success-add-article.component.css']
})
export class SuccessAddArticleComponent  {

   
  @Input() message: string = '';

  showModal: boolean = false;
  constructor( public dialogRef: MatDialogRef<SuccessAddArticleComponent>,
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
