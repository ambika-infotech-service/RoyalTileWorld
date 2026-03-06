import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AnimateOnScroll } from '../../directives/animate-on-scroll';

interface ProductCategory {
  icon: string;
  title: string;
  description: string;
  badge?: string;
  imgUrl: string;
}

@Component({
  selector: 'app-products',
  imports: [AnimateOnScroll],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  protected readonly categories = signal<ProductCategory[]>([
    {
      icon: 'bi-layers',
      title: 'Vitrified Tiles',
      description: 'High-density, frost-resistant tiles ideal for floors and walls in residential and commercial spaces.',
      badge: 'Best Seller',
      imgUrl: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&q=75',
    },
    {
      icon: 'bi-grid',
      title: 'Ceramic Tiles',
      description: 'Classic, versatile, and affordable ceramic tiles available in hundreds of patterns and finishes.',
      imgUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75',
    },
    {
      icon: 'bi-gem',
      title: 'Porcelain Tiles',
      description: 'Elegant Italian-grade porcelain with ultra-low porosity — perfect for luxury interiors.',
      badge: 'Premium',
      imgUrl: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&q=75',
    },
    {
      icon: 'bi-diamond',
      title: 'Natural Stone',
      description: 'Authentic marble, granite, and slate tiles that bring timeless natural beauty indoors.',
      imgUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=75',
    },
    {
      icon: 'bi-house',
      title: 'Floor Tiles',
      description: 'Anti-skid, heavy-duty floor tiles engineered for high-traffic areas and outdoor use.',
      imgUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&q=75',
    },
    {
      icon: 'bi-water',
      title: 'Wall Tiles',
      description: 'Moisture-resistant, decorative wall tiles for bathrooms, kitchens, and accent walls.',
      imgUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=75',
    },
  ]);
}

