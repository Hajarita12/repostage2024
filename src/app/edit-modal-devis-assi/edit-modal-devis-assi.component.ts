import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AdminService } from '../services/admin.service';
import { SucessModalEditDevComponent } from '../sucess-modal-edit-dev/sucess-modal-edit-dev.component';

@Component({
  selector: 'app-edit-modal-devis-assi',
  templateUrl: './edit-modal-devis-assi.component.html',
  styleUrls: ['./edit-modal-devis-assi.component.css']
})
export class EditModalDevisAssiComponent implements OnInit {

  editedDevis: any; // Variable pour stocker les données du devis à éditer
  prospects: any[] = []; // Variable pour stocker la liste des prospects
  articles: any[] = []; // Variable pour stocker la liste des articles
  selectedProspect: any; // Variable pour stocker le prospect sélectionné dans le formulaire
  devisArticles: any[] = []; // Variable pour stocker les détails des articles associés au devis
  articlesDevis: any[] = [];
  articlechange: boolean = false;
  commercialId: any;

  constructor(
    private adminService: AdminService,
    public dialogRef: MatDialogRef<EditModalDevisAssiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {
    this.editedDevis = { ...data }; // Initialiser avec les données passées depuis le composant parent
  }

  ngOnInit(): void {
    this.loadProspects();
    this.loadArticles();

    if (this.editedDevis && this.editedDevis.reference) {
      this.getArticlesDetails(this.editedDevis.reference);
    }
  }

  loadProspects(): void {
    this.adminService.getAllClients().subscribe((data: any) => {
      this.prospects = data;
      this.selectedProspect = this.prospects.find(p => p.id === this.editedDevis.prospect.id);
    });
  }

  loadArticles(): void {
    this.adminService.getArticles().subscribe((data: any) => {
      this.articles = data;
      // Synchronisation après le chargement des articles
      this.updateSelectedArticles();
    });
  }

  getArticlesDetails(devisReference: string): void {
    this.adminService.getArticlesByDevisReference(devisReference).subscribe(
      (devisArticles: any[]) => {
        this.devisArticles = devisArticles;
        // Synchronisation des articles sélectionnés
        this.updateSelectedArticles();
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des articles du devis', error);
      }
    );
  }

  updateSelectedArticles(): void {
    this.articles.forEach(article => {
      article.selected = false;
    });

    this.devisArticles.forEach(devisArticle => {
      const selectedArticle = this.articles.find(article => article.reference === devisArticle.article.reference);
      if (selectedArticle) {
        selectedArticle.selected = true;
        selectedArticle.quantite = devisArticle.quantite;
        selectedArticle.remise = devisArticle.remise;
      }
    });
  }

  onArticleCheckChange(article: any): void {
    article.selected = !article.selected;
    this.articlechange = true;
    this.updateArticlesDevis();
  }

  updateArticlesDevis(): void {
    this.articlesDevis = this.articles.filter(article => article.selected);
  }

  onSubmitEdit(): void {
    try {
      let totalArticlesAmount = 0;

      const selectedArticles = this.articlechange ? this.articlesDevis : this.devisArticles;

      for (let articleDetail of selectedArticles) {
        const articleReference = this.articlechange ? articleDetail.reference : articleDetail.article.reference;
        const article = this.articles.find(a => a.reference === articleReference);
        
        if (!article) {
          throw new Error(`Article non trouvé pour la référence ${articleReference}`);
        }

        const quantity = articleDetail.quantite;
        const unitPrice = article.prixUnitaire;
        const remiseFactor = articleDetail.remise / 100;

        const totalAmount = quantity * unitPrice;
        const totalAmountWithRemise = totalAmount * (1 - remiseFactor);

        totalArticlesAmount += totalAmountWithRemise;
      }

      const tvaFactor = 0.20;
      const montantTVA = totalArticlesAmount * tvaFactor;
      this.editedDevis.montantTotal = (totalArticlesAmount + montantTVA).toFixed(4);

      const editedDevisData = {
        reference: this.editedDevis.reference,
        dateDevis: this.editedDevis.dateDevis,
        montantTotal: this.editedDevis.montantTotal,
        etat: this.editedDevis.etat,
        commercial: this.editedDevis.commercial,
        prospect: {
          id: this.selectedProspect.id,
          name: this.selectedProspect.name,
          email: this.selectedProspect.email,
          phone: this.selectedProspect.phone,
          adresse: this.selectedProspect.adresse,
          identifiantClient: this.selectedProspect.identifiantClient
        }
      };

      this.adminService.updateDevis(this.editedDevis.reference, editedDevisData).subscribe(
        (response: any) => {
          if (this.articlechange) {
            this.updateDevisArticles(this.articlesDevis);
          } else {
            this.updateDevisArticles(this.devisArticles);
          }
        },
        (error: any) => {
          console.error('Erreur lors de la mise à jour du devis :', error);
        }
      );
    } catch (error) {
      console.error('Erreur lors de la mise à jour du devis :', error);
    }
  }

  updateDevisArticles(articles: any[]): void {
    const articlesData = articles.map(article => ({
      article: this.articlechange ? article : article.article,
      devis: this.editedDevis,
      quantite: article.quantite,
      remise: article.remise
    }));

    this.adminService.updateDevisArticles(this.editedDevis.reference, articlesData).subscribe(
      (response: any) => {
        console.log('Articles du devis mis à jour avec succès :', response);
        this.dialogRef.close(true);
        this.dialog.open(SucessModalEditDevComponent, { width: '500px' });
      },
      (error: any) => {
        console.error('Erreur lors de la mise à jour des articles du devis :', error);
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
