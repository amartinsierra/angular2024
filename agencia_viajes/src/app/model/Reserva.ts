import { Hotel } from "./Hotel";
import { Vuelo } from "./Vuelo";

export class Reserva{
  idReserva:number;
	usuario:string;
  vuelo:Vuelo;
  hotel:Hotel;
  precio:number;
}
