import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { primeraLetraMayuscula } from '../../compartidos/componentes/funciones/validaciones';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GenerosCreacionDTO } from '../generos';

@Component({
    selector: 'app-crear-generos',
    imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGeneroComponent],
    templateUrl: './crear-generos.component.html',
    styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {

  private router = inject(Router);


  guardarCambios(genero: GenerosCreacionDTO){
    // ... guardar cambios
    // this.router.navigate(['/generos']);
    console.log('creando el genero', genero);
  }

}
