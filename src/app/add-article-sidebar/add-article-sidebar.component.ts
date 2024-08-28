import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-article-sidebar',
  templateUrl: './add-article-sidebar.component.html',
  styleUrls: ['./add-article-sidebar.component.css']
})
export class AddArticleSidebarComponent implements OnInit {

  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  

  constructor(private elementRef: ElementRef, private router: Router,private adminService: AdminService) { }
  assistant: any = {
    id: null,
    username: '',
    email: '',
    image: ''
  };
  ngOnInit(): void {
    // Supposons que les informations du commercial sont déjà stockées en session
    const assistantDataString = sessionStorage.getItem('ASSISTANT');
    if (assistantDataString) {
      const assistantData = JSON.parse(assistantDataString);
      this.assistant.id = assistantData.id;
}
    this.adminService.getAssistantById(this.assistant.id).subscribe(
      (data: any) => {
        this.assistant.username = data.username;
        this.assistant.email = data.email;
        const imageType = this.getImageType(data.image);
        this.assistant.image = `data:image/${imageType};base64,${data.image}`;
      },
      (error:any) => {
        console.error('Failed to retrieve commercial data:', error);
        // Gérer l'erreur de récupération des données du commercial
      }
    );
    console.log("Assistant récupéré :",this.assistant);

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
