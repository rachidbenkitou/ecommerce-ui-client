import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoriesService} from "../../../categories/services/categories.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  @Input() productsList: any[] = [];
  categoriesList: any [] = [];
  sortingOptions = [
    {name: 'Price', value: 'price'},
    {name: 'Quantity', value: 'quantity'},
    {name: 'Latest Added', value: 'dateCreated'}
  ];
  searchForm: FormGroup = new FormGroup({}); // Define searchForm of type FormGroup

  constructor(private productService: ProductsService,
              private categoryService: CategoriesService,
              private formBuilder: FormBuilder // Inject FormBuilder
  ) {
  }

  // Method to create the search form
  createForm(): void {
    this.searchForm = this.formBuilder.group({
      name: [''], // Define form control for name
      sortingByField: [null], // Define form control for sortingByValue
      categoryId: [null] // Define form control for categoryId
    });
  }

  getProducts(productName?: string, sortingByField?: string, categoryId?: number): void {
    this.productService.getProducts(0, 25, sortingByField, 'DESC', undefined, productName, undefined, undefined, undefined, categoryId)
      .subscribe(response => {
        this.productsList = response;
      });
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(response => {
        this.categoriesList = response;
      });
  }

  search(): void {
    const formData = this.searchForm.value;
    const sortedBy = formData.sortingByField ?? 'id';
    this.getProducts(formData.name, sortedBy, formData.categoryId);
  }


  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    this.createForm(); // Call createForm method when component initializes
  }

  relaod() {
    this.searchForm.reset()
    this.getProducts();
  }


}
