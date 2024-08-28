import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-commercial',
  templateUrl: './reset-password-commercial.component.html',
  styleUrls: ['./reset-password-commercial.component.css']
})
export class ResetPasswordCommercialComponent implements OnInit {

  form = {
    username: '',
    email: '',
    verificationCode: '',
    newPassword: '',
    ConfirmednewPassword: ''
  };
  verificationCodeCorrect = false;
  verificationCodeSent = false;
  isSendingVerificationCode = true;
  varnewpassword = false;
  verificationCodeEnvoye: any;

  constructor(private router: Router, private adminService: AdminService) { }

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

  updatePassword() {
    console.log("New password:", this.form.ConfirmednewPassword);
    console.log("Email du commercial:", this.form.email);

    this.adminService.updateCommercialPassword(this.form.email, this.form.ConfirmednewPassword).subscribe(
      (response: any) => {
        console.log('Password updated successfully:', response);
        // Mettre à jour l'interface utilisateur si nécessaire
        this.router.navigate(['/login-commercial']);
      },
      (error: any) => {
        console.error('Erreur lors de la mise à jour du mot de passe commercial :', error);
        // Gérez les erreurs ici
      }
    );
  }

  sendVerificationCode() {
    this.verificationCodeEnvoye = this.generateVerificationCode();
    console.log("Verification code envoyé :", this.verificationCodeEnvoye);

    const subject = 'Password Reset Verification Code';
    const htmlContent = `<p>Your verification code is: <strong>${this.verificationCodeEnvoye}</strong></p>`;

    this.adminService.sendEmail(this.form.email, subject, htmlContent).subscribe(
      (response: any) => {
        console.log('Password reset email sent successfully.');
        this.verificationCodeSent = true;
        this.isSendingVerificationCode = false;
      },
      (error: any) => {
        console.error('Failed to send password reset email.', error);
        // Gérez les erreurs ici
      }
    );
  }

  submitVerificationCode() {
    console.log("Code saisi :", this.form.verificationCode);
    console.log("Code envoyé :", this.verificationCodeEnvoye);

    if (this.form.verificationCode === this.verificationCodeEnvoye) {
      console.log('Verification code matched. Proceed to reset.');
      this.varnewpassword = true;
      this.verificationCodeCorrect = true;
    } else {
      console.log('Verification code did not match. Please try again.');
      // Affichez un message d'erreur ici
    }
  }

  private generateVerificationCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
}
