import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitasService } from '../../services/citas.service';
import { Cita } from '../../interfaces/cita.interface';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styles: [
  ]
})
export class CitaComponent implements OnInit, OnDestroy {
  id: string;
  private subsParamsRef: any;
  cita: Cita;
  form = new FormGroup({
              'nombre' : new FormControl('', [Validators.required, Validators.minLength(3)]),
              'fecha' : new FormControl('', [Validators.required]),
              'hora': new FormControl('', [Validators.required]),
              'asunto': new FormControl('', [Validators.required, Validators.minLength(3)]),
              'descripcion': new FormControl('', [Validators.required, Validators.minLength(3)])
            });

  horarios = [];
  asuntos = ["Uñas", "Cejas", "Microtatoos", "Masaje", "Evaluacion", "Otro" ];
  dias = [];
  meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ];
  years = [];

  constructor(private route: ActivatedRoute,
              private citasService : CitasService,
              private router: Router
              ) {

                console.log(this.form);

               }

  ngOnDestroy(): void {
    this.subsParamsRef.unsubscribe();
  }

  ngOnInit(): void {
    this.setHorarios();
    this.subsParamsRef = this.route.params.subscribe(params => {
      this.id = params['id'];
      // console.log("id: ", this.id);
      if(this.id !== 'new'){
        this.getCita();
      }
    });
  }

  getCita(){
    console.log('Metodo getCita del componente');

    this.citasService.getCita(this.id).valueChanges()
    .subscribe( (data : Cita) => {
      this.cita = data;
      this.cita.uid = this.id;
      this.setNombreCtrl = data.nombre;
      this.setFechaCtrl = data.fecha;
      this.setHoraCtrl = data.fecha;
      this.setAsuntoCtrl = data.asunto;
      this.setDescripcionCtrl = data.descripcion;
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

  onSubmit(){
    console.log('onsubmit');

    let citax : Cita = this.form.value;
    if(!this.form.valid){
      console.log('La forma no se mando por que no es valida');
      return;
    }
    if(this.id === "new" ){
      console.log("nueva cita");
      this.citasService.addCita(citax)
    } else {
      console.log("update cita");
      citax.uid = this.id;
      this.citasService.updateCita(citax)
    }
  }

  regresar(){
    this.router.navigateByUrl('\cuentas');
  }

  get getNombreCtrl(){
    return this.form.get('nombre');
  }

  set setNombreCtrl(value:string){
    this.form.get('nombre').setValue(value);
  }

  get fecha(){
    return this.form.get('fecha');
  }

  set setFechaCtrl(value:number){
    this.form.get('fecha').setValue(value);
  }

  get hora(){
    return this.form.get('hora');
  }

  set setHoraCtrl(value:number){
    this.form.get('hora').setValue(value);
  }

  get asunto(){
    return this.form.get('asunto');
  }

  set setAsuntoCtrl(value:string){
    this.form.get('asunto').setValue(value);
  }

  get descripcion(){
    return this.form.get('descripcion');
  }
  set setDescripcionCtrl(value:string){
    this.form.get('descripcion').setValue(value);
  }




}
