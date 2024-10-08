import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { BuscadorComponent } from './controller/buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AltaComponent } from './controller/alta/alta.component';
import { MenuComponent } from './controller/menu/menu.component';
import { BuscarUrlComponent } from './controller/buscar-url/buscar-url.component';

@NgModule({
  declarations: [

    BuscadorComponent,
      AltaComponent,
      MenuComponent,
      BuscarUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [MenuComponent]
})
export class AppModule { }
