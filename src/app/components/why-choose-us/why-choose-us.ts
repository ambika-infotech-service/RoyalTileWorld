import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AnimateOnScroll } from '../../directives/animate-on-scroll';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-choose-us',
  imports: [AnimateOnScroll],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyChooseUs {
  protected readonly features = signal<Feature[]>([
    {
      icon: 'bi-award',
      title: 'Premium Quality',
      description: 'Every tile passes rigorous quality checks. We partner only with certified manufacturers who meet global standards.',
    },
    {
      icon: 'bi-palette',
      title: 'Vast Design Range',
      description: 'Choose from 500+ designs, textures, and finishes — from rustic to contemporary, we have it all.',
    },
    {
      icon: 'bi-person-check',
      title: 'Expert Consultation',
      description: 'Our experienced design team helps you select the perfect tiles to complement your vision and space.',
    },
    {
      icon: 'bi-truck',
      title: 'Pan-India Delivery',
      description: 'Reliable, timely delivery to your doorstep across India with careful packaging to prevent damage.',
    },
    {
      icon: 'bi-currency-rupee',
      title: 'Competitive Pricing',
      description: 'We offer the best value for money with transparent pricing, bulk discounts, and flexible payment terms.',
    },
    {
      icon: 'bi-headset',
      title: 'After-Sales Support',
      description: 'Our dedicated support team is available post-purchase to help with installation guidance and queries.',
    },
  ]);
}

