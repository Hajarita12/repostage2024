import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { SucessModalSetComComponent } from '../sucess-modal-set-com/sucess-modal-set-com.component';

@Component({
  selector: 'app-reset-profil-commercial',
  templateUrl: './reset-profil-commercial.component.html',
  styleUrls: ['./reset-profil-commercial.component.css']
})
export class ResetProfilCommercialComponent implements OnInit {
  commercial: any = {
    id: null,
    username: '',
    password: '',
    email: '',
    image: ''
  };
  selectedFile: File | null = null;

  constructor(private adminService: AdminService,private dialog: MatDialog) { }

  ngOnInit(): void {
    // Supposons que les informations du commercial sont déjà stockées en session
    const commercialDataString = sessionStorage.getItem('COMMERCIAL');
    if (commercialDataString) {
      const commercialData = JSON.parse(commercialDataString);
      this.commercial.id = commercialData.id;
}
    this.adminService.getCommercialById(this.commercial.id).subscribe(
      (data: any) => {
        this.commercial.username = data.username;
        this.commercial.email = data.email;
        this.commercial.password=data.password;
        this.commercial.image=data.image;
      },
      (error:any) => {
        console.error('Failed to retrieve commercial data:', error);
        // Gérer l'erreur de récupération des données du commercial
      }
    );
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.convertToBase64(this.selectedFile);
    }
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result?.toString().split(',')[1]; // Exclure les métadonnées
      if (base64String) {
        this.commercial.image = base64String;
      }
    };
    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    this.updateCommercial();
  }

  updateCommercial(): void {
    this.adminService.updateCommercial(this.commercial.id, this.commercial).subscribe(
      response => {
        console.log('Commercial updated successfully', response);
        // Vous pouvez ajouter du code pour afficher un message de succès ou rediriger l'utilisateur
        const dialogRef = this.dialog.open(SucessModalSetComComponent, {
          width: '500px'
        });
      },
      error => {
        console.error('Error updating commercial', error);
        // Vous pouvez ajouter du code pour afficher un message d'erreur
      }
    );
  }
}
