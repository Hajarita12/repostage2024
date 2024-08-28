import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-error-quantity-article',
  templateUrl: './modal-error-quantity-article.component.html',
  styleUrls: ['./modal-error-quantity-article.component.css']
})
export class ModalErrorQuantityArticleComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalErrorQuantityArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
