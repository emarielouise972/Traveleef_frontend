import { NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
type Recommendations = {
  destinations: string;
  description: string;
  image: string;
};
type Voyage = {
  id_voyage: number;
  depart: string;
  arrivee: string;
  date_depart: Date;
  date_arrivee: Date;
  prix: number;
};

@Component({
  selector: 'app-page-accueil',
  standalone: true,
  imports: [NgFor, FormsModule,RouterLink],
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.css',
})
export class PageAccueilComponent {
  formData = {
    departure_id: '', // Code pour le départ
    arrival_id: '', // Code pour l'arrivée
    outbound_date: '', // Date de départ
    return_date: '', // Date de retour
    adults: 1, // Nombre d'adultes
    children: 0, // Nombre d'enfants
    /*animals: 0, // Nombre d'animaux
    reduced_mobility: 0, // Nombre de personnes à mobilité réduite*/
  };
  apiUrl = 'http://localhost:5000/search';
  constructor(private http: HttpClient) {}

  submitForm() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Requête POST
    this.http.post<Voyage[]>(this.apiUrl, this.formData, { headers }).subscribe(
      (response) => {
        console.log('Réponse du backend :', response);
      },
      (error) => {
        console.error('Erreur lors de l’envoi :', error);
      }
    );
  }

/*
  voyages: any[] = [];
  submitForm() {
    // Convertir formData en paramètres d'URL
    const params = new HttpParams()
      .set('departure_id', this.formData.departure_id)
      .set('arrival_id', this.formData.arrival_id)
      .set('outbound_date', this.formData.outbound_date)
      .set('return_date', this.formData.return_date || '') // Optionnel
      .set('adults', this.formData.adults.toString())
      .set('children', this.formData.children.toString());

    // Effectuer la requête GET avec les paramètres

    this.http.get<Voyage[]>(this.apiUrl, { params }).subscribe(
      (response) => {
        console.log('Résultats API :', response);
        this.voyages = response; // Mise à jour des résultats
      },
      (error) => {
        console.error('Erreur lors de la requête :', error);
      }
    );*/
  //}

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
  /*
  ngOnInit() {
    this.http.get<Voyage[]>('http://localhost:5000/search').subscribe((data) => {
      this.voyages = data;
    });
  }*/
}
