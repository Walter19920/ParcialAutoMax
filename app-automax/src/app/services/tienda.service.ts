import { Service } from '@angular/core';
import { Vehiculo } from '../interfaces/vehiculo';
import { Promocion } from '../interfaces/promocion';
import { Informacion } from '../interfaces/informacion';

@Service()
export class TiendaService {
  private listaVehiculos: Vehiculo[] = [
    { nombre: 'Corolla', imagen: 'https://placehold.co/400x250?text=Corolla', precio: 22000, marca: 'Toyota', modelo: 'Corolla XLi', anio: 2024, categoria: 'Sedán', caracteristicas: 'Motor 1.8L, automático, 5 asientos' },
    { nombre: 'Elantra', imagen: 'https://placehold.co/400x250?text=Elantra', precio: 20500, marca: 'Hyundai', modelo: 'Elantra GLS', anio: 2023, categoria: 'Sedán', caracteristicas: 'Motor 2.0L, pantalla táctil, cámara de retroceso' },
    { nombre: 'RAV4', imagen: 'https://placehold.co/400x250?text=RAV4', precio: 34000, marca: 'Toyota', modelo: 'RAV4 Hybrid', anio: 2024, categoria: 'SUV', caracteristicas: 'Híbrido, tracción 4x4, 6 airbags' },
    { nombre: 'Tucson', imagen: 'https://placehold.co/400x250?text=Tucson', precio: 31000, marca: 'Hyundai', modelo: 'Tucson Limited', anio: 2024, categoria: 'SUV', caracteristicas: 'Motor 2.5L, techo panorámico, 7 asientos' },
    { nombre: 'Hilux', imagen: 'https://placehold.co/400x250?text=Hilux', precio: 38000, marca: 'Toyota', modelo: 'Hilux SRV', anio: 2024, categoria: 'Camioneta', caracteristicas: 'Diésel 2.8L, 4x4, capacidad de carga 1 tonelada' },
    { nombre: 'Ranger', imagen: 'https://placehold.co/400x250?text=Ranger', precio: 36500, marca: 'Ford', modelo: 'Ranger XLT', anio: 2023, categoria: 'Camioneta', caracteristicas: 'Diésel 2.0L, doble cabina, 4x4' },
    { nombre: 'Mustang', imagen: 'https://placehold.co/400x250?text=Mustang', precio: 55000, marca: 'Ford', modelo: 'Mustang GT', anio: 2024, categoria: 'Deportivo', caracteristicas: 'V8 5.0L, 450 HP, transmisión manual' },
    { nombre: 'Camaro', imagen: 'https://placehold.co/400x250?text=Camaro', precio: 52000, marca: 'Chevrolet', modelo: 'Camaro SS', anio: 2023, categoria: 'Deportivo', caracteristicas: 'V8 6.2L, 455 HP, asientos deportivos' }
  ]

  private listaPromociones: Promocion[] = [
    { titulo: 'Financiamiento', descripcion: 'Cuota inicial desde el 10% en todos los sedanes.', descuento: '10% inicial' },
    { titulo: 'SUV Week', descripcion: 'Descuento especial en todas las SUV del mes.', descuento: '5% dscto.' },
    { titulo: 'Camionetas', descripcion: 'Primer mantenimiento gratis al comprar una camioneta.', descuento: 'Mant. gratis' }
  ]

  private listaInformacion: Informacion[] = [
    { titulo: 'Historia', texto: 'AutoMax nació en 2005 como un pequeño local de venta de autos y hoy es una de las tiendas más reconocidas de la región.', icono: '📖' },
    { titulo: 'Misión', texto: 'Ofrecer vehículos de calidad con atención personalizada y financiamiento accesible para cada cliente.', icono: '🎯' },
    { titulo: 'Visión', texto: 'Ser la tienda de autos líder del país, reconocida por su confianza y servicio.', icono: '🌟' }
  ]

  mostrarVehiculos(): Vehiculo[] {
    return this.listaVehiculos;
  }

  mostrarPorCategoria(categoria: string): Vehiculo[] {
    return this.listaVehiculos.filter(v => v.categoria == categoria);
  }

  mostrarPromociones(): Promocion[] {
    return this.listaPromociones;
  }

  mostrarInformacion(): Informacion[] {
    return this.listaInformacion;
  }
}