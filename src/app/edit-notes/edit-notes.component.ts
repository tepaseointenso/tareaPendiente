import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { listaNotas, notaActualizar} from '../note';
import { NoteServiceService } from '../note-service.service';
@Component({
  selector: 'app-actualizar-nota',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.scss']
})
export class EditNotesComponent implements OnInit {

  formulario:FormGroup;
  titulo:AbstractControl;
  estado:AbstractControl;
  descripcion:AbstractControl;
  hide:boolean = false;

  constructor( private fb: FormBuilder, private servicio:NoteServiceService ) {

    this.formulario = fb.group({
      titulo:['', [Validators.required]],
      estado:['', [Validators.required]],
      descripcion:['', [Validators.required, Validators.maxLength(150)]]
    });

    this.titulo = this.formulario.controls['titulo'];
    this.estado = this.formulario.controls['estado'];
    this.descripcion = this.formulario.controls['descripcion'];

  }

  ngOnInit(): void {
    let nota = notaActualizar[0];
    this.titulo.setValue(nota.titulo);
    this.estado.setValue(nota.estado);
    this.descripcion.setValue(nota.descripcion);
  }

  actualizarNota(){

    let nota = notaActualizar[0];


    for(let i = 0 ; i < listaNotas.length ; i++){

      if(listaNotas[i] === nota){
        nota.titulo = this.titulo.value;
        nota.estado = this.estado.value;
        nota.descripcion = this.descripcion.value;
        this.servicio.guardarDatos(listaNotas).subscribe( datos => {
          console.log(datos);
        });
        notaActualizar.splice(0, 1);
      }

    }

  }

  esValido():boolean{
    return this.titulo.valid && this.descripcion.valid;
  }

  ocultar():boolean{
    return this.hide= true;
  }
}
