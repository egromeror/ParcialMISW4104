import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculoComponent } from './listar-vehiculo/listar-vehiculo.component';

@NgModule({
  exports: [ListarVehiculoComponent],
  imports: [
    CommonModule
  ],
  declarations: [ListarVehiculoComponent]
})
export class VehiculoModule { }
