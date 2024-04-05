import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrl: './package-list.component.scss'
})
export class PackageListComponent {
  @Input() packages: any[] = [];

}
