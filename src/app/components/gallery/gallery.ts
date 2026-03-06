import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AnimateOnScroll } from '../../directives/animate-on-scroll';

interface GalleryItem {
  imgUrl: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  imports: [AnimateOnScroll],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Gallery {
  protected readonly items = signal<GalleryItem[]>([
    { imgUrl: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=500&q=75', title: 'Ivory Marble Collection', category: 'Living Room' },
    { imgUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=75', title: 'Slate Grey Series', category: 'Bathroom' },
    { imgUrl: 'https://images.unsplash.com/photo-1574739782594-db4ead022697?w=500&q=75', title: 'Terrazo Classic', category: 'Kitchen' },
    { imgUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=500&q=75', title: 'Rustic Wood Plank', category: 'Bedroom' },
    { imgUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=75', title: 'Metro White Gloss', category: 'Kitchen' },
    { imgUrl: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&q=75', title: 'Onyx Black Premium', category: 'Outdoor' },
    { imgUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75', title: 'Travertine Natural', category: 'Living Room' },
    { imgUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500&q=75', title: 'Geo Pattern Series', category: 'Accent Wall' },
  ]);
}

