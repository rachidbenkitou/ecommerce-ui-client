import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../products/services/products.service";
import {Router} from '@angular/router';
import {AuthService} from "../../../security/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  productCount: number = 0;

  constructor(
    private productService: ProductsService,
    private authService: AuthService,
    private router: Router,
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

  loginRegisterPage() {
    this.router.navigate(['/loginRegister']);

  }

  logout() {
    this.authService.logout().subscribe(response => {
      console.log('Logged in successfully!', response);
      //this.loginForm.reset();
    })
  }
}
