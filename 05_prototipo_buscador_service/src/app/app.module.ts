import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { BuscadorComponent } from './controller/buscador/buscador.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [BuscadorComponent]
})
export class AppModule { }
