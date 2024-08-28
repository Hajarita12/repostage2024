import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../services/admin.service';
import { EditProspectModalComComponent } from '../edit-prospect-modal-com/edit-prospect-modal-com.component';
import { ConfimationModalProspectComponent } from '../confimation-modal-prospect/confimation-modal-prospect.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddProspectModalComponent } from '../add-prospect-modal/add-prospect-modal.component';

@Component({
  selector: 'app-crud-prospect-com',
  templateUrl: './crud-prospect-com.component.html',
  styleUrls: ['./crud-prospect-com.component.css']
})
export class CrudProspectComComponent implements OnInit {
  commercial: any = {
    id: null,
    username: '',
    password: '',
    email: '',
    image: ''
  };
  prospects: any[] = [];
  filteredProspects: any[] = [];
  selectedEtat: string = '';

  constructor(private adminService: AdminService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const commercialDataString = sessionStorage.getItem('COMMERCIAL');
    if (commercialDataString) {
      const commercialData = JSON.parse(commercialDataString);
      this.commercial.id = commercialData.id;
    }

    this.adminService.getCommercialById(this.commercial.id).subscribe(
      (data: any) => {
        this.commercial.username = data.username;
        this.commercial.email = data.email;
        const imageType = this.getImageType(data.image);
        this.commercial.image = `data:image/${imageType};base64,${data.image}`;
      },
      (error: any) => {
        console.error('Failed to retrieve commercial data:', error);
        // Gérer l'erreur de récupération des données du commercial
      }
    );

    console.log("Commercial récupéré :", this.commercial);
    this.loadProspectsForCom(this.commercial.id);
  }

  getImageType(imageData: string): string {
    // Extrait le type d'image à partir du contenu base64
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

  loadProspectsForCom(commercialId: number): void {
    this.adminService.getProspectsByCommercialId(commercialId).subscribe((data: any) => {
      this.prospects = data;
      this.filteredProspects = data;
      console.log("prospects", this.prospects);
    }, (error: any) => {
      console.error('Erreur lors du chargement des prospects', error);
    });
  }

  filterProspects(): void {
    if (this.selectedEtat === '') {
      this.filteredProspects = this.prospects; // Afficher tous les prospects si aucun filtre n'est sélectionné
    } else {
      this.filteredProspects = this.prospects.filter(prospect => prospect.etat === this.selectedEtat);
    }
  }

  openEditModal(prospect: any): void {
    const dialogRef = this.dialog.open(EditProspectModalComComponent, {
      width: '600px', // Largeur fixe
      height: 'auto', // Hauteur auto pour s'adapter au contenu
      maxHeight: '80vh', // Hauteur maximale pour éviter de dépasser l'écran
      panelClass: 'custom-dialog-container',

      data: { prospect: { ...prospect } } // Passer les données du prospect au modal
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Recharger les prospects après la fermeture du modal si nécessaire
      this.loadProspectsForCom(this.commercial.id);
    });
  }
  

  deleteProspect(prospectId: number): void {
    const dialogRef = this.dialog.open(ConfimationModalProspectComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      this.adminService.deleteProspect(prospectId).subscribe(
        () => {
          this.prospects = this.prospects.filter(prospect => prospect.id !== prospectId);
          this.filterProspects(); 
          console.log(`Prospect ${prospectId} supprimé`);
        },
        (error: any) => {
          console.error('Erreur lors de la suppression du prospect', error);
        }
      );
    }
  });
}

isProspectInactive(prospect: any): boolean {
  return prospect.etat === 'Validé' || prospect.etat === 'Annulé';
}

showNotification(prospect: any): void {
  console.log("shownotification appliquée :",prospect.etat);
  if (prospect.etat === 'Validé') {
    this.snackBar.open('Ce prospect a été validé par l\'Assistant ADV. Donc, vous n\'avez pas le droit de le modifier', 'Fermer', {
      duration: 5000, // Durée en millisecondes (5 secondes ici)
      horizontalPosition: 'center', // Position horizontale de la notification
      verticalPosition: 'top' // Position verticale de la notification
    });
    
  } else if (prospect.etat === 'Annulé') {
    this.snackBar.open('Ce prospect a été annulé par l\'Assistant ADV.', 'Fermer', {
      duration: 3000,
      horizontalPosition: 'center', // Position horizontale de la notification

      verticalPosition: 'top' // Position verticale de la notification

    });
  }
}

openAddProspectModal(): void {
  const dialogRef = this.dialog.open(AddProspectModalComponent, {
    width: '600px',
    height: 'auto',
    maxHeight: '80vh',
    panelClass: 'custom-dialog-container',
    data: { commercial: this.commercial } // Passer les données du commercial au modal
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.loadProspectsForCom(this.commercial.id); // Recharger la liste des prospects après la fermeture du modal
    }
  });
}
}
