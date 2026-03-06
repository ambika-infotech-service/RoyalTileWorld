import { AfterViewInit, Directive, ElementRef, OnDestroy, inject, input } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
})
export class AnimateOnScroll implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  readonly animation = input('fade-up');
  readonly animationDelay = input(0);

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const el = this.el.nativeElement;
    const anim = this.animation() || 'fade-up';
    el.style.setProperty('--aos-delay', `${this.animationDelay()}ms`);
    el.classList.add('aos-init', `aos-${anim}`);

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('aos-animate');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
