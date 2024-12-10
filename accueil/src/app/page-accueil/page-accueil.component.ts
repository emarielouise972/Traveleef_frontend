import { NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';

type Recommendations = {
  destinations: string,
  description: string,
  image:string
}
type Voyage = {
  id_voyage : number,
  depart : string,
  arrivee : string,
  date_depart : Date,
  date_arrivee : Date,
  prix : number,
}

@Component({
  selector: 'app-page-accueil',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.css'
})
export class PageAccueilComponent {

  formData = {
    departure_id: '', // Code pour le départ
    arrival_id: '', // Code pour l'arrivée
    outbound_date: '', // Date de départ
    return_date: '', // Date de retour
    adults: 1, // Nombre d'adultes
    children: 0, // Nombre d'enfants
    animals: 0, // Nombre d'animaux
    reduced_mobility: 0, // Nombre de personnes à mobilité réduite
  };
  apiUrl = 'http://localhost:5000/search'
  constructor(private http: HttpClient) {}

 submitForm() {
    // Requête POST
    this.http.post(this.apiUrl, this.formData).subscribe(
      (response) => {
        console.log('Réponse du backend :', response);
      },
      (error) => {
        console.error('Erreur lors de l’envoi :', error);
      }
    );
  }
  
  //rechercheVoyages: Voyage[] = [];

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
  ];

  /*ngOnInit() {
    this.http.get<Voyage[]>('http://localhost:5000/search').subscribe((data) => {
      this.rechercheVoyages = data;
    });
  }*/
}
