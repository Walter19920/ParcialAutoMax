import { Component, inject } from '@angular/core';
import { Informacion } from '../../interfaces/informacion';
import { TiendaService } from '../../services/tienda.service';

@Component({
  selector: 'app-nosotros-componente',
  styleUrl: './nosotros-componente.css',
  templateUrl: './nosotros-componente.html',
})
export class NosotrosComponente {
  private tiendaService = inject(TiendaService)
  listaInformacion: Informacion[] = []

  constructor() {
    this.mostrar()
  }

  mostrar() {
    this.listaInformacion = this.tiendaService.mostrarInformacion()
  }
}