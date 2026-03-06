import { Injectable, inject, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SITE_NAME = 'Royal Tile World';
const BASE_URL = 'https://www.royaltileworld.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

const BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#business`,
  name: SITE_NAME,
  description:
    'Premium ceramic, porcelain, vitrified and natural stone tiles retailer in Ahmedabad, Gujarat. 500+ designs with pan-India delivery.',
  url: BASE_URL,
  telephone: '+91-98765-43210',
  email: 'info@royaltileworld.com',
  logo: `${BASE_URL}/favicon.ico`,
  image: DEFAULT_OG_IMAGE,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Tile Market, Industrial Area',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.0225,
    longitude: 72.5714,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '10:00', closes: '16:00' },
  ],
  sameAs: [
    'https://www.facebook.com/',
    'https://www.instagram.com/',
  ],
};

@Injectable({
  providedIn: 'root',
})
export class Seo {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly renderer: Renderer2;

  constructor() {
    const factory = inject(RendererFactory2);
    this.renderer = factory.createRenderer(null, null);
    this._injectJsonLd(BUSINESS_SCHEMA);
  }

  updatePage(config: SeoConfig): void {
    const fullTitle = config.title
      ? `${config.title} | ${SITE_NAME}`
      : `${SITE_NAME} – Premium Ceramic, Porcelain & Vitrified Tiles | Ahmedabad`;
    const canonical = config.canonicalUrl ?? BASE_URL + '/';
    const ogImage = config.ogImage ?? DEFAULT_OG_IMAGE;

    this.title.setTitle(fullTitle);

    if (config.description) {
      this.meta.updateTag({ name: 'description', content: config.description });
      this.meta.updateTag({ property: 'og:description', content: config.description });
      this.meta.updateTag({ name: 'twitter:description', content: config.description });
    }
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:image', content: ogImage });

    this._setCanonical(canonical);
  }

  private _setCanonical(url: string): void {
    const existing = document.querySelector('link[rel="canonical"]');
    if (existing) {
      this.renderer.setAttribute(existing, 'href', url);
    } else {
      const link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'canonical');
      this.renderer.setAttribute(link, 'href', url);
      this.renderer.appendChild(document.head, link);
    }
  }

  private _injectJsonLd(schema: object): void {
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setProperty(script, 'textContent', JSON.stringify(schema));
    this.renderer.appendChild(document.head, script);
  }
}
