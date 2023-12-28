import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  @Input() links: { label: string; url: string }[] = [
    { label: 'Сервіси', url: '#' },
    { label: 'Послуги', url: '#' },
    { label: 'Клієнти', url: '#' },
    { label: 'Новини', url: '#' },
    { label: 'Про нас', url: '#' },
  ];

  @Input() icons: { iconSrc: string; url: string }[] = [
    { iconSrc: '../assets/images/icons.svg#icon-linkedin', url: '#' },
    { iconSrc: '../assets/images/icons.svg#icon-facebook', url: '#' },
    { iconSrc: '../assets/images/icons.svg#icon-instagram', url: '#' },
  ];

  @Input() account: { accountSrc: string; url: string } = {
    accountSrc: '../assets/images/account.svg',
    url: '#',
  };

  @Input() login: { label: string; url: string } = {
    label: 'Увійти',
    url: '#',
  };

  @Input() showBurgerMenu: boolean = false;
}
