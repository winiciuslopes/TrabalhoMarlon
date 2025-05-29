import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PiadaService {

  constructor(private http: HttpClient) { }

getAllpiadas() {
  return this.http.get (`https://akabab.github.io/superhero-api/api/all.json`)
 }
}



