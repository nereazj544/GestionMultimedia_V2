import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import e from 'express';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoginPage = false;
  isRegistroPage = false;

  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url.includes('/iniciarsesion')
        this.isLoginPage = event.url.includes('/registrarse')
      }
    })
  }


  onLonginClick(){
    console.log("Click en iniciar sesion")
  }
  onRegistroinClick(){
    console.log("Click en Registrarse")
    // this.isRegistroPage = true;
  }
}
