import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { SuccessModalAddcomComponent } from '../success-modal-addcom/success-modal-addcom.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.css']
})
export class EspaceAdminComponent implements OnInit {

  commercial = {
    email: '',
    username: '',
    password: '',
    image: '',
    droits: ''  // Changez ceci pour être une chaîne de caractères
  };
  
  

  showPopup = false;
  showErrorMessages = true;
  errorMessage = '';

  constructor(private adminService: AdminService,public dialog: MatDialogRef<EspaceAdminComponent>,public dialogg: MatDialog
  ) {}

  ngOnInit() {
    // Lire l'image par défaut en base64
    this.loadImageAsBase64('assets/nophoto.png');
  }

  loadImageAsBase64(imagePath: string): void {
    fetch(imagePath)
      .then(response => response.arrayBuffer())
      .then(buffer => {
        const base64String = this.arrayBufferToBase64(buffer);
        this.commercial.image = base64String;
      })
      .catch(error => console.error('Erreur lors de la lecture de l\'image', error));
  }

  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  onSubmit() {
    console.log("commercial", this.commercial);
  
    // Les droits sont déjà une chaîne de caractères séparée par des virgules
    this.adminService.addCommercial(this.commercial).subscribe(
      response => {
        console.log('Commercial ajouté avec succès', response);
        this.sendEmailToCommercial(response.email); // Appel à la fonction d'envoi d'email
        this.onConfirm();
        this.openSuccessModal();
        this.errorMessage = '';
      },
      error => {
        console.error('Erreur lors de l\'ajout du commercial', error);
        if (error.status === 400) {
          this.errorMessage = 'Email déjà utilisé !';
        } else {
          this.errorMessage = 'Erreur lors de l\'ajout du commercial.';
        }
      }
    );
  }
  
  
  
  sendEmailToCommercial(email: string) {
    const message = `<html>
                      <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                        <div style="float: left; margin-right: 20px;">
                          <img src="https://media.licdn.com/dms/image/D4E0BAQEiD-KC-VLPiw/company-logo_200_200/0/1690282056306/gocom_sa_logo?e=1727913600&v=beta&t=Y8iR_L_a6rnwuUoJAPaMq6kGCTPOy5k7fzzvqVQdRWU" style="max-width: 120px;">
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <p>Cher(e) Commercial,</p>
                        <p>Voici les informations de connexion pour accéder à notre plateforme Web <a href="http://localhost:4200">http://localhost:4200/accueil</a>:</p>
                        <p><strong style="text-decoration: underline; color: red;">Username:</strong> ${this.commercial.username}</p>
                        <p><strong style="text-decoration: underline; color: red;">Password:</strong> ${this.commercial.password}</p>
                        <p>Cordialement,</p>
                        <p><em>&copy; L'équipe GoCom</em></p>
                        <p><small>Ce message provient de l'administrateur de GoCom.</small></p>
                      </body>
                    </html>`;

    this.adminService.sendEmail(email, 'Création du Compte Commercial', message).subscribe(
      response => {
        console.log('Email envoyé avec succès');
      },
      error => {
        console.error('Erreur lors de l\'envoi de l\'email', error);
      }
    );
  }
  openSuccessModal(): void {
    const dialogRef = this.dialogg.open(SuccessModalAddcomComponent, {
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
  onConfirm(): void {
    this.dialog.close(true);
  }
  onCancel(): void {
    this.dialog.close();
  }
  onDroitChange(droit: string, event: any) {
    let droitsArray = this.commercial.droits.split(',').filter(d => d); // Convertir la chaîne en tableau
    if (event.target.checked) {
      if (!droitsArray.includes(droit)) {
        droitsArray.push(droit);
      }
    } else {
      droitsArray = droitsArray.filter(d => d !== droit);
    }
    this.commercial.droits = droitsArray.join(','); // Convertir le tableau en chaîne
  }
  
  
}
