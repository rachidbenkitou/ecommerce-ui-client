import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  productsList: any[] = [];

  constructor(private productService: ProductsService) { }

  getProducts(): void {
    this.productService.getProducts(0, 25, 'id', 'DESC', undefined, undefined, undefined, undefined, undefined, undefined)
      .subscribe(response => {
        this.productsList = response;
      });
  }

  ngOnInit(): void {
    this.getProducts();
    this.setupAccordion();
  }

  setupAccordion(): void {
    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
      accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling as HTMLElement;
        if (accordionItemHeader.classList.contains("active")) {
          accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
          accordionItemBody.style.maxHeight = "0";
        }
      });

      // Add 'active' class to the first accordion item header and body
      accordionItemHeader.classList.add("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling as HTMLElement;
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    });
  }
}
