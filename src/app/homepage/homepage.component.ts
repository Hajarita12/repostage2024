import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Assurez-vous que le DOM est entièrement chargé avant d'initialiser Slick Carousel
    this.initializeSlickCarousel();
    this.initializeTabletSlider();
    this.initializeGamingSlider();
    this.initializeMicSlider();
    this.initializeAccessSlider();
    this.initializeEcouteursSlider();
    this.initializeMarquesSlider();


  }    
  
  
  toggleDropdown(event: MouseEvent) {
    const dropdownMenu = this.dropdownMenu.nativeElement as HTMLElement;
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation(); // Empêche la propagation de l'événement pour éviter la fermeture immédiate du menu
  }
  initializeSlickCarousel(): void {
    const slider = document.querySelector('.slider') as HTMLElement;
    if (slider) {
      (window as any).$(slider).slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Activer le défilement automatique
        autoplaySpeed: 1500 // Vitesse du défilement automatique (en millisecondes)
      });
    }
  }
  initializeEcouteursSlider(): void {
    const slider = document.querySelector('.ecouteurs-slider') as HTMLElement;
    if (slider) {
      (window as any).$(slider).slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Activer le défilement automatique
        autoplaySpeed: 1500 // Vitesse du défilement automatique (en millisecondes)
      });
    }
  }
  initializeMicSlider(): void {
    const slider = document.querySelector('.mic-slider') as HTMLElement;
    if (slider) {
      (window as any).$(slider).slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Activer le défilement automatique
        autoplaySpeed: 1500 // Vitesse du défilement automatique (en millisecondes)
      });
    }
  }
  initializeGamingSlider(): void {
    const slider = document.querySelector('.gaming-slider') as HTMLElement;
    if (slider) {
      (window as any).$(slider).slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Activer le défilement automatique
        autoplaySpeed: 1500 // Vitesse du défilement automatique (en millisecondes)
      });
    }
  }
  initializeTabletSlider(): void {
    const tabletSlider = document.querySelector('.tab-slider') as HTMLElement;
    if (tabletSlider) {
      (window as any).$(tabletSlider).slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
      });
    }
  }
  initializeAccessSlider(): void {
    const tabletSlider = document.querySelector('.accessoires-slider') as HTMLElement;
    if (tabletSlider) {
      (window as any).$(tabletSlider).slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
      });
    }
  }
  initializeMarquesSlider(): void {
    const tabletSlider = document.querySelector('.slider-marque') as HTMLElement;
    if (tabletSlider) {
      (window as any).$(tabletSlider).slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
      });
    }
  }
  
  
  


}
