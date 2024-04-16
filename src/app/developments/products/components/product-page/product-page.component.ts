import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {
  product: any; // Assuming product is of type any, adjust as per your actual data type
  productsList: any[] = [];
  productId!: number;
  selectedQuantity: any = 0;
  selectedSize: number = 0;


  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
  ) {
  }

  getProducts(productName?: string, sortingByField?: string, categoryId?: number): void {
    this.productService.getProducts(0, 25, sortingByField, 'DESC', undefined, productName, undefined, undefined, undefined, categoryId)
      .subscribe(response => {
        this.productsList = response;
        console.log(this.productsList)

      });
  }

  ngOnInit(): void {
    // Retrieve product data from router navigation extras
    this.product = history.state.product;

    // Retrieve product ID from the URL
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });

    this.getProducts(undefined, undefined, this.product.categoryId)
  }

}
