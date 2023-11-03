import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

private apiUrl = environment.baseUrl;

getVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }

constructor(private http: HttpClient) { }

}
