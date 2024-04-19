import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  data: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.data = this.route.snapshot.data;
  }

}
