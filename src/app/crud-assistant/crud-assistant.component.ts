import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../services/admin.service';
import { EspaceAdminComponent } from '../espace-admin/espace-admin.component';
import { AddAssistantComponent } from '../add-assistant/add-assistant.component';
import { ConfirmationModalAssistantComponent } from '../confirmation-modal-assistant/confirmation-modal-assistant.component';
import { EditAssistantModalComponent } from '../edit-assistant-modal/edit-assistant-modal.component';

@Component({
  selector: 'app-crud-assistant',
  templateUrl: './crud-assistant.component.html',
  styleUrls: ['./crud-assistant.component.css']
})
export class CrudAssistantComponent implements OnInit {

  assistants: any[] = [];
  searchText: string = '';

  constructor(
    private adminService: AdminService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadAssistants();
  }

  loadAssistants(): void {
    this.adminService.getAssistant().subscribe((data: any) => {
      this.assistants = data;
    }, (error: any) => {
      console.error('Erreur lors du chargement des assistants', error);
    });
  }

  filteredAssistants(): any[] {
    if (!this.searchText) {
      return this.assistants;
    }
    const lowerCaseSearchText = this.searchText.toLowerCase();
    return this.assistants.filter(assistant =>
      assistant.username.toLowerCase().includes(lowerCaseSearchText) ||
      assistant.email.toLowerCase().includes(lowerCaseSearchText)
    );
  }

  openAddAssistantModal(): void {
    const dialogRef = this.dialog.open(AddAssistantComponent, {
      width: '600px',
      height: 'auto',
      maxHeight: '80vh',
      panelClass: 'custom-dialog-container',  // Ajoutez cette ligne pour définir une classe CSS personnalisée

      data: { } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadAssistants();
      }
    });
  }

  openEditModal(assistant: any): void {
    const dialogRef = this.dialog.open(EditAssistantModalComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container',  // Ajoutez cette ligne pour définir une classe CSS personnalisée

      data: { assistant: assistant }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadAssistants();
      }
    });
  }

  deleteAssistant(assistantId: number, assistantName: string): void {
    const dialogRef = this.dialog.open(ConfirmationModalAssistantComponent, {
      width: '500px',
      data: { assistantName: assistantName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminService.deleteAssistant(assistantId).subscribe(
          () => {
            this.assistants = this.assistants.filter(assistant => assistant.id !== assistantId);
            this.loadAssistants();
            console.log(`Assistant ${assistantId} supprimé`);
          },
          (error: any) => {
            console.error('Erreur lors de la suppression de l\'assistant', error);
          }
        );
      }
    });
  }
  getImageData(assistant: any): string {
    if (!assistant || !assistant.image) {
      return ''; // Retourne une chaîne vide si aucune image n'est disponible
    }
  
    let imageType = this.getImageType(assistant.image);
  
    if (imageType !== '') {
      return `data:image/${imageType};base64,${assistant.image}`;
    } else {
      return '';
    }
  }
  
  getImageType(imageData: string): string {
    let type = '';
    if (imageData.startsWith('/9j/')) {
      type = 'jpeg';
    } else if (imageData.startsWith('iVBORw0KGgoAAAANSUhEUgAA')) {
      type = 'png';
    } else if (imageData.startsWith('R0lGOD')) {
      type = 'gif';
    } else {
      type = 'jpeg'; // Valeur par défaut si le type n'est pas détecté correctement
    }
    return type;
  }
}
