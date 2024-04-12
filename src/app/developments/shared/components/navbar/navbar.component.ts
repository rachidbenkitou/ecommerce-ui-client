import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../products/services/products.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  productCount: number = 0;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {
    this.productService.productCount$.subscribe(count => {
      this.productCount = count;
      // Update cart component or perform any other actions
    });

    this.productService.incrementProductCount();
  }

  gotToHome() {
    this.router.navigate(['/products/homePage']);
    //window.location.href = `${environment.angularUrl}/products/homePage`;
  }

  ngOnInit(): void {
    //this.productService.incrementProductCount();
  }
}
