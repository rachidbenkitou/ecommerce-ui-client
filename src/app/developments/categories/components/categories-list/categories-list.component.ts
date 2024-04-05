import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent implements OnInit {
  categoriesList: any[] = [];

  constructor(private categoryService: CategoriesService) {
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((response): any => {
      this.categoriesList = response;
    })

  }
  handleCategoryClick(id: number): void{
    alert(id)
  }
  ngOnInit(): void {
    this.getCategories();
  }

}
