import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddArticleComponent } from '../add-article/add-article.component';
import { ConfirmationModalArticleComponent } from '../confirmation-modal-article/confirmation-modal-article.component';
import { EditArticleModalComponent } from '../edit-article-modal/edit-article-modal.component';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-vis-stock-com',
  templateUrl: './vis-stock-com.component.html',
  styleUrls: ['./vis-stock-com.component.css']
})
export class VisStockComComponent implements OnInit {

  articles: any[] = [];
  selectedArticle: any | null = null;
  searchTerm: string = '';
  selectedFile: File | null = null;
  searchText: string = '';
  @ViewChild('addModal') addModal: any;
  @ViewChild('detailsModal') detailsModal: any;
  @ViewChild('editModal') editModal: any;

  constructor(private adminService: AdminService, private dialog: MatDialog ,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.adminService.getArticles().subscribe(
      (data: any[]) => {
        this.articles = data;
        console.log("Tous les articles :", this.articles);
      },
      (error: any) => {
        console.error('Error fetching articles', error);
      }
    );
  }

  deleteArticle(article: any): void {
     
    const dialogRef = this.dialog.open(ConfirmationModalArticleComponent, {
      width: '500px',
      data:{articleName: article.designation}

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminService.deleteArticle(article.reference).subscribe(
          () => {
            this.loadArticles();
          },
          (error: any) => {
            console.error('Error deleting article', error);
          }
        );
      }
    });
  }

  editArticle(article: any): void {
    this.selectedArticle = { ...article };
    const dialogRef = this.dialog.open(EditArticleModalComponent, {
      width: '700px',
      height: '990px',
      maxHeight: '80vh',     
      panelClass: 'custom-dialog-container',

      data:{article: article}
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.loadArticles();
      }
    });

  }
 

  saveArticle(): void {
    console.log("Article Modifié :", this.selectedArticle);
    this.adminService.updateArticle(this.selectedArticle.reference, this.selectedArticle).subscribe(
      () => {
        this.loadArticles();
        this.modalService.dismissAll();
      },
      (error: any) => {
        console.error('Error updating article', error);
      }
    );
  }

  cancelEdit(): void {
    this.selectedArticle = null;
    this.modalService.dismissAll();
  }

  getImageData(article: any): string {
    if (!article || !article.image) {
      return ''; // Retourne une chaîne vide si aucune image n'est disponible
    }
  
    let imageType = this.getImageType(article.image);
  
    if (imageType !== '') {
      return `data:image/${imageType};base64,${article.image}`;
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

  showArticleDetails(article: any): void {
    this.selectedArticle = article;
    this.modalService.open(this.detailsModal, {
      ariaLabelledBy: 'articleDetailsModalLabel'
    });
  }
  

  openAddArticleModal(): void {
    const dialogRef = this.dialog.open(AddArticleComponent, {
      width: '700px',
      height: '990px',
      maxHeight: '80vh',
      panelClass: 'custom-dialog-container'

    });



    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadArticles();
      }
    });  }

  closeAddModal(): void {
    this.modalService.dismissAll();
    this.loadArticles();
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
        this.selectedArticle.image = base64String;
      }
    };
    reader.readAsDataURL(file);
  }

  get filteredArticles(): any[] {
    return this.articles.filter(article =>
      article.designation.toLowerCase().includes(this.searchText.toLowerCase()) ||
      article.reference.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  

  

}
