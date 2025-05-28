import { Component } from '@angular/core';

@Component({
  selector: 'app-perfiles',
  standalone: true,
  imports: [],
  templateUrl: './perfiles.component.html',
  styleUrl: './perfiles.component.css'
})
export class PerfilesComponent {
   usuario = {
    nombre: 'Luis Ángel Matadamas',
    email: 'luis@example.com',
    rol: 'Administrador',
    foto: 'https://via.placeholder.com/120'
  };

}
