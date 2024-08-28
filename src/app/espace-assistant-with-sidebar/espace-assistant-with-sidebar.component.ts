import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-espace-assistant-with-sidebar',
  templateUrl: './espace-assistant-with-sidebar.component.html',
  styleUrls: ['./espace-assistant-with-sidebar.component.css']
})
export class EspaceAssistantWithSidebarComponent  {
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  @ViewChild('notificationDropdownMenu') notificationDropdownMenu!: ElementRef;

  notificationsCount: number = 0;
  notificationMessage: string = 'Aucune notification.';
  notificationsHidden: boolean = false;

  assistant: any = {
    id: null,
    username: '',
    email: '',
    image: '',
    droits: []  // Ajoutez cette propriété pour les droits

  };

  constructor(private elementRef: ElementRef, private router: Router, private adminService: AdminService) { }

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
        this.assistant.droits = data.droits;  // Assurez-vous que les droits sont bien récupérés

      },
      (error: any) => {
        console.error('Failed to retrieve commercial data:', error);
      }
    );
    this.loadNotifications();
  }

  loadNotifications() {
    this.adminService.getalldevis().subscribe((devis: any[]) => {
      const pendingInvoices = devis.filter((devi: { etat: string; }) => devi.etat === 'En attente');
      this.notificationsCount = pendingInvoices.length; // Met à jour le compteur correctement
  
      if (this.notificationsCount > 0) {
        this.notificationMessage = 'Vous avez ' + this.notificationsCount + ' devis en attente.';
      } else {
        this.notificationMessage = 'Aucune notification.';
      }
    }, (error: any) => {
      console.error('Failed to load invoices:', error);
    });
  }

  toggleNotifications(event: MouseEvent) {
    const notificationDropdownMenu = this.notificationDropdownMenu.nativeElement as HTMLElement;
    notificationDropdownMenu.style.display = notificationDropdownMenu.style.display === 'block' ? 'none' : 'block';
    this.notificationsHidden = true; // Masquer le badge
    event.stopPropagation();
  }
  @HostListener('document:click', ['$event'])
  onClickk(event: MouseEvent) {
    const notificationDropdownMenu = this.notificationDropdownMenu.nativeElement as HTMLElement;
    if (!(event.target as HTMLElement).closest('.notification-container') && notificationDropdownMenu.style.display === 'block') {
      notificationDropdownMenu.style.display = 'none';
      this.notificationsHidden = false;
   }
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


