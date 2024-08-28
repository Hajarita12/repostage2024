import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-espace-commercial',
  templateUrl: './espace-commercial.component.html',
  styleUrls: ['./espace-commercial.component.css']
})
export class EspaceCommercialComponent implements OnInit {

  showPopup = false;
  showErrorMessages = true;

  @ViewChild('prospectForm') prospectForm!: NgForm;

  commercialData: any = null;

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

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {
    const commercialDataString = sessionStorage.getItem('COMMERCIAL');
    if (commercialDataString) {
      this.commercialData = JSON.parse(commercialDataString);
      this.prospect.commercial.id = this.commercialData.id;
      this.prospect.commercial.username = this.commercialData.username;
      this.prospect.commercial.password = this.commercialData.password;
      this.prospect.commercial.email = this.commercialData.email;
    }
  }
  
  onSubmit() {
    console.log('Form envoyé', this.prospect);
    this.adminService.addProspect(this.prospect).subscribe(
      (response: any) => {
        console.log('Prospect ajouté avec succès', response);
        this.showPopup = true;
        setTimeout(() => {
          this.closePopup();
        }, 3000);
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout du prospect', error);
      }
    );
  }

  closePopup() {
    this.showPopup = false;
    this.prospectForm.resetForm();
  }

  logout() {
    sessionStorage.removeItem('COMMERCIAL'); // Supprimer les données de session
    this.router.navigate(['/']); // Rediriger vers la page de connexion
  }

}
