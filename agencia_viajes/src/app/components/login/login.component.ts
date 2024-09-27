import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Cliente } from '../../model/Cliente';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  usuario:string;
  password:string;
  cliente:Cliente;
  constructor(private loginService:LoginService,
    private menuComponent:MenuComponent,
    private router:Router){

  }
  login():void{
    this.loginService.login(this.usuario,this.password).subscribe(data=>{
      this.cliente=data;
      if(this.cliente){
        //para guardar los datos del cliente anutenticado
        //en el componente de menú
        this.menuComponent.cliente=data;
        this.menuComponent.enabledActions=true;
        this.menuComponent.enabledEnter=false;
        //para caragar la página de reservar una vez el cliente
        //se ha autenticado
        this.router.navigate(["/reservar"]);
      }else{
        alert("usuario no autenticado");
      }
    });
  }
}
