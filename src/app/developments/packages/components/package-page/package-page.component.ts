import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {PackageService} from "../../services/packages.service";
import {CartService} from "../../../cart/services/cart.service";
import {ToastrConfigHelper} from "../../../shared/models/toastr-config-helper";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrl: './package-page.component.scss'
})
export class PackagePageComponent implements OnInit {
  package: any; // Assuming product is of type any, adjust as per your actual data type
  packageId!: number;
  packageHTMLContent: any;
  selectedQuantity: number = 1;


  constructor(private route: ActivatedRoute,
              private packageService: PackageService,
              private sanitizer: DomSanitizer,
              private cartService: CartService,
              private toastr: ToastrService,
              private router: Router
  ) {
  }

  getPackageById(packageId?: number): void {
    this.packageService.getPackageById(packageId)
      .subscribe(response => {
        this.package = response;
        // Get Product Details as  HTML and sanitize it, bypassSecurityTrustHtml do not allow any script to be executed.
        this.packageHTMLContent = this.sanitizer.bypassSecurityTrustHtml(response.packageDetails);
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.packageId = params['id'];
      this.getPackageById(this.packageId);
    });
  }

  placeOrder(packageObject: any) {
    // Prepare the order data
    const orderData =
      {
        clientId: 123,
        totalPrice: packageObject.price * this.selectedQuantity,
        clientOrderDetailsDtos: [{
          packageId: packageObject?.id,
          price: packageObject?.price * this.selectedQuantity,
          quantity: this.selectedQuantity
        }]

      }


    // Call the cart service to place the order and subscribe to it
    this.cartService.placePackageOrder(orderData).subscribe(
      (response) => {
        this.router.navigate(['/products/homePage'])
        // Handle successful response here
        this.toastr.success('Your order has been sent successfully!', 'Success!', ToastrConfigHelper.getCustomConfig());
      },
      (error) => {
        // Handle error here
        console.error('Failed to place order:', error);
      }
    );
  }

}
