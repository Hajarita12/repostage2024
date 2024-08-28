import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { ModalErrorQuantityArticleComponent } from '../modal-error-quantity-article/modal-error-quantity-article.component';

@Component({
  selector: 'app-add-devis-modal',
  templateUrl: './add-devis-modal.component.html',
  styleUrls: ['./add-devis-modal.component.css']
})
export class AddDevisModalComponent implements OnInit {
  @ViewChild('dialogContent') dialogContent!: TemplateRef<any>;

  devis: any = {
    reference: '',
    prospect: null,
    dateDevis: '',
    montantTotal: 0,
    etat: 'En attente',
    articles: [],
    articleDetails: [] // Ajout d'un tableau pour stocker les détails de chaque article
  };
  articles: any[] = [];
  prospects: any[] = [];
  selectedArticles: any[] = [];
  selectedProspect: any = null;
  commercial: any = {
    id: null,
    username: '',
    password: '',
    email: '',
    image: ''
  };

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddDevisModalComponent>
  ) {}
  commercialId: any;

  ngOnInit(): void {
    this.loadArticles();
    this.loadProspects();
    const commercialDataString = sessionStorage.getItem('COMMERCIAL');
    if (commercialDataString) {
      const commercialData = JSON.parse(commercialDataString);
      this.commercial.id = commercialData.id;
    }
    console.log("id du commercial est : ", this.commercial.id);

    this.adminService.getCommercialById(this.commercial.id).subscribe(
      (data: any) => {
        this.commercial.username = data.username;
        this.commercial.password = data.password;
        this.commercial.email = data.email;
        this.commercial.image = data.image;
      },
      (error: any) => {
        console.error('Failed to retrieve commercial data:', error);
      }
    );
    console.log("Commercial récupéré :", this.commercial);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  loadArticles(): void {
    this.adminService.getArticles().subscribe((data: any) => {
      this.articles = data;
    });
  }

  loadProspects(): void {
    const commercialDataString = sessionStorage.getItem('COMMERCIAL');
    if (commercialDataString) {
      const commercial = JSON.parse(commercialDataString);
      this.commercialId = commercial.id;
    }
    this.adminService.getClients(this.commercialId).subscribe((data: any) => {
      this.prospects = data;
    });
  }

  getStockQuantity(reference: string): number {
    const article = this.selectedArticles.find(a => a.reference === reference);
    return article ? article.quantiteStock : 0;
  }

  onArticleCheckboxChange(event: any, article: any): void {
    if (event.target.checked) {
      this.selectedArticles.push(article);
    } else {
      this.selectedArticles = this.selectedArticles.filter(a => a.reference !== article.reference);
    }
    this.devis.articles = this.selectedArticles.map(a => a.reference);
    this.devis.articleDetails = this.selectedArticles.map(article => ({
      reference: article.reference,
      designation: article.designation,
      quantity: 1,
      remise: 0
    }));
  }

  openSuccessModal(data: any): void {
    const dialogRef = this.dialog.open(SuccessModalComponent, {
      width: '400px',
      data: { montantTotal: data.montantTotal }
    });

    dialogRef.afterClosed().subscribe((result :any)=> {
      console.log('The dialog was closed');
    });
  }

  openErrorModal(data: any): void {
    const dialogRef = this.dialog.open(ModalErrorQuantityArticleComponent, {
      width: '400px',
      data: { 
        article: data.article, 
        quantite: data.quantite, 
        qteEnstock: data.quantiteenstock 
      }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
  
  openDialog(): void {
    this.dialogRef = this.dialog.open(this.dialogContent, {
      data: { montantTotal: this.devis.montantTotal }
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  async onSubmit(form: NgForm): Promise<void> {
    this.devis.prospect = this.selectedProspect;
    let totalArticlesAmount = 0;

    try {
        for (let articleDetail of this.devis.articleDetails) {
            const quantity = articleDetail.quantity;
            const article = this.selectedArticles.find(a => a.reference === articleDetail.reference);

            if (!article) {
                throw new Error(`Article not found for reference ${articleDetail.reference}`);
            }

            // Vérification de la quantité disponible
            const quantiteDisponible = article.qteEnStock - article.qteReservee;
            if (quantity > quantiteDisponible) {
                this.openErrorModal({ article: article.designation, quantite: quantity, quantiteenstock: quantiteDisponible });
                return; // Arrêter l'exécution si la quantité est insuffisante
            }

            const unitPrice = article.prixUnitaire;
            const remiseFactor = articleDetail.remise / 100;

            const totalAmount = quantity * unitPrice;
            const totalAmountWithRemise = totalAmount * (1 - remiseFactor);

            totalArticlesAmount += totalAmountWithRemise;
        }

        const tvaFactor = 0.20;
        const montantTVA = totalArticlesAmount * tvaFactor;
        this.devis.montantTotal = (totalArticlesAmount + montantTVA).toFixed(2); // Ajouter toFixed ici

        const devisToSave = {
            reference: this.devis.reference,
            dateDevis: this.devis.dateDevis,
            prospect: this.devis.prospect,
            etat: this.devis.etat,
            commercial: this.commercial,
            montantTotal: this.devis.montantTotal
        };

        console.log("Devis envoyé au backend :", devisToSave);

        const devisResponse = await this.adminService.addDevis(devisToSave).toPromise();
        console.log('Devis ajouté avec succès', devisResponse);

        const devisArticlesToSave = [];
        for (let articleDetail of this.devis.articleDetails) {
            const article = await this.adminService.getArticleByReference(articleDetail.reference).toPromise();
            const devis = await this.adminService.getDevisByReference(this.devis.reference).toPromise();

            devisArticlesToSave.push({
                devis: devis,
                article: article,
                quantite: articleDetail.quantity,
                remise: articleDetail.remise
            });
        }

        for (let i = 0; i < devisArticlesToSave.length; i++) {
            const devisArticleToSave = devisArticlesToSave[i];
            await this.adminService.addDevisArticle(devisArticleToSave).toPromise();
            console.log(`DevisArticle ${i + 1} ajouté avec succès`);
        }

        form.resetForm();
        this.dialogRef.close(true); // Fermer le modal et envoyer un signal de succès

        this.openSuccessModal({ montantTotal: this.devis.montantTotal });

    } catch (error) {
        console.error('Erreur lors de l\'ajout du devis ou des devisArticles', error);
        // Gérer l'erreur ici
    }
    this.loadArticles();
    this.loadProspects();
}

}
