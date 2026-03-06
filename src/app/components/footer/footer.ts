import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

interface QuickLink {
  label: string;
  anchor: string;
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly currentYear = signal(new Date().getFullYear());

  protected readonly socialLinks = signal<SocialLink[]>([
    { icon: 'bi-facebook',  label: 'Facebook',  url: 'https://www.facebook.com/' },
    { icon: 'bi-instagram', label: 'Instagram', url: 'https://www.instagram.com/' },
    { icon: 'bi-twitter-x', label: 'X (Twitter)', url: 'https://www.x.com/' },
    { icon: 'bi-youtube',   label: 'YouTube',  url: 'https://www.youtube.com/' },
    { icon: 'bi-pinterest', label: 'Pinterest', url: 'https://www.pinterest.com/' },
    { icon: 'bi-whatsapp',  label: 'WhatsApp', url: 'https://www.whatsapp.com/' },
  ]);

  protected readonly quickLinks = signal<QuickLink[]>([
    { label: 'Home',        anchor: '#home' },
    { label: 'About Us',    anchor: '#about' },
    { label: 'Products',    anchor: '#products' },
    { label: 'Gallery',     anchor: '#gallery' },
    { label: 'Contact',     anchor: '#contact' },
  ]);

  protected readonly categories = signal<string[]>([
    'Vitrified Tiles',
    'Ceramic Tiles',
    'Porcelain Tiles',
    'Natural Stone',
    'Floor Tiles',
    'Wall Tiles',
  ]);
}

