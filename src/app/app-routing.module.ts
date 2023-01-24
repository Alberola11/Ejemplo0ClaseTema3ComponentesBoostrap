import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ArticulosComponent} from "./pages/articulos/articulos.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

//Definir los componentes que van a tener navegacion
const routes: Routes =
  [
    //se pasan entre llaves, como minimo tenemos que pasarle dos propiedades
    {
      //path hace referencia al nombre de la ruta, es decir al nombre que llmaremos para pintar el componente
      //el componente es el nombre de la clase que queremos cargar
      path:'home', component:HomeComponent
    },
    {
      path:'articulos', component:ArticulosComponent
    },
    //Para cargar un componente por defecto o cuando la ruta esta en blanco, se utiliza un path vacio: y le decimos cuual cargamos por defceto
    {path: '', redirectTo:'/home', pathMatch: "full"},//el full es para que compruebe todo el path completo y evitar errores
    //path: '**' --> Define una ruta incorrecta, y que tiene que hacer cuando tenga una ruta incorrecta--> culaquier string, incluidos los que estoy utilizando como path
    //siempre se pone al final (Si se pusiera al principio simepre nos mostraria el not found) y si pones una ruta al final te mostrara el not found que hemos creado.
    {
      path: '**',component:NotFoundComponent
    },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
