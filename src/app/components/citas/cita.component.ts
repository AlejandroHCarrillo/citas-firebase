import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitasService } from '../../services/citas.service';
import { Cita } from '../../interfaces/cita.interface';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styles: [
  ]
})
export class CitaComponent implements OnInit, OnDestroy {
  id: string;
  private subscriptionRef: any;
  cita: Cita;

  horarios = [];
  asuntos = ["Uñas", "Cejas", "Microtatoos", "Masaje", "Evaluacion", "Otro" ];
  dias = [];
  meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ];
  years = [];

  constructor(private route: ActivatedRoute, private citasService : CitasService) { }

  ngOnDestroy(): void {
    this.subscriptionRef.unsubscribe();
  }

  ngOnInit(): void {
    this.setHorarios();
    this.subscriptionRef = this.route.params.subscribe(params => {
      this.id = params['id'];
      // console.log("id: ", this.id);
      this.getCita();
    });
  }

  getCita(){
    console.log('Metodo getCita del componente');

    this.citasService.getCita(this.id).valueChanges()
    .subscribe( (data : Cita) => {
      this.cita = data;
    });

  }

  setHorarios(){
    const horaComida = 5;
    for (let i = 0; i < 8; i++) {
      if (i!=horaComida){
        this.horarios.push(`${i+9}:00`);
        this.horarios.push(`${i+9}:30`);
      }
    }

    for (let i = 1; i <= 31; i++) {
      this.dias.push(i);
    }

    const hoy = new Date();
    const anioActual = hoy.getFullYear();
    
    this.years.push(anioActual);
    this.years.push(anioActual+1);


  }

}
