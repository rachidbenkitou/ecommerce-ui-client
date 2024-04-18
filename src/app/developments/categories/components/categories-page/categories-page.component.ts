import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss'
})
export class CategoriesPageComponent implements OnInit {
  categoriesList: any[] = [];

  constructor(private categoryService: CategoriesService) {
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((response): any => {
      this.categoriesList = response;
    })
  }
  ngOnInit(): void {
    this.getCategories();
  }
}
