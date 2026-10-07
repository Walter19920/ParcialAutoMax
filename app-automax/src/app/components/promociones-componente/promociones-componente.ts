import { Component, inject } from '@angular/core';
import { Promocion } from '../../interfaces/promocion';
import { TiendaService } from '../../services/tienda.service';

@Component({
  selector: 'app-promociones-componente',
  styleUrl: './promociones-componente.css',
  templateUrl: './promociones-componente.html',
})
export class PromocionesComponente {
  private tiendaService = inject(TiendaService)
  listaPromociones: Promocion[] = []

  constructor() {
    this.mostrar()
  }

  mostrar() {
    this.listaPromociones = this.tiendaService.mostrarPromociones()
  }
}