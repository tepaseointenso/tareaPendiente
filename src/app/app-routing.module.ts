import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNotesComponent } from '../app/edit-notes/edit-notes.component';
import { NewNoteComponent } from '../app/new-note/new-note.component';
import { ViewNotesComponent} from '../app/view-notes/view-notes.component';

const routes: Routes = [
  {path: "", component:NewNoteComponent},
  {path: "vistaNotas", component:ViewNotesComponent},
  {path: "actualizarNota", component:EditNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
