import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent {
  showBurgerMenu = false;

  toggleBurgerMenu() {
    this.showBurgerMenu = !this.showBurgerMenu;
  }

  burgerPath: string = '../../assets/images/icons.svg#icon-burger';
  logoUrl: string = '../../assets/images/logo.svg';

  links: { label: string; url: string }[] = [
    { label: 'Сервіси', url: '#' },
    { label: 'Послуги', url: '#' },
    { label: 'Клієнти', url: '#' },
    { label: 'Новини', url: '#' },
    { label: 'Про нас', url: '#' },
  ];
}
