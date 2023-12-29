import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-section.component.html',
  styleUrls: ['./slider-section.component.css'],
})
export class SliderSectionComponent {
  images: { src: string; alt: string }[] = [
    { src: './assets/images/photo_slide_1.jpg', alt: 'Slide1' },
    { src: './assets/images/photo_slide_2.jpg', alt: 'Slide2' },
    { src: './assets/images/photo_slide_3.jpg', alt: 'Slide3' },
  ];

  showSlider = true;

  currentIndex = 0;
  prevArrowIconPath: string = './assets/images/icons.svg#icon-arrows_prev';
  nextArrowIconPath: string = './assets/images/icons.svg#icon-arrows_next';

  isAnimating = false;

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
