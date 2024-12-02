import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
type Recommendations = {
  destinations: string,
  description: string,
  image:string
}
@Component({
  selector: 'app-page-accueil',
  standalone: true,
  imports: [NgFor],
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.css'
})
export class PageAccueilComponent {
  recommendations = [
    {
      title: 'Maldives',
      description:
        'Plages de sable blanc, lagons turquoise et couchers de soleil spectaculaires : les Maldives sont un rêve exotique inoubliable.',
      image: 'accueil/public/maldive.jpg',
    },
    {
      title: 'Maldives',
      description:
        'Plages de sable blanc, lagons turquoise et couchers de soleil spectaculaires : les Maldives sont un rêve exotique inoubliable.',
      image: 'accueil/public/maldive.jpg',
    },
    {
      title: 'Maldives',
      description:
        'Plages de sable blanc, lagons turquoise et couchers de soleil spectaculaires : les Maldives sont un rêve exotique inoubliable.',
      image: 'accueil/public/maldive.jpg',
    },
  ];
}
