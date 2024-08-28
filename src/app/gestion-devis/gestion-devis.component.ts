import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-gestion-devis',
  templateUrl: './gestion-devis.component.html',
  styleUrls: ['./gestion-devis.component.css']
})
export class GestionDevisComponent implements OnInit {

  
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  

  constructor(private elementRef: ElementRef, private router: Router,private adminService: AdminService) { }
  commercial: any = {
    id: null,
    username: '',
    email: '',
    image: ''
  };
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

  toggleDropdown(event: MouseEvent) {
    const dropdownMenu = this.dropdownMenu.nativeElement as HTMLElement;
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation(); // Empêche la propagation de l'événement pour éviter la fermeture immédiate du menu
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const dropdownMenu = this.dropdownMenu.nativeElement as HTMLElement;
    if (!(event.target as HTMLElement).closest('.dropdown') && dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none';
    }
  }

  logout() {
    sessionStorage.removeItem('COMMERCIAL'); // Supprimer les données de session
    this.router.navigate(['/']); // Rediriger vers la page de connexion
  }


}
