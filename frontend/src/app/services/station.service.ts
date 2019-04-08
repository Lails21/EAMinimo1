import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Station } from '../models/station';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StationService {
  selectedStation: Station;
  stations: Station[];
  readonly URL_API = 'http://localhost:3000/stations';

  constructor(private http: HttpClient) { 
    this.selectedStation = new Station();
  }

  getStations():Observable<Station[]>{
    return this.http.get<Station[]>(this.URL_API);
  }

  getStationDetail(_id: string): Observable<Station>{
    return this.http.get<Station>(this.URL_API + `/${_id}`);
  }
}
