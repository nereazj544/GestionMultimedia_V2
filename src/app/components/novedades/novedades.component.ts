import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css'
})
export class NovedadesComponent {
  isVideogameFilter: boolean = false;
  filtros = ['Libros', 'Peliculas', 'Series', 'Videojuegos'];
  plataformas = ['PS5', 'XBOX X|S', 'SWITCH', 'PC'];
  searchText: string = '';
  currentFilter: string = '';

  constructor() { }

  toggleFilter(filtro: string) {
    if (filtro === 'Videojuegos') {
      this.isVideogameFilter = !this.isVideogameFilter;
    }
    this.currentFilter = filtro;
  }

  filtrarPorPlataforma(plataforma: string) {
    console.log('Filtrando por plataforma:', plataforma);
  }

  buscar(event: any) {
    this.searchText = event.target.value;
    console.log('Buscando:', this.searchText);
  }
}