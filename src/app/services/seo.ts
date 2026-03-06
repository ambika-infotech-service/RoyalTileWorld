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
const BASE_URL = 'https://www.royaltileworld.ambikainfotech.online';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

// ── LocalBusiness (SEO) ──────────────────────────────────────────────────────
const BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Store'],
  '@id': `${BASE_URL}/#business`,
  name: SITE_NAME,
  alternateName: ['Royal Tile World Ahmedabad', 'Royal Tile World Gujarat'],
  description:
    'Premium ceramic, porcelain, vitrified and natural stone tiles retailer in Ahmedabad, Gujarat. 500+ designs with expert consultation and pan-India delivery.',
  url: BASE_URL,
  telephone: '+91-98765-43210',
  email: 'info@royaltileworld.com',
  logo: `${BASE_URL}/favicon.ico`,
  image: DEFAULT_OG_IMAGE,
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, UPI, Bank Transfer',
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
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '10:00', closes: '16:00' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tile Collections',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Vitrified Tiles', description: 'High-density, frost-resistant tiles ideal for floors and walls.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Ceramic Tiles', description: 'Classic, versatile and affordable tiles in hundreds of patterns.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Porcelain Tiles', description: 'Italian-grade luxury porcelain with ultra-low porosity.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Natural Stone Tiles', description: 'Authentic marble, granite and slate tiles.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Floor Tiles', description: 'Anti-skid, heavy-duty tiles for high-traffic areas.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Wall Tiles', description: 'Moisture-resistant decorative tiles for bathrooms and kitchens.' } },
    ],
  },
  sameAs: [
    'https://www.facebook.com/',
    'https://www.instagram.com/',
  ],
};

// ── WebSite + SearchAction (AEO/GEO — sitelinks searchbox) ───────────────────
const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: SITE_NAME,
  url: BASE_URL,
  description: 'Browse 500+ premium tile designs — ceramic, porcelain, vitrified and natural stone. Pan-India delivery.',
  inLanguage: 'en-IN',
  publisher: { '@id': `${BASE_URL}/#business` },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

// ── FAQPage (AEO — featured snippets & voice answers) ────────────────────────
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of tiles does Royal Tile World offer?',
      acceptedAnswer: { '@type': 'Answer', text: 'Royal Tile World offers vitrified tiles, ceramic tiles, porcelain tiles, natural stone tiles (marble, granite, slate), floor tiles and wall tiles — 500+ designs in total.' },
    },
    {
      '@type': 'Question',
      name: 'Where is Royal Tile World located?',
      acceptedAnswer: { '@type': 'Answer', text: 'Royal Tile World showroom is at 123 Tile Market, Industrial Area, Ahmedabad, Gujarat – 380001, India. Open Mon–Sat 9 AM–7 PM, Sunday 10 AM–4 PM.' },
    },
    {
      '@type': 'Question',
      name: 'Does Royal Tile World offer pan-India delivery?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Royal Tile World provides reliable pan-India delivery with careful packaging to prevent tile damage during transit.' },
    },
    {
      '@type': 'Question',
      name: 'Can I get a design consultation at Royal Tile World?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Royal Tile World provides free expert design consultation to help you choose the right tiles for your home or commercial project.' },
    },
    {
      '@type': 'Question',
      name: 'How many years of experience does Royal Tile World have?',
      acceptedAnswer: { '@type': 'Answer', text: 'Royal Tile World has over 15 years of experience in the tile industry, serving 1000+ happy clients since 2010.' },
    },
    {
      '@type': 'Question',
      name: 'What is the price range of tiles at Royal Tile World?',
      acceptedAnswer: { '@type': 'Answer', text: 'Royal Tile World offers competitively priced tiles across all budget ranges, from affordable ceramic tiles to premium Italian porcelain. Contact us for exact pricing and bulk discounts.' },
    },
    {
      '@type': 'Question',
      name: 'Are the tiles at Royal Tile World ISO certified?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Royal Tile World sources only ISO certified quality tiles from renowned manufacturers who meet global standards.' },
    },
  ],
};

// ── Speakable (AEO — voice assistants) ───────────────────────────────────────
const SPEAKABLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/#webpage`,
  name: `${SITE_NAME} – Premium Tile Collections`,
  url: BASE_URL,
  description: 'Royal Tile World is a premium tile retailer in Ahmedabad offering 500+ ceramic, porcelain, vitrified and natural stone tile designs with pan-India delivery.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#business` },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.hero-title', '.hero-description', '.section-title', '.section-subtitle'],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    ],
  },
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
    // Inject all schemas — order matters for crawlers
    this._injectJsonLd(WEBSITE_SCHEMA);
    this._injectJsonLd(BUSINESS_SCHEMA);
    this._injectJsonLd(FAQ_SCHEMA);
    this._injectJsonLd(SPEAKABLE_SCHEMA);
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
