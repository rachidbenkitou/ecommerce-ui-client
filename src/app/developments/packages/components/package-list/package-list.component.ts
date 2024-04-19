import {Component, Input, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {CartService} from "../../../cart/services/cart.service";
import {Router} from "@angular/router";
import {PackageService} from "../../services/packages.service";
import {WishlistService} from "../../../wishlist/services/wishlist.service";

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrl: './package-list.component.scss'
})
export class PackageListComponent implements OnInit {
  @Input() packages: any[] = [];
  @Input() isPaginationShown: boolean = true;
  @Input() isViewAllProductShown: boolean = true;
  @Input() GreenTitle: string = 'No Text Provided';
  @Input() BlackTitle: string = 'No Text Provided';

  constructor(
    private packageService: PackageService,
    private toastr: ToastrService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

}
