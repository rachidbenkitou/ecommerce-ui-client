import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../../categories/services/categories.service";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-landing-page',
  templateUrl: './product-landing-page.component.html',
  styleUrl: './product-landing-page.component.scss'
})
export class ProductLandingPageComponent implements OnInit {
  popularProductList: any[] = [];
  newAddedProductList: any[] = [];
  packageList: any[] = [];
  productsList: any[] = [];
  categoriesList: any[] = [];

  constructor(private categoryService: CategoriesService,
              private productService: ProductsService,
              private router: Router,
  ) {
  }

  addToCard(product: any) {
    console.log(product)
  }

  getProducts(): void {
    this.productService.getProducts(0, 15, 'id', 'DESC', undefined, undefined, undefined, undefined, undefined, undefined).subscribe(response => {
      this.productsList = response;
    })
  }

  getPackages(): void {

  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((response): any => {
      this.categoriesList = response;
    })

  }

  GoToProductPage() {
    this.router.navigate(['products/allProducts'])
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories()
  }


}
