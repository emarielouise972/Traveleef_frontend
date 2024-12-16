import {Component, ElementRef, HostListener, Renderer2} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  links = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/about' },
    { label: 'Services', path: '/services' },
    // Ajoute d'autres liens ici
  ];

  // Fonction toggleMenu pour ouvrir/fermer le menu
  toggleMenu(): void {
    const hamMenu = this.el.nativeElement.querySelector('.ham-menu');
    const offScreenMenu = this.el.nativeElement.querySelector('.off-screen-menu');

    if (hamMenu && offScreenMenu) {
      const isActive = hamMenu.classList.contains('active');

      if (isActive) {
        // Désactiver
        this.renderer.removeClass(hamMenu, 'active');
        this.renderer.removeClass(offScreenMenu, 'active');
      } else {
        // Activer
        this.renderer.addClass(hamMenu, 'active');
        this.renderer.addClass(offScreenMenu, 'active');
      }
    }
  }

  // Écouter les clics sur le document entier pour fermer le menu
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const clickedInside = event.target instanceof HTMLElement &&
      (event.target.closest('.off-screen-menu') || event.target.closest('.ham-menu'));

    // Si on clique à l'extérieur du menu et du bouton hamburger, fermer le menu
    if (!clickedInside) {
      const hamMenu = this.el.nativeElement.querySelector('.ham-menu');
      const offScreenMenu = this.el.nativeElement.querySelector('.off-screen-menu');

      // Si le menu est ouvert, on le ferme
      if (hamMenu && offScreenMenu && hamMenu.classList.contains('active')) {
        this.renderer.removeClass(hamMenu, 'active');
        this.renderer.removeClass(offScreenMenu, 'active');
      }
    }
  }
}
