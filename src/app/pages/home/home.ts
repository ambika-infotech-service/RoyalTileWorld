import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Products } from '../../components/products/products';
import { WhyChooseUs } from '../../components/why-choose-us/why-choose-us';
import { Gallery } from '../../components/gallery/gallery';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Products, WhyChooseUs, Gallery, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}

