import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../services/admin.service';
import { ConfirmationModalCommercialComponent } from '../confirmation-modal-commercial/confirmation-modal-commercial.component';
import { EspaceAdminComponent } from '../espace-admin/espace-admin.component';
import { EditCommercialModalComponent } from '../edit-commercial-modal/edit-commercial-modal.component';

@Component({
  selector: 'app-crud-commercial',
  templateUrl: './crud-commercial.component.html',
  styleUrls: ['./crud-commercial.component.css']
})
export class CrudCommercialComponent implements OnInit {

  commercials: any[] = [];
  searchText: string = '';

  constructor(
    private adminService: AdminService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadCommercials();
  }

  loadCommercials(): void {
    this.adminService.getCommercials().subscribe((data: any) => {
      this.commercials = data;
    }, (error: any) => {
      console.error('Erreur lors du chargement des commerciaux', error);
    });
  }

  filteredCommercials(): any[] {
    if (!this.searchText) {
      return this.commercials;
    }
    const lowerCaseSearchText = this.searchText.toLowerCase();
    return this.commercials.filter(commercial =>
      commercial.username.toLowerCase().includes(lowerCaseSearchText) ||
      commercial.email.toLowerCase().includes(lowerCaseSearchText)
    );
  }

  getImageData(commercial: any): string {
    if (!commercial || !commercial.image) {
      return ''; // Retourne une chaîne vide si aucune image n'est disponible
    }
  
    let imageType = this.getImageType(commercial.image);
  
    if (imageType !== '') {
      return `data:image/${imageType};base64,${commercial.image}`;
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

  openAddCommercialModal(): void {
    const dialogRef = this.dialog.open(EspaceAdminComponent, {
      width: '600px',
      height: 'auto',
      maxHeight: '80vh',

      panelClass: 'custom-dialog-container',  // Ajoutez cette ligne pour définir une classe CSS personnalisée
      data: { }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCommercials();
      }
    });
  }
  

  openEditModal(commercial: any): void {
    const dialogRef = this.dialog.open(EditCommercialModalComponent, {
      width: '650px',
      height: 'auto',
      maxHeight: '80vh',

      panelClass: 'custom-dialog-container', 
      data: { commercial: commercial }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCommercials();
      }
    });
  }

  deleteCommercial(commercialId: number, commercialName: string): void {
    const dialogRef = this.dialog.open(ConfirmationModalCommercialComponent, {
      width: '500px',
      data: { commercialName: commercialName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminService.deleteCommercial(commercialId).subscribe(
          () => {
            this.commercials = this.commercials.filter(commercial => commercial.id !== commercialId);
            this.loadCommercials(); 
            console.log(`Prospect ${commercialId} supprimé`);
          },
          (error: any) => {
            console.error('Erreur lors de la suppression du prospect', error);
          }
        );
      }
    });
  }
}
