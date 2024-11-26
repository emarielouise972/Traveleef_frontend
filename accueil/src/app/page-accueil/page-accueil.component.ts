import { Component } from '@angular/core';
type Recommendations = {
  destinations: string,
  description: string,
  image:string
}
@Component({
  selector: 'app-page-accueil',
  standalone: true,
  imports: [],
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.css'
})
export class PageAccueilComponent {
  recommendations: any[] = [
    {
      image:  'favicon.ico',
      destination: 'Maldives',
      description:
        'Plages de sable blanc, lagons turquoise et couchers de soleil spectaculaires : les Maldives sont un rêve exotique inoubliable.',     
    },   
  ];
}
