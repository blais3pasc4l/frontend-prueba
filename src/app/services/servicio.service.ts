import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { servicio } from '../models/servicio';

@Injectable({
  providedIn: 'root'
})
export class servicioService {
  url = 'http://localhost:4000/api/servicios/';

  constructor(private http: HttpClient) { }

  getservicios(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarservicio(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarservicio(servicio: servicio): Observable<any> {
    return this.http.post(this.url, servicio);
  }

  obtenerservicio(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
