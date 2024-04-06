import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent implements OnInit {
  @Input() categoriesList: any[] = [];

  constructor(private categoryService: CategoriesService) {
  }


  handleCategoryClick(id: number): void{
    alert(id)
  }
  ngOnInit(): void {
  }

}
