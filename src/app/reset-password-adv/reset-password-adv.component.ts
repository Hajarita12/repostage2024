import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-adv',
  templateUrl: './reset-password-adv.component.html',
  styleUrls: ['./reset-password-adv.component.css']
})
export class ResetPasswordAdvComponent implements OnInit {

  form = {
    username: '',
    email: '',
    verificationCode: '',
    newPassword:'',
    ConfirmednewPassword:''
  };
  verificationCodeCorrect = false;
  verificationCodeSent = false;
  isSendingVerificationCode = true;

  constructor(private router:Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }

  resetPassword() {
    if (this.isSendingVerificationCode) {
      this.sendVerificationCode();
    } else if (this.varnewpassword) {
      this.updatePassword();
    } else {
      this.submitVerificationCode();
    }
  }

  verificationCodeEnvoye: any;
  varnewpassword = false;

  updatePassword() {
    console.log("New password:", this.form.ConfirmednewPassword);
    console.log("Email du commercial:", this.form.email);

    this.adminService.updateAdvPassword(this.form.email, this.form.ConfirmednewPassword).subscribe(
      (response: any) => {
        console.log('Password updated successfully:', response);
        // Mettre à jour this.prospects pour déclencher la mise à jour de l'affichage si nécessaire
        this.router.navigate(['/login-assistant']);

      },
      (error: any) => {
        console.error('Erreur lors de la mise à jour du mot de passe commercial :', error);
        // Assurez-vous que vous gérez correctement les erreurs et les messages d'erreur ici
      }
    );
  }

  sendVerificationCode() {
    // Générer un code de vérification aléatoire
    this.verificationCodeEnvoye = this.generateVerificationCode();
    console.log("Verification code envoyée :", this.verificationCodeEnvoye);

    // Construire le contenu de l'email
    const subject = 'Password Reset Verification Code';
    const htmlContent = `<p>Your verification code is: <strong>${this.verificationCodeEnvoye}</strong></p>`;

    // Envoyer l'email avec le code de vérification
    this.adminService.sendEmail(this.form.email, subject, htmlContent).subscribe(
      (response: any) => {
        console.log('Password reset email sent successfully.');
        // Affichez un message de succès à l'utilisateur si nécessaire
        this.verificationCodeSent = true;
        this.isSendingVerificationCode = false;
      },
      (error: any) => {
        console.error('Failed to send password reset email.', error);
        // Gérez les erreurs et affichez un message d'erreur à l'utilisateur si nécessaire
      }
    );
  }

  submitVerificationCode() {
    console.log("code saisie :", this.form.verificationCode);
    console.log("code envoyé :", this.verificationCodeEnvoye);

    if (this.form.verificationCode === this.verificationCodeEnvoye) {
      console.log('Verification code matched. Proceed to reset.');
      this.varnewpassword = true;
      this.verificationCodeCorrect = true;
    } else {
      console.log('Verification code did not match. Please try again.');
      // Afficher un message à l'utilisateur indiquant que le code de vérification est incorrect
    }
  }

  private generateVerificationCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

}
