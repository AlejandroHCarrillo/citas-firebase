import { Component } from '@angular/core';
import { Cita } from 'src/app/interfaces/cita.interface';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styles: [
  ]
})
export class CitasComponent {
  // allGames: any;
  allCitas;

  constructor(public _cs : CitasService ) {
    this.cargarCitas();
  }

  agregarCita( textbox: HTMLInputElement ){
    if(textbox.value.length === 0){
      return;
    }

    let cita: Cita = {
      nombre: "sss",
      asunto: textbox.value, 
      descripcion : textbox.value,
      estatus: "nueva",
      fecha: new Date().getTime()
      // , uid: this.usuario.uid
    }
    textbox.value = "";
    return this._cs.addCita(cita);
  }

  cargarCitas(){
    this._cs.cargarCitas();
  }

}