import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
    
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private locationStrategy: LocationStrategy) { }

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }

  isRouteActive(route: string): boolean {
    return this.locationStrategy.path() === route;
  }

}
