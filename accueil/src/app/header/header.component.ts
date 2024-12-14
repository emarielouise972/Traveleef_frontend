import {Component, ElementRef, Renderer2} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
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

}
