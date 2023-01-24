import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  claseActive='';

  //Ojo es posible que cuando creamos un componente desde codigo no nos cree el constructor por defecto y tenemos que asegurarnos de que este
//b.	Para navegar necesitamos un modulo de angular que es el Router Para importarlo lo tenemos que pasar como pararmetro del constructor
  constructor(private  router:Router) { }

  ngOnInit(): void {
  }

  navegar() {
    this.router.navigate(['articulos']);//le pasamos dentro del array la ruta
    this.claseActive='active';//esta para hacer que al pasar en active se ponga sonmbreado como en el otro metodo

  }

  borrarActive() {
    this.claseActive='';//para que al cambiar entre paginas se resetee y borre el contenido y no se quede siempre activado el sombreado

  }
}
