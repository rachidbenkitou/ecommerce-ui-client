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
  showNoProductsMessage: boolean = false;


  constructor(private elementRef: ElementRef, private router: Router) {
  }

  ngOnInit(): void {
    // Simulate fetching products data (replace with your actual data fetching logic)
    setTimeout(() => {
      if (this.categoriesList.length === 0) {
        this.showNoProductsMessage = true;
      }
    }, 5000); // Show message after 3 seconds if productList is still empty
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

  goToProductsByCategoryPage(id: number) {
    // Define the navigation extras with state
    const navigationExtras = {
      state: {
        categoryId: id
      }
    };

    // Navigate to the products page with the category id in the state
    this.router.navigate(['/products/allProducts'], navigationExtras);
  }
}
