import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {PackageService} from "../../services/packages.service";

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrl: './package-page.component.scss'
})
export class PackagePageComponent implements OnInit {
  package: any; // Assuming product is of type any, adjust as per your actual data type
  packageId!: number;
  packageHTMLContent: any;
  selectedQuantity: number=1;


  constructor(private route: ActivatedRoute,
              private packageService: PackageService,
              private sanitizer: DomSanitizer,
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
    console.log(packageObject)
  }
}
