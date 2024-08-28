import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { EditProspectModalComComponent } from '../edit-prospect-modal-com/edit-prospect-modal-com.component';
import { ConfimationModalProspectComponent } from '../confimation-modal-prospect/confimation-modal-prospect.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-espace-assistant',
  templateUrl: './espace-assistant.component.html',
  styleUrls: ['./espace-assistant.component.css']
})
export class EspaceAssistantComponent implements OnInit {

  prospects: any[] = [];
  searchTerm: string = '';
  filteredProspects: any[] = [];

  constructor(private adminService: AdminService, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadProspects();
  }

  loadProspects(): void {
    this.adminService.getAllProspects().subscribe(
      (data: any[]) => {
        this.prospects = data;
        this.filteredProspects=data;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des prospects', error);
      }
    );
  }

  logout(): void {
    sessionStorage.removeItem('ASSISTANT'); // Supprimer les données de session
    this.router.navigate(['/']); // Rediriger vers la page de connexion
  }

  toggleButton(prospect: any, newState: string) {
    console.log("Objet prospect :", prospect);
    console.log("Nouvel état :", newState);
  
    prospect.etat = newState;
    this.adminService.updateProspect(prospect.id, prospect).subscribe(
      (updatedProspect: any) => {
        console.log('Prospect mis à jour avec succès :', updatedProspect);
        // Mettre à jour this.prospects pour déclencher la mise à jour de l'affichage
        this.prospects = this.prospects.map(p => p.id === updatedProspect.id ? updatedProspect : p);
      },
      (error: any) => {
        console.error('Erreur lors de la mise à jour du prospect :', error);
        // Gérer les erreurs ici, par exemple afficher un message à l'utilisateur
      }
    );
  }
  filterProspects(): void {
    if (!this.searchTerm) {
      this.filteredProspects = this.prospects;
    } else {
      this.filteredProspects = this.prospects.filter(prospect =>
        prospect.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  editProspect(prospect: any): void {
    const dialogRef = this.dialog.open(EditProspectModalComComponent, {
      width: '600px', // Largeur fixe
      height: 'auto', // Hauteur auto pour s'adapter au contenu
      maxHeight: '80vh', // Hauteur maximale pour éviter de dépasser l'écran
      panelClass: 'custom-dialog-container',

      data: { prospect: { ...prospect } } // Passer les données du prospect au modal
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      // Recharger les prospects après la fermeture du modal si nécessaire
    this.loadProspects();
    });
  }
  

  deleteProspect(prospectId: number): void {
    const dialogRef = this.dialog.open(ConfimationModalProspectComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
      this.adminService.deleteProspect(prospectId).subscribe(
        () => {
          this.prospects = this.prospects.filter(prospect => prospect.id !== prospectId);
          this.loadProspects();
          console.log(`Prospect ${prospectId} supprimé`);
        },
        (error: any) => {
          console.error('Erreur lors de la suppression du prospect', error);
        }
      );
    }
  });
}
}
