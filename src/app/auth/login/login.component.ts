import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getErrorMessages(controlName: string): string[] {
    const control = this.loginForm.get(controlName);
    if (!control || !control.touched || !control.errors) return [];

    const errors = [];
    if (control.errors['required']) errors.push('Este campo es obligatorio.');
    if (control.errors['email']) errors.push('Debe ser un correo válido.');
    if (control.errors['minlength']) errors.push(`Mínimo ${control.errors['minlength'].requiredLength} caracteres.`);
    return errors;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login exitoso:', this.loginForm.value);
      // Aquí podrías redirigir o autenticar
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
