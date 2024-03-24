import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private httpClient: HttpClient, private appComponent: AppComponent){}
  get(cep: string) {
    let headers = new HttpHeaders({"Content-Type": "application/json"})
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`, {headers: headers})
  }
}
