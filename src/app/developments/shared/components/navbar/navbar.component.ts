import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from "../../../products/services/products.service";
import {Router} from '@angular/router';
import {AuthService} from "../../../security/auth.service";
import {environment} from "../../../../../environements/environement";
import {CategoriesService} from "../../../categories/services/categories.service";
import {ToastrConfigHelper} from "../../models/toastr-config-helper";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('navToggle') navToggle!: ElementRef;
  @ViewChild('navClose') navClose!: ElementRef;

  productCount: number = 0;
  productName: string = '';
  wishlistProductCount: number = 0;
  isLoggedIn: boolean = false;
  categoriesList: any[] = [];


  constructor(
    private productService: ProductsService,
    private categoryService: CategoriesService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.productService.productCount$.subscribe(count => {
      this.productCount = count;
      // Update cart component or perform any other actions
    });

    this.productService.wishlistProductCount$.subscribe(count => {
      this.wishlistProductCount = count;
      // Update cart component or perform any other actions
    });

    this.productService.incrementWishlistProductCount();
    this.productService.incrementProductCount();

  }


  getCategories(): void {
    this.categoryService.getCategories().subscribe(response => {
      this.categoriesList = response;
    })
  }

  getProductsByName(): void {
    this.categoryService.getCategories().subscribe(response => {
      this.categoriesList = response;
    })
  }

  gotToHome() {
    window.location.href = `${environment.angularUrl}/products/homePage`;
  }

  ngOnInit(): void {
    //this.productService.incrementProductCount();
    this.getCategories();
  }

  loginRegisterPage() {
    this.router.navigate(['/loginRegister']);
  }

  logout() {
    // this.authService.logout().subscribe(response => {
    //   console.log('Logged in successfully!', response);
    //   //this.loginForm.reset();
    // })
    this.authService.LogoutWithoutBackend()
    window.location.href = `${environment.angularUrl}/products/homePage`;
  }

  ngAfterViewInit(): void {
    // Add event listeners after the view has been initialized
    this.navToggle.nativeElement.addEventListener('click', () => {
      this.navMenu.nativeElement.classList.add('show-menu');
    });

    this.navClose.nativeElement.addEventListener('click', () => {
      this.navMenu.nativeElement.classList.remove('show-menu');
    });
  }

  goToPackagesPage() {
    // Navigate to the '/packages' route
    this.router.navigate(['/packages']);
  }

  searchProductByCategory($event: any) {
    this.router.navigate([`products/category/${$event.id}`])

  }

  SearchProductsByName() {
    const currentRoute = this.router.url;
    // Define the navigation extras with state
    const navigationExtras = {
      state: {
        name: this.productName
      }
    };

    // Check if the current route is the destination route
    if (currentRoute === '/products/allProducts') {
      this.toastr.info('Make the search in the form below!', 'Info!', ToastrConfigHelper.getCustomConfig());

    } else {
      // Navigate to the products page with the category id in the state
      this.router.navigate(['/products/allProducts'], navigationExtras);
    }
    this.productName = '';
  }
}
