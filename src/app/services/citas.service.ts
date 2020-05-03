import { Injectable } from '@angular/core';
import { Cita } from '../interfaces/cita.interface';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  citasRef: AngularFireList<Cita>;
  public citas;

  constructor(private db : AngularFireDatabase) { 
    this.citasRef  = this.db.list('citas');
  }

  cargarCitas() {
    console.log('cargando citas');
    return this.citasRef.valueChanges()
                 .subscribe( data => {
                    console.log(data);

                    data.forEach(element => {
                      console.log("element: ", element);                      
                    });
                    this.citas = data;
                    return (data);
                 });
  }

  addCita(cita: Cita){
    if(cita.asunto.length === 0){
      return;
    }

    this.agregarCita( cita );
  }

   agregarCita(cita : Cita ){
     this.citasRef.push(cita);
   }

}
