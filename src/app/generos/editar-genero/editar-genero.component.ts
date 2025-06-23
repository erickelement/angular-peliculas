import { Component, Input, numberAttribute } from '@angular/core';
import { GeneroDTO, GenerosCreacionDTO } from '../generos';
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';

@Component({
    selector: 'app-editar-genero',
    imports: [FormularioGeneroComponent],
    templateUrl: './editar-genero.component.html',
    styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {
  @Input({transform: numberAttribute})
  id!: number;

  genero: GeneroDTO = {id: 1, nombre: 'Comedia'};

  guardarCambios(genero: GenerosCreacionDTO){
    console.log('editando el genero', genero);
  }
}
