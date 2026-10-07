import { Component, inject, signal } from '@angular/core';
import { form, required, min, max, minLength, FormField } from '@angular/forms/signals';
import { Resena } from '../../interfaces/resena';
import { ResenaService } from '../../services/resena.service';

@Component({
  imports: [FormField],
  selector: 'app-resenas-componente',
  styleUrl: './resenas-componente.css',
  templateUrl: './resenas-componente.html',
})
export class ResenasComponente {
  private resenaService = inject(ResenaService)
  listaResenas: Resena[] = []

  alerta = signal({ tipo: '', texto: '' });

  resenaModelo = signal<Resena>({
    cliente: '',
    comentario: '',
    calificacion: 5
  });

  constructor() {
    this.mostrar()
  }

  resenaFormulario = form(this.resenaModelo, (esquema) => {
    required(esquema.cliente, { message: 'El nombre es obligatorio' });
    minLength(esquema.comentario, 10, { message: 'El comentario debe tener al menos 10 caracteres' });
    min(esquema.calificacion, 1, { message: 'La calificación mínima es 1' });
    max(esquema.calificacion, 5, { message: 'La calificación máxima es 5' });
  });

  guardar(evento: Event) {
    evento.preventDefault();
    if (this.resenaFormulario().invalid()) {
      this.mostrarAlerta('danger', 'Completa todos los campos correctamente');
      return;
    }
    let resena = {
      cliente: this.resenaModelo().cliente,
      comentario: this.resenaModelo().comentario,
      calificacion: this.resenaModelo().calificacion
    };
    this.resenaService.guardar(resena)
    this.mostrarAlerta('success', 'Reseña guardada correctamente');
    this.resenaModelo.set({ cliente: '', comentario: '', calificacion: 5 });
  }

  mostrar() {
    this.listaResenas = this.resenaService.mostrar()
  }

  mostrarAlerta(tipo: string, texto: string) {
    this.alerta.set({ tipo: tipo, texto: texto });
    setTimeout(() => this.alerta.set({ tipo: '', texto: '' }), 3000);
  }
}