import { Service } from '@angular/core';
import { Resena } from '../interfaces/resena';

@Service()
export class ResenaService {
  private listaResenas: Resena[] = [
    { cliente: 'Luis Paredes', comentario: 'Compré mi SUV aquí y la atención fue excelente.', calificacion: 5 },
    { cliente: 'Carla Mendoza', comentario: 'Buen precio y financiamiento rápido.', calificacion: 4 }
  ]

  guardar(resena: Resena) {
    this.listaResenas.push(resena);
  }

  mostrar(): Resena[] {
    return this.listaResenas;
  }
}