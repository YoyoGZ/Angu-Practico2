import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {
  title = 'Lista - Jorge Gomez';
  alumnos: string [] = ['Ignacio','Agustin', 'Alejandra', 'Barbara', 'Exequiel'];
  mrControl = 6;
  constructor() {
    setInterval(() => {
      this.mrControl++;
    }, 2000)
  }
// --- NgStyle ----

MyStyle = '2rem' 

// ---- NgIf ----

EsNgIf = true;

// ---- Pipes -----

IsTheDate = new Date();

}

