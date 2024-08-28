import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { SucessModalSetAssisComponent } from '../sucess-modal-set-assis/sucess-modal-set-assis.component';

@Component({
  selector: 'app-set-profil-assistant',
  templateUrl: './set-profil-assistant.component.html',
  styleUrls: ['./set-profil-assistant.component.css']
})
export class SetProfilAssistantComponent  {

  assistant: any = {
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
    const assistantDataString = sessionStorage.getItem('ASSISTANT');
    if (assistantDataString) {
      const assistantData = JSON.parse(assistantDataString);
      this.assistant.id = assistantData.id;
}
    this.adminService.getAssistantById(this.assistant.id).subscribe(
      (data: any) => {
        this.assistant.username = data.username;
        this.assistant.email = data.email;
        this.assistant.password=data.password;
        this.assistant.image=data.image;
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
        this.assistant.image = base64String;
      }
    };
    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    this.updateAssistant();
    this.ngOnInit();
  }

  updateAssistant(): void {
    this.adminService.updateAssistant(this.assistant.id, this.assistant).subscribe(
      (      response: any) => {
        console.log('Commercial updated successfully', response);
        
        const dialogRef = this.dialog.open(SucessModalSetAssisComponent, {
          width: '500px'
        });      
      },
      (      error: any) => {
        console.error('Error updating commercial', error);
        // Vous pouvez ajouter du code pour afficher un message d'erreur
      }
    );

}
}