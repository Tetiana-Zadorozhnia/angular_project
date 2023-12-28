import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-address',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-address.component.html',
  styleUrls: ['./footer-address.component.css'],
})
export class FooterAddressComponent {
  contacts = [
    { text: '044 687 56 32', link: 'tel:+380446875632' },
    { text: 'loyaltysystem@gmail.com', link: 'mailto:loyaltysystem@gmail.com' },
    {
      text: 'м. Бровари вул. Козацька 23',
      link: 'https://maps.app.goo.gl/CfNWq3EuKphE1V5k9',
    },
  ];
}
