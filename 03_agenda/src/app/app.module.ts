import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AgendaComponent } from './controller/agenda/agenda.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AgendaComponent]
})
export class AppModule { }
