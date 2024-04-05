import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../../categories/services/categories.service";
import {PackagesService} from "../../../packages/services/packages.service";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-landing-page',
  templateUrl: './product-landing-page.component.html',
  styleUrl: './product-landing-page.component.scss'
})
export class ProductLandingPageComponent implements OnInit {
  categoryList: any[] = [];
  popularProductList: any[] = [];
  newAddedProductList: any[] = [];
  packageList: any[] = [];
  productsList: any[] = [];

  constructor(private categoryService: CategoriesService,
              private packageService: PackagesService,
              private productService: ProductsService) {
  }

  addToCard(product: any) {
    console.log(product)
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(response => {
      this.categoryList = response;
    })
  }

  getProducts(): void {
    this.productService.getProducts(0, 15, 'id', 'DESC', undefined, undefined, undefined, undefined, undefined, undefined).subscribe(response => {
      this.productsList = response;
    })
  }

  getPackages(): void {
    this.packageService.getPackages().subscribe(response => {
      this.packageList = response;
    })
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
