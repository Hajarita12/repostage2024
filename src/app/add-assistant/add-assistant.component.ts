import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalAddAssistantComponent } from '../modal-add-assistant/modal-add-assistant.component';

@Component({
  selector: 'app-add-assistant',
  templateUrl: './add-assistant.component.html',
  styleUrls: ['./add-assistant.component.css']
})
export class AddAssistantComponent  implements OnInit {

  assistant = {
    email: '',
    username: '',
    password: '',
    image: '',
    droits: ''  // Changez ceci pour être une chaîne de caractères


  };

  showPopup = false;
  showErrorMessages = true;
  errorMessage = '';

  @ViewChild('assistantForm') assistantForm!: NgForm;
  @ViewChild('dialogContent') dialogContent!: TemplateRef<any>;
  private dialogRef!: MatDialogRef<any>;

  constructor(private adminService: AdminService, private router: Router,
    public dialog: MatDialogRef<AddAssistantComponent>,public dialogg: MatDialog
  ) {}

  ngOnInit() {
    // Lire l'image par défaut en base64
    this.loadImageAsBase64('assets/nophoto.png');
  }
  onCancel(): void {
    this.dialog.close();
  }
  loadImageAsBase64(imagePath: string): void {
    fetch(imagePath)
      .then(response => response.arrayBuffer())
      .then(buffer => {
        const base64String = this.arrayBufferToBase64(buffer);
        this.assistant.image = base64String;
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
  openSuccessModal(data: any): void {
    const dialogRef = this.dialogg.open(ModalAddAssistantComponent, {
      width: '500px',

      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onConfirm(): void {
    this.dialog.close(true);
  }
  onSubmit() {
    this.adminService.addAssistant(this.assistant).subscribe(
      (response: any) => {
        console.log('Assistant ADV ajouté avec succès', response);
        this.onConfirm();
        this.closePopup();
        this.openSuccessModal({  });

        console.log("email de l assistant a qui on va envoye email :",response.email);
        this.sendEmailToAssistant(response.email); // Appel à la fonction d'envoi d'email
        this.showPopup = true;
        this.errorMessage = ''; // Reset error message on success
        setTimeout(() => {
          this.closePopup();
        }, 3000);
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout de l\'assistant ADV', error);
        if (error.status === 400) {
          this.errorMessage = 'Email déjà utilisé !';
        } else {
          this.errorMessage = 'Erreur lors de l\'ajout de l\'assistant ADV.';
        }
      }
    );
  }

  closePopup() {
    this.showPopup = false;
    this.assistantForm.resetForm();
  }

  sendEmailToAssistant(email: string) {
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
                        <p>Cher(e) Assistant ADV,</p>
                        <p>Voici les informations de connexion pour accéder à notre plateforme Web <a href="http://localhost:4200">http://localhost:4200/accueil</a>:</p>
                        <p><strong style="text-decoration: underline; color: red;">Username:</strong> ${this.assistant.username}</p>
                        <p><strong style="text-decoration: underline; color: red;">Password:</strong> ${this.assistant.password}</p>
                        <p>Cordialement,</p>
                        <p><em>&copy; L'équipe GoCom</em></p>
                        <p><small>Ce message provient de l'administrateur de GoCom.</small></p>
                      </body>
                    </html>`;

    // Appel au service pour envoyer l'email
    this.adminService.sendEmail(email, 'Création du Compte Assistant ADV', message).subscribe(
      (response: any) => {
        console.log('Email envoyé avec succès');
      },
      (error: any) => {
        console.error('Erreur lors de l\'envoi de l\'email', error);
      }
    );
  }

  logout() {
    // Code de déconnexion (par exemple, supprimer les données de session, rediriger vers la page de connexion, etc.)
    // Exemple basique : supprimer les données de session (pas de gestion de session dans votre exemple actuel)
    sessionStorage.removeItem('ASSISTANT'); // Supprimer les données de session
    this.router.navigate(['/']); // Rediriger vers la page de connexion
  }
  onDroitChange(droit: string, event: any) {
    let droitsArray = this.assistant.droits.split(',').filter(d => d); // Convertir la chaîne en tableau
    if (event.target.checked) {
      if (!droitsArray.includes(droit)) {
        droitsArray.push(droit);
      }
    } else {
      droitsArray = droitsArray.filter(d => d !== droit);
    }
    this.assistant.droits = droitsArray.join(','); // Convertir le tableau en chaîne
  }
}
