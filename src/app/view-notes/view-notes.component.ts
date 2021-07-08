import { Component, OnInit } from '@angular/core';
import { listaNotas, Nota, notaActualizar } from '../note';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-vista-notas',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.scss']
})
export class ViewNotesComponent implements OnInit {

  notas:Array<Nota> = listaNotas;

  constructor(private servicio:NoteServiceService) {

    this.servicio.recibirDatos().subscribe( datos => {
      //console.log(datos);
      for(let i = 0 ; i < datos.length ; i++){
        listaNotas[i] = datos[i];
      }
    });

  }

  ngOnInit(): void { }

  eliminarNota(nota:Nota){
    for(let i = 0 ; i < this.notas.length ; i++){
      if(nota == this.notas[i]){
        this.notas.splice(i, 1);
        //console.log(this.notas);
        this.servicio.guardarDatos(this.notas).subscribe(datos => {
          console.log(datos);
        });
        return;
      } 
    }
  }

  actualizarNota(nota:Nota){
    notaActualizar[0] = nota;
  }

}
