// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-slide',
//   templateUrl: './slide.component.html',
//   styleUrls: ['./slide.component.scss'] // Make sure you have a corresponding SCSS file if you want to add styles
// })
// export class SlideComponent implements OnInit {
//   slides: any[] = [
//     {
//       subtitle: 'Hot promotions',
//       title: 'Fashion Trending Great Collection',
//       description: 'Save more with coupons & up to 20% off',
//       buttonLink: 'shop.html',
//       buttonText: 'Shop Now'
//     },
//     {
//       subtitle: 'Another slide',
//       title: 'Another Title',
//       description: 'Another description for the slide',
//       buttonLink: 'another-page.html',
//       buttonText: 'Go to Another Page'
//     }
//   ];
//
//   currentSlideIndex: number = 0;
//   currentSlide: any;
//
//   constructor() { }
//
//   ngOnInit(): void {
//     this.startSlider();
//   }
//
//   startSlider() {
//     setInterval(() => {
//       this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
//       this.currentSlide = this.slides[this.currentSlideIndex];
//     }, 5000);
//   }
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  slides: any[] = [
    {
      subtitle: 'Hot promotions',
      title: 'Fashion Trending Great Collection',
      description: 'Save more with coupons & up to 20% off',
      buttonLink: 'shop.html',
      buttonText: 'Shop Now'
    },
    {
      subtitle: 'Another slide',
      title: 'Another Title',
      description: 'Another description for the slide',
      buttonLink: 'another-page.html',
      buttonText: 'Go to Another Page'
    }
  ];

  currentSlideIndex: number = 0;
  currentSlide: any;

  constructor() { }

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider() {
    this.currentSlide = this.slides[this.currentSlideIndex];
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.currentSlide = this.slides[this.currentSlideIndex];
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.currentSlide = this.slides[this.currentSlideIndex];
  }
}
