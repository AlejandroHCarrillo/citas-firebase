import { Injectable } from '@angular/core';
import { Cita } from '../interfaces/cita.interface';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private itemsCollection: AngularFirestoreCollection<Cita>;

  constructor(public db : AngularFireDatabase) { 

  }

  getCitas() {
    // console.log('cargando citas de la base de datos');
    return this.db.list('citas').snapshotChanges();
  }

  getCita(id: string) {
    // console.log('Obtener una cita', id);  
    return this.db.object('citas/' + id);
  }

  addCita(cita: Cita){
    this.db.list('citas').push(cita);
  }
  
  updateCita(cita: Cita){
    this.db.object('citas/' + cita.uid).update(cita); 
  }
  
  deleteCita(citaId){
    this.db.object('citas/' + citaId).remove();
  }
  
}
