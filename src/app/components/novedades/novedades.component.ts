import { Component } from '@angular/core';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css'
})
export class NovedadesComponent {
  isVideogameFilter: boolean = false;
  filtros = ['Libros', 'Peliculas', 'Series', 'Videojuegos'];
  plataformas = ['PS', 'XBOX', 'SWITCH', 'PC']


}
