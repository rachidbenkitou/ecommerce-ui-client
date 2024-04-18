import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products-page-by-category',
  templateUrl: './products-page-by-category.component.html',
  styleUrl: './products-page-by-category.component.scss'
})
export class ProductsPageByCategoryComponent implements OnInit {
  productList: any[] = [];
  categoryId: number = 0;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService) {
  }

  getProducts(categoryId: number): void {
    this.productService.getProducts(0, 25, undefined, 'DESC', undefined, undefined, undefined, undefined, undefined, categoryId)
      .subscribe(response => {
        this.productList = response;
        console.log(response)
      });
  }

  ngOnInit(): void {
    // Use paramMap to get the route parameters
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
      this.getProducts(this.categoryId);
    });
  }

}
