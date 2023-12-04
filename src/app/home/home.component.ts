import { Component, OnInit } from '@angular/core';
import { Prodotti, ProductResponce } from '../prodotti';
import { ServiceService } from '../service/service.service';
import { Subscription } from 'rxjs';
import { PreferitiComponent } from '../preferiti/preferiti.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private srv: ServiceService) {}
  prodotti: Prodotti[] | undefined;
  prodottiResp: ProductResponce | undefined;

  sub!: Subscription;

  ngOnInit(): void {
    this.recupera();
  }
  recupera() {
    this.sub = this.srv.recuperaProdotti().subscribe((risultato) => {
      this.prodottiResp = risultato;
      this.prodotti = risultato.products;
      console.log(this.prodotti);
    });
  }
  addToFavorites(item: Prodotti) {
    this.srv.PrefProdotti(item);
  }
}
