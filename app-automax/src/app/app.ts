import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehiculosComponente } from './components/vehiculos-componente/vehiculos-componente';
import { PromocionesComponente } from './components/promociones-componente/promociones-componente';
import { ResenasComponente } from './components/resenas-componente/resenas-componente';
import { NosotrosComponente } from './components/nosotros-componente/nosotros-componente';

@Component({
  imports: [RouterOutlet, VehiculosComponente, PromocionesComponente, ResenasComponente, NosotrosComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app_automax');
}