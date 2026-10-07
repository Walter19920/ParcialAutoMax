import { Component, inject } from '@angular/core';
import { Vehiculo } from '../../interfaces/vehiculo';
import { TiendaService } from '../../services/tienda.service';

@Component({
  selector: 'app-vehiculos-componente',
  styleUrl: './vehiculos-componente.css',
  templateUrl: './vehiculos-componente.html',
})
export class VehiculosComponente {
  private tiendaService = inject(TiendaService)
  listaVehiculos: Vehiculo[] = []
  categorias: string[] = ['Sedán', 'SUV', 'Camioneta', 'Deportivo']

  constructor() {
    this.mostrar()
  }

  mostrar() {
    this.listaVehiculos = this.tiendaService.mostrarVehiculos()
  }

  filtrar(categoria: string) {
    this.listaVehiculos = this.tiendaService.mostrarPorCategoria(categoria)
  }
}