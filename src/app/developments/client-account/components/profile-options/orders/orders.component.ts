import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../../../cart/services/cart.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  data: any;
  clientOrderList: any[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private carteService: CartService) {
    this.data = this.route.snapshot.data;
  }

  getClientOrdersByClient(): any {
    this.carteService.getClientOrdersById().subscribe((response: any[]) => {
      this.clientOrderList = response;
    })
  }

  ngOnInit(): void {
    this.getClientOrdersByClient();
  }
}
