import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../services/admin.service';
import { NgForm } from '@angular/forms';
import { SuccessModalAddProspectComponent } from '../success-modal-add-prospect/success-modal-add-prospect.component';

@Component({
  selector: 'app-add-prospect-modal',
  templateUrl: './add-prospect-modal.component.html',
  styleUrls: ['./add-prospect-modal.component.css']
})
export class AddProspectModalComponent implements OnInit {
  showPopup = false;
  showErrorMessages = true;

  @ViewChild('prospectForm') prospectForm!: NgForm;

  prospect: any = {
    name: '',
    adresse: '',
    phone: '',
    email: '',
    identifiantClient: '',
    etat: 'En attente',
    commercial: {
      id: null,
      username: '',
      password: '',
      email: ''
    }
  };

  constructor(
    public dialogRef: MatDialogRef<AddProspectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService,
    public dialogg: MatDialog
  ) {
    if (data && data.commercial) {
      this.prospect.commercial.id = data.commercial.id;
      this.prospect.commercial.username = data.commercial.username;
      this.prospect.commercial.password = data.commercial.password;
      this.prospect.commercial.email = data.commercial.email;
    }
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('Form envoyé', this.prospect);
    this.adminService.addProspect(this.prospect).subscribe(
      (response: any) => {
        console.log('Prospect ajouté avec succès', response);
        this.showPopup = true;
        this.dialogRef.close(true); // Fermer le modal et envoyer un signal de succès
        this.openSuccessModal();
        setTimeout(() => {
          this.closePopup(true); // Passer true pour indiquer un succès
        }, 3000);
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout du prospect', error);
      }
    );
  }
  openSuccessModal(): void {
    const dialogRef = this.dialogg.open(SuccessModalAddProspectComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '80vh',
      panelClass: 'custom-success-modal', // Classe CSS personnalisée pour le modal

      data: { } 
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
          
      }
    });
    
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  closePopup(success: boolean = false): void {
    this.showPopup = false;
    this.prospectForm.resetForm();
    this.dialogRef.close(success);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
