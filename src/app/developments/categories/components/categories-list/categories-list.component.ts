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


  handleCategoryClick(id: number): void {
    alert(id)
  }

  products: any[] | undefined;

  responsiveOptions: any[] | undefined;


  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'OUTOFSTOCK'
    }
  }

}
