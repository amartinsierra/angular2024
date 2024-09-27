import { Cliente } from '../../model/Cliente';
import { LoginComponent } from './../login/login.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  cliente:Cliente;
  enabledActions:boolean=false;
  enabledEnter:boolean=true;
}
