import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-show-info-commercial',
  templateUrl: './show-info-commercial.component.html',
  styleUrls: ['./show-info-commercial.component.css']
})
export class ShowInfoCommercialComponent implements OnInit {
  commercial: any = {
    id: null,
    username: '',
    email: '',
    image: ''
  };

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    // Supposons que les informations du commercial sont déjà stockées en session
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
      (error:any) => {
        console.error('Failed to retrieve commercial data:', error);
        // Gérer l'erreur de récupération des données du commercial
      }
    );
    console.log("Commercial récupéré :",this.commercial);

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
}
