import { Component, OnInit } from '@angular/core';
import {Articulos} from "../../models/Articulos";

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {

  articulosList: Articulos[]=[];
  categoriasList=['Consolas', 'Portátiles', 'telefonia', 'moviles']

  //1. Podemos trabajar con los campos por separado--> FormControl
  //2. podemos trabajar todos los campos juntos--> FormGroup--> es un array de FormControl
  constructor() { }

  ngOnInit(): void {
    this.crearListaArticulos();
  }

  //simulamos que estamos llmando a una api que nos ha devuelto un array de articlos
  crearListaArticulos(): void{
    const articulo = new Articulos(
      'iphone 14',
      ['Telefonía', 'Caro'],
      300,
      1200
      ,true

    );
    for (let i= 0; i <10; i++){

      this.articulosList.push(articulo);
    }
    console.table(this.articulosList);
  }

  addArticulo(): void {
    const  articulo = new Articulos('Nuevo',['Nuevo'],0,500, false)
    this.articulosList.push(articulo)
  }

  removeArticulo(): void{

    this.articulosList.pop();//con este eleiminamos el ultimo articulo de la lista

  }
}
