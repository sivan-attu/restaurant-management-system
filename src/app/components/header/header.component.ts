import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

//
import { BreakPointService } from '../../common/breakpoint.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterLink,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly breakPoint = inject(BreakPointService);
  public lat: any;
  public lng: any;

  restaurantName = 'Tora Restaurant';
  navLists = [
    { itemName: 'Home', routePath: 'dashboard' },
    { itemName: 'Cart', routePath: 'shopping-cart' },
    { itemName: 'About Us', routePath: 'about-us' },
    { itemName: 'Contact Us', routePath: 'contact' },
  ];
  constructor() {}

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position) {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            console.log(this.lat);
            console.log(this.lat);
          }
        },
        (error) => console.log(error)
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
}
