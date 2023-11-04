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
  resumen: any = [] ;
  constructor(private vehiculoservice: VehiculoService) { }
  
  getVehiculos(): void {
    this.vehiculoservice.getVehiculos().subscribe(
      vehiculos => {
        this.vehiculos = vehiculos;

        var groups = new Set(this.vehiculos.map(item => item.marca));
        groups.forEach(g => 
          this.resumen.push({
            marca: g, 
            cantidad: this.vehiculos.filter(vehiculo => vehiculo.marca === g).length
          }
        ))
        }
        
    );
  }

  ngOnInit() {
    this.getVehiculos();    
  }

}
