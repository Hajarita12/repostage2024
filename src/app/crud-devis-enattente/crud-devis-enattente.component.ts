import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../services/admin.service';
import { ModalDevisDetailsComponent } from '../modal-devis-details/modal-devis-details.component';
import { ConfirmationModalDevisComponent } from '../confirmation-modal-devis/confirmation-modal-devis.component';
import { EditModalDevisComponent } from '../edit-modal-devis/edit-modal-devis.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddDevisModalComponent } from '../add-devis-modal/add-devis-modal.component';

@Component({
  selector: 'app-crud-devis-enattente',
  templateUrl: './crud-devis-enattente.component.html',
  styleUrls: ['./crud-devis-enattente.component.css']
})
export class CrudDevisEnattenteComponent implements OnInit {

  devisList: any[] = [];
  commercialId: any;
  showMessageOnClick = false; // Flag to show message on click
  selectedDevis: any; // Store the selected devis for message display
  filteredDevis: any[] = [];
  selectedEtat: string = '';
  constructor(private adminService: AdminService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadDevis();
  }

  filterDevis(): void {
    if (this.selectedEtat === '') {
      this.filteredDevis = this.devisList; // Afficher tous les prospects si aucun filtre n'est sélectionné
    } else {
      this.filteredDevis = this.devisList.filter(devis => devis.etat === this.selectedEtat);
    }
  }
  loadDevis(): void {
    const commercialDataString = sessionStorage.getItem('COMMERCIAL');
    if (commercialDataString) {
      const commercial = JSON.parse(commercialDataString);
      this.commercialId = commercial.id;
    }
    this.adminService.getDevisEnAttenteByCommercial(this.commercialId).subscribe(
      (data: any[]) => {
        this.devisList = data;
        this.filteredDevis = data;

        console.log("devislist :", this.devisList);
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des devis', error);
      }
    );
  }

  openDetailsModal(devis: any): void {
    this.adminService.getArticlesByDevisReference(devis.reference).subscribe(
      (devisarticles: any[]) => {
        // Ouvrir le modal avec les détails des articles du devis
        const dialogRef = this.dialog.open(ModalDevisDetailsComponent, {
          width: '600px',

          data: {
            devis: devis,
            devisarticles: devisarticles
          }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('Le modal des détails du devis a été fermé');
        });
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des articles du devis', error);
      }
    );
  }

  deleteDevis(devis: any): void {
    const dialogRef = this.dialog.open(ConfirmationModalDevisComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminService.deleteDevis(devis.reference).subscribe(
          () => {
            this.loadDevis();
          },
          (error: any) => {
            console.error('Erreur lors de la suppression du devis', error);
          }
        );
      }
    });
  }

  editDevis(devis: any): void {
    // Ouvrir le modal d'édition avec les détails du devis sélectionné
    const dialogRef = this.dialog.open(EditModalDevisComponent, {
      width: '1100px', // Ajustez la largeur du modal si nécessaire
      height: 'auto',
      maxHeight: '100vh',
      panelClass: 'custom-dialog-container',

      data: devis // Passez les détails du devis à votre modal d'édition
    });

    dialogRef.afterClosed().subscribe(result => {
      // Ici, vous pouvez traiter la logique après la fermeture du modal d'édition
      if (result) {
        console.log('Les détails du devis ont été mis à jour :', result);
        // Rechargez la liste des devis ou faites d'autres actions nécessaires
        this.loadDevis();
      }
    });
  }

  // Méthode pour afficher la notification lors du survol ou du clic sur un devis désactivé
  showNotification(devis: any): void {
    if (devis.etat === 'Validé') {
      this.snackBar.open('Ce devis a été validé par l\'Assistant ADV. Donc, vous n\'avez pas le droit de le modifier', 'Fermer', {
        duration: 5000, // Durée en millisecondes (5 secondes ici)
        horizontalPosition: 'center', // Position horizontale de la notification
        verticalPosition: 'top' // Position verticale de la notification
      });
      
    } else if (devis.etat === 'Annulé') {
      this.snackBar.open('Ce devis a été annulé par l\'Assistant ADV.', 'Fermer', {
        duration: 3000,
        horizontalPosition: 'center', // Position horizontale de la notification

        verticalPosition: 'top' // Position verticale de la notification

      });
    }
  }
  isDevisInactive(devis: any): boolean {
    return devis.etat === 'Validé' || devis.etat === 'Annulé';
  }
  openAddDevisModal(): void {
    const dialogRef = this.dialog.open(AddDevisModalComponent, {
      width: '600px', // Ajustez la largeur du modal si nécessaire
      height: 'auto',
      maxHeight: '80vh',
      panelClass: 'custom-dialog-container',
      data: { commercialId: this.commercialId } // Passer les données du commercial au modal
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
     this.loadDevis();
      }
    });
  }
  
}
