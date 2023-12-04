import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prodotti, ProductResponce } from '../prodotti';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url = environment.apiURL;
  preferiti: Prodotti[] = [];

  constructor(private http: HttpClient) {}

  recuperaProdotti() {
    return this.http.get<ProductResponce>(this.url);
  }

  PrefProdotti(item: Prodotti) {
    this.preferiti.push(item);
  }
  getPreferiti() {
    return this.preferiti;
  }
}
