import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-recherche-voyages',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './recherche-voyages.component.html',
  styleUrl: './recherche-voyages.component.css'
})
export class RechercheVoyagesComponent {

}
