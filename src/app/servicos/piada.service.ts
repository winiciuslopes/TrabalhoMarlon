import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PiadaService {

  constructor(private http: HttpClient) { }

  getAllpiadas() {
    return this.http.get(`https://v2.jokeapi.dev/joke/Any?type=single&idRange=0-317&amount=10`)
  }
}