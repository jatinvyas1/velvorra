import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      class="site-header"
      [ngClass]="{ scrolled: scrolled(), open: menuOpen(), 'on-home': onHome() }"
    >
      <div class="container header-inner">
        <a routerLink="/" class="brand" aria-label="Velvorra International home">
          <span class="brand-logo-wrap">
            <img class="brand-logo" src="assets/logo-mark.svg" alt="" />
          </span>
          <span class="brand-text">
            <span class="brand-name">Velvorra</span>
            <span class="brand-sub">International Pvt. Ltd.</span>
          </span>
        </a>

        <nav class="nav" [attr.aria-hidden]="!menuOpen() ? null : 'false'">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"
             (click)="closeMenu()">Home</a>
          <a routerLink="/products" routerLinkActive="active" (click)="closeMenu()">Products</a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a>
          <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
        </nav>

        <div class="header-cta">
          <a routerLink="/contact" class="btn btn-primary header-btn">
            Get a Quote
            <span class="arrow">→</span>
          </a>
          <button
            class="menu-toggle"
            type="button"
            [attr.aria-expanded]="menuOpen()"
            aria-label="Toggle menu"
            (click)="toggleMenu()"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr = inject(ChangeDetectorRef);

  scrolled = signal(false);
  menuOpen = signal(false);
  onHome = signal(this.router.url === '/' || this.router.url === '');

  constructor() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        const url = this.router.url.split('?')[0].split('#')[0];
        this.onHome.set(url === '/' || url === '');
        this.cdr.markForCheck();
      });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 24);
    this.cdr.markForCheck();
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
