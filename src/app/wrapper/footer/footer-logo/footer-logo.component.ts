import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-logo.component.html',
  styleUrl: './footer-logo.component.css',
})
export class FooterLogoComponent {
  logoUrl: string = '../../assets/images/logo.svg';
}
