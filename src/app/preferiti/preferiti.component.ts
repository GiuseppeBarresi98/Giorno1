import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Prodotti } from '../prodotti';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss'],
})
export class PreferitiComponent implements OnInit {
  constructor(private srv: ServiceService) {}
  preferitiV: Prodotti[] | undefined;

  ngOnInit(): void {
    this.preferitiV = this.srv.getPreferiti();
  }
  addToFavorites(item: Prodotti) {
    this.srv.PrefProdotti(item);
  }
}
