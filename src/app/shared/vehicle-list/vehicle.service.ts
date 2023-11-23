import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

//Model
import { VehicleList } from './vehicle-list.model';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  urlPosicao = 'https://challenge-backend.mobi7.io/posicao';
  urlPOIs = 'https://challenge-backend.mobi7.io/pois';


  constructor(
    private http: HttpClient
  ) { }

  get apiListAllVehiclePosition(): Observable<any> {
    return this.http.get(this.urlPosicao);
  }

  get apiListAllVehiclePOIs(): Observable<any> {
    return this.http.get(this.urlPOIs);
  }
}
