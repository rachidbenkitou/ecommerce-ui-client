import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  data: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.data = this.route.snapshot.data;
  }
}
