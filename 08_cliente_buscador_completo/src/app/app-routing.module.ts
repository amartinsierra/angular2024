import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './controller/buscador/buscador.component';
import { AltaComponent } from './controller/alta/alta.component';

const routes: Routes = [
  {
    path:"buscar",
    component:BuscadorComponent
  },
  {
    path:"nuevo",
    component:AltaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
