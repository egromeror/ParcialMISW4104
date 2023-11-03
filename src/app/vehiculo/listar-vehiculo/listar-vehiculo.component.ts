import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
  constructor(private vehiculoservice: VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoservice.getVehiculos().subscribe(
      vehiculos => this.vehiculos = vehiculos
    );
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
