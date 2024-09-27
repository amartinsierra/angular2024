import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { MisReservasComponent } from './components/mis-reservas/mis-reservas.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"registrar",
    component:RegistrarComponent
  },
  {
    path:"reservar",
    component:ReservarComponent
  },
  {
    path:"misreservas",
    component:MisReservasComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
