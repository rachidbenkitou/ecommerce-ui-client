import {PackagesPageComponent} from "./components/packages-page/packages-page.component";
import {PackagePageComponent} from "./components/package-page/package-page.component";

export const PackageRoute = [
  {
    path: '',
    component: PackagesPageComponent,
  },
  {
    path: 'id/:id',
    component: PackagePageComponent,
  },
];
