import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal-article',
  templateUrl: './confirmation-modal-article.component.html',
  styleUrls: ['./confirmation-modal-article.component.css']
})
export class ConfirmationModalArticleComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationModalArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { articleName: string }

  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}
