import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update-section.component.html',
  styleUrls: ['./update-section.component.css'],
})
export class UpdateSectionComponent {
 today: number = Date.now();

  updateSystem: { label: string; url: string } = {
    label: '#оновлення системи',
    url: '#',
  };
}
