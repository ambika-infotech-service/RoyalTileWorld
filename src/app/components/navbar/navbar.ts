import { ChangeDetectionStrategy, Component, signal, inject, PLATFORM_ID, DestroyRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      fromEvent(window, 'scroll')
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => this.scrolled.set(window.scrollY > 50));
    }
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
