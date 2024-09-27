import { Component } from '@angular/core';
import { Cliente } from '../../model/Cliente';
import { RegistrarService } from '../../service/registrar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  cliente:Cliente=new Cliente();
  constructor(private registrarService:RegistrarService,
    private router:Router){

  }
  registrar():void{
    this.registrarService.registrar(this.cliente).subscribe(
      {
        next:data=>this.router.navigate(["/login"]),
        error:err=>alert("Usuario ya existe, no se pudo registrar!")
      }
    );
  }
}
