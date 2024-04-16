import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0); // Scroll to top on route change
      }
    });
  }
}
