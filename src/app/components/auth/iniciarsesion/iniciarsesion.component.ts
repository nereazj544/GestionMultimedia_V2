import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-iniciarsesion',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './iniciarsesion.component.html',
  styleUrl: './iniciarsesion.component.css'
})
export class IniciarsesionComponent implements OnDestroy, OnInit {
  // TODO MOSTRAR CONTRASEÑA
  showPass = false;

  togglePass(){
    this.showPass = !this.showPass;
  }


  // TODO IMAGENES
  imagenes = [
    'https://i.pinimg.com/736x/24/1a/33/241a33e322eade5ed3f487b2ac9ea9f5.jpg',
    'https://i.pinimg.com/236x/f8/1b/39/f81b39d7555259c63c23cca0ac0b635e.jpg',
  ];

  currentImgLng = this.imagenes[0];

  private imgIn: any;
  private curretnImgID = 0;


  ngOnInit() {
    this.empezar();
  }

  ngOnDestroy() {
    if (this.imgIn) {
      clearInterval(this.imgIn)
    }
  }

  private empezar() {
    this.imgIn = setInterval(() => {
      this.curretnImgID = (this.curretnImgID + 1) % this.imagenes.length
      this.currentImgLng = this.imagenes[this.curretnImgID]
    }, 5000)
  }
}
