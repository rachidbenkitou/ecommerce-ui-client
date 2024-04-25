import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../security/auth.service";
import {environment} from "../../../../../environements/environement";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrl: './client-account.component.scss'
})
export class ClientAccountComponent implements OnInit {
  activeTab: string = 'dashboard';

  constructor(private authService: AuthService, private router: Router) {
  }

  navigateTo(tab: string): void {
    this.activeTab = tab;
    // Store the active tab in localStorage
    localStorage.setItem('activeTab', tab);
    this.router.navigate(['/profile', tab]);
  }

  logout() {
    this.authService.logout().subscribe(response => {
      this.authService.clearTokens();
      localStorage.removeItem('activeTab')
      window.location.href = `${environment.angularUrl}/products/homePage`;
    })
  }

  ngOnInit(): void {
    // Retrieve the active tab from localStorage if it exists
    const storedTab = localStorage.getItem('activeTab');
    if (storedTab) {
      this.activeTab = storedTab;
    }
  }

}
