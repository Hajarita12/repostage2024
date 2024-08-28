import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import * as XLSX from 'xlsx';
import { SuccessMiseajourComponent } from '../success-miseajour/success-miseajour.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-miseajour-stock',
  templateUrl: './miseajour-stock.component.html',
  styleUrls: ['./miseajour-stock.component.css']
})
export class MiseajourStockComponent {
  selectedFile: File | null = null;
  uploadSuccess: boolean = false;
  uploadError: boolean = false;

  constructor(private adminService: AdminService,public dialogg: MatDialog) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log('Fichier sélectionné :', this.selectedFile);
  }

  uploadFile(): void {
    if (this.selectedFile) {
      console.log('Début de la lecture du fichier...');
      const reader: FileReader = new FileReader();

      reader.onload = (e: any) => {
        console.log('Fichier lu avec succès');
        const data: Uint8Array = new Uint8Array(e.target.result);
        const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'array' });
        const firstSheet: XLSX.WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
        const articlesData: any[] = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

        // Format data for backend
        const formattedData = articlesData.slice(1).map((row: any[]) => ({
          reference: row[0],
          designation: row[1],
          qteEnStock: row[2],
          qteReservee: row[3]
        }));

        // Process and update articles in the database
        this.updateArticles(formattedData);
      };

      reader.onerror = (error) => {
        console.error('Erreur lors de la lecture du fichier :', error);
        this.uploadError = true;
      };

      reader.readAsArrayBuffer(this.selectedFile);
    }
  }

  updateArticles(articlesData: any[]): void {
    console.log("articlesData :", articlesData);
    this.adminService.updateArticlesFromExcel(articlesData).subscribe(
      (response) => {
        console.log('Réponse du backend :', response);
        this.uploadSuccess = true;
        this.uploadError = false;
        const dialogRef = this.dialogg.open(SuccessMiseajourComponent, {
          width: '500px',
    
          data: {  }
        });
    
      },
      (error: any) => {
        console.error('Erreur lors de la mise à jour des articles :', error);
        this.uploadSuccess = false;
        this.uploadError = true;
      }
    );
  }


}
