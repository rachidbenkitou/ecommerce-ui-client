import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PackageService} from "../../services/packages.service";

@Component({
  selector: 'app-packages-page',
  templateUrl: './packages-page.component.html',
  styleUrl: './packages-page.component.scss'
})
export class PackagesPageComponent implements OnInit {
  @Input() packagesList: any[] = [];
  searchForm: FormGroup = new FormGroup({}); // Define searchForm of type FormGroup


  constructor(private packagesService: PackageService,
              private formBuilder: FormBuilder // Inject FormBuilder
  ) {
  }

  // Method to create the search form
  createForm(): void {
    this.searchForm = this.formBuilder.group({
      name: [''], // Define form control for name
      sortingByField: [null], // Define form control for sortingByValue
      packageId: [null] // Define form control for categoryId
    });
  }

  getPackages(packageName?: string, sortingByField?: string, packageId?: number): void {
    this.packagesService.getPackages(0, 25, sortingByField, 'ASC', packageId, packageName, undefined, undefined)
      .subscribe(response => {
        this.packagesList = response;
      });
  }

  search(): void {
    const formData = this.searchForm.value;
    const sortedBy = formData.sortingByField ?? 'id';
    this.getPackages(formData.name, sortedBy, formData.packageId);
  }


  ngOnInit(): void {
    this.getPackages();
    this.createForm(); // Call createForm method when component initializes
  }

  sortingOptions = [
    {name: 'Name', value: 'name'},
    {name: 'ID', value: 'id'},
    {name: 'Latest Added', value: 'dateCreated'}
  ];


  relaod() {
    this.searchForm.reset()
    this.getPackages();
  }
}
