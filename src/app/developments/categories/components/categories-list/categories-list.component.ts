import {Component, ElementRef, Input, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  @Input() categoriesList: any[] = [];
  swiper: Swiper | undefined; // Define swiper as optional

  constructor(private elementRef: ElementRef, private router: Router) {
  }

  ngOnInit(): void {
    this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('.categories__container'), {
      spaceBetween: 24,
      loop: true,
      navigation: false, // Disable built-in navigation
      breakpoints: {
        350: {slidesPerView: 2},
        768: {slidesPerView: 3},
        992: {slidesPerView: 4},
        1200: {slidesPerView: 5},
        1400: {slidesPerView: 6},
      },
    });
  }

  navigateNext(): void {
    if (this.swiper) {
      this.swiper.slideNext();
    }
  }

  navigatePrev(): void {
    if (this.swiper) {
      this.swiper.slidePrev();
    }
  }

  goToProductsBtCategoryPage(id: number) {

    this.router.navigate([`/products/category/${id}`])
  }
}
