import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-side',
  templateUrl: './dashboard-side.component.html',
  styleUrls: ['./dashboard-side.component.css']
})
export class DashboardSideComponent  {

 
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

  constructor(private elementRef: ElementRef, private router: Router) { }

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
    sessionStorage.removeItem('ADMIN'); // Supprimer les données de session
    this.router.navigate(['/']); // Rediriger vers la page de connexion
  }
}
