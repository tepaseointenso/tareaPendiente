import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Nota, listaNotas } from '../note';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  formulario:FormGroup;
  titulo:AbstractControl;
  estado:AbstractControl;
  descripcion:AbstractControl;
  hide:boolean = true;

  constructor(private fb: FormBuilder, private servicio:NoteServiceService) {

    this.formulario = fb.group({
      titulo:['', [Validators.required]],
      estado:['', [Validators.required]],
      descripcion:['', [Validators.required, Validators.maxLength(150)]]
    });

    this.titulo = this.formulario.controls['titulo'];
    this.estado = this.formulario.controls['estado'];
    this.descripcion = this.formulario.controls['descripcion'];
  }

  ngOnInit(): void { }

  crearNota(){

    let nota: Nota = {
      titulo: this.titulo.value,
      estado: this.estado.value,
      descripcion: this.descripcion.value
    }


    listaNotas.push(nota);

    this.servicio.guardarDatos(listaNotas).subscribe( datos => {
      console.log(datos);
    });

  }

  esValido():boolean{
    this.hide= false;
    return this.titulo.valid && this.estado.valid && this.descripcion.valid;
  }
  


}
