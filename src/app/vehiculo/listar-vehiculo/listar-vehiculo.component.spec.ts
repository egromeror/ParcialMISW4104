/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {faker} from '@faker-js/faker';

import { ListarVehiculoComponent } from './listar-vehiculo.component';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarVehiculoComponent ],
      providers: [VehiculoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    for(let i = 0; i < 2; i++) {

      const vehiculo = new Vehiculo(
        faker.number.int(),
        faker.vehicle.manufacturer(),
        faker.vehicle.type(),
        faker.vehicle.fuel(),
        faker.datatype.number({min: 1990, max:2023}),
        faker.number.int(),
        faker.vehicle.color(),
        faker.image.imageUrl()
      );
      //console.log(movie);
      component.vehiculos.push(vehiculo);
    }

  fixture.detectChanges();
  debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //verifique que la tabla se crea correctamente con tres filas más el encabezado
  it('should create a table with three rows plus the header', () => {
    const table = debug.query(By.css('table'));
    const rows = table.queryAll(By.css('tr'));
    const thead = table.queryAll(By.css('thead'));
    expect(rows.length).toBe(3);
    expect(thead.length).toBe(1);
  });
});
