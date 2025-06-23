import { Component } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActorCreacionDTO } from '../actores';

@Component({
  selector: 'app-crear-actor',
  standalone: true, // Agrega esta línea porque es un componente standalone
  imports: [FormularioActoresComponent],
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css'] // Cambiar styleUrl a styleUrls
})
export class CrearActorComponent {
  guardarCambios(actor: ActorCreacionDTO){
    console.log('creando el actor', actor);
  }
}
