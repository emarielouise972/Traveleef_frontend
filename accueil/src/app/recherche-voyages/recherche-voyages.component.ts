import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-recherche-voyages',
  standalone: true,
  imports: [NgFor,DetailComponent],
  templateUrl: './recherche-voyages.component.html',
  styleUrl: './recherche-voyages.component.css'
})
export class RechercheVoyagesComponent {

}
