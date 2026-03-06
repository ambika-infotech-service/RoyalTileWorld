import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateOnScroll } from '../../directives/animate-on-scroll';

@Component({
  selector: 'app-about',
  imports: [AnimateOnScroll],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {}
