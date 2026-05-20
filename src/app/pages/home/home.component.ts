import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { IconComponent } from '../../shared/icons.component';
import {
  CERTIFICATIONS,
  PRODUCTS,
  SERVICES,
  VALUE_BADGES,
} from '../../shared/products.data';

export interface WarehouseSlide {
  /** Unsplash path, or local path under assets/ (e.g. assets/warehouse/…) */
  photoPath: string;
  caption: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);
  private warehouseAutoplayTimer?: ReturnType<typeof setInterval>;

  /** Unsplash — real Indian godowns, warehouses & workers (4K via w=3840). */
  warehouseSlides: WarehouseSlide[] = [
    {
      photoPath: 'photo-1655575900119-2f19ba5718d0',
      caption: 'Export godown · Indore, MP',
      alt: 'Large warehouse building with wide roof at Velvorra agro storage facility in Indore, Madhya Pradesh',
    },
    {
      photoPath: 'assets/warehouse/warehouse-02-rice-godown.jpg',
      caption: 'Rice godown · Ralamandal, MP',
      alt: 'Indian workers beside stacked premium rice sacks in a Velvorra godown at Ralamandal, Madhya Pradesh',
    },
    {
      photoPath: 'photo-1764070254247-351def349875',
      caption: 'Bulk storage · Indore, MP',
      alt: 'Sacks of grain stored in a godown at Velvorra facility in Indore, Madhya Pradesh',
    },
    {
      photoPath: 'assets/warehouse/warehouse-04-chilli-processing.jpg',
      caption: 'Chilli sorting · Ralamandal, MP',
      alt: 'Workers sorting fresh green chillies for export at Velvorra processing unit in Ralamandal, Madhya Pradesh',
    },
    {
      photoPath: 'photo-1764116858315-6b149603efe9',
      caption: 'Loading bay · Indore, MP',
      alt: 'Labourers loading export goods onto a truck at Velvorra loading bay in Indore, Madhya Pradesh',
    },
    {
      photoPath: 'assets/warehouse/warehouse-06-onion-handling.jpg',
      caption: 'Onion godown · Ralamandal, MP',
      alt: 'Workers carrying sorted red onions through an open-sided Velvorra godown in Ralamandal, Madhya Pradesh',
    },
    {
      photoPath: 'assets/warehouse/warehouse-07-container-loading.jpg',
      caption: 'Export loading · Indore, MP',
      alt: 'Refrigerated export container at loading bay, Velvorra dispatch facility in Indore, Madhya Pradesh',
    },
    {
      photoPath: 'assets/warehouse/warehouse-08-onion-storage.jpg',
      caption: 'Bulk onion storage · Ralamandal, MP',
      alt: 'Large piles of red onions in Velvorra bulk storage godown at Ralamandal, Madhya Pradesh',
    },
  ];

  currentWarehouseSlide = 0;
  featured = PRODUCTS.slice(0, 8);
  services = SERVICES;
  certifications = CERTIFICATIONS;
  valueBadges = VALUE_BADGES;

  ngOnInit(): void {
    this.startWarehouseAutoplay();
  }

  ngOnDestroy(): void {
    this.stopWarehouseAutoplay();
  }

  startWarehouseAutoplay(): void {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.stopWarehouseAutoplay();
    this.warehouseAutoplayTimer = setInterval(() => this.nextWarehouseSlide(), 5500);
  }

  stopWarehouseAutoplay(): void {
    if (this.warehouseAutoplayTimer) {
      clearInterval(this.warehouseAutoplayTimer);
      this.warehouseAutoplayTimer = undefined;
    }
  }

  pauseWarehouseAutoplay(): void {
    this.stopWarehouseAutoplay();
  }

  resumeWarehouseAutoplay(): void {
    this.startWarehouseAutoplay();
  }

  isLocalWarehousePhoto(photoPath: string): boolean {
    return photoPath.startsWith('assets/') || photoPath.startsWith('/assets/');
  }

  warehousePhotoUrl(photoPath: string, width = 3840): string {
    if (this.isLocalWarehousePhoto(photoPath)) {
      return photoPath.startsWith('/') ? photoPath : `/${photoPath}`;
    }
    return `https://images.unsplash.com/${photoPath}?w=${width}&q=90&auto=format&fit=crop`;
  }

  warehousePhotoSrcset(photoPath: string): string {
    if (this.isLocalWarehousePhoto(photoPath)) {
      return '';
    }
    return [
      `${this.warehousePhotoUrl(photoPath, 1280)} 1280w`,
      `${this.warehousePhotoUrl(photoPath, 1920)} 1920w`,
      `${this.warehousePhotoUrl(photoPath, 2560)} 2560w`,
      `${this.warehousePhotoUrl(photoPath, 3840)} 3840w`,
    ].join(', ');
  }

  goToWarehouseSlide(index: number): void {
    this.currentWarehouseSlide = (index + this.warehouseSlides.length) % this.warehouseSlides.length;
    this.cdr.markForCheck();
  }

  nextWarehouseSlide(): void {
    this.goToWarehouseSlide(this.currentWarehouseSlide + 1);
  }

  prevWarehouseSlide(): void {
    this.goToWarehouseSlide(this.currentWarehouseSlide - 1);
  }

  forcePlay(video: HTMLVideoElement) {
    video.muted = true;
    const tryPlay = () => video.play().catch(() => {});
    tryPlay();
    if (video.paused) {
      const kick = () => { tryPlay(); document.removeEventListener('click', kick); document.removeEventListener('touchstart', kick); document.removeEventListener('keydown', kick); };
      document.addEventListener('click', kick, { once: true });
      document.addEventListener('touchstart', kick, { once: true });
      document.addEventListener('keydown', kick, { once: true });
    }
  }

  stats = [
    { value: '50+', label: 'Countries served' },
    { value: '30+', label: 'Commodity SKUs' },
    { value: '100%', label: 'Pre-shipment QC' },
    { value: '24/7', label: 'Trade desk' },
  ];

  capabilities = [
    {
      icon: 'shield',
      title: 'Rigorous Quality Control',
      body:
        'Every consignment is inspected, sampled and verified before container loading — APEDA, FSSAI and Spices Board compliant, with optional third-party inspection.',
    },
    {
      icon: 'globe',
      title: 'Truly Global Reach',
      body:
        'Active trade lanes across the Middle East, Europe, CIS, ASEAN, East Africa and North America — backed by trusted overseas partners.',
    },
    {
      icon: 'ship',
      title: 'End-to-End Logistics',
      body:
        'Cold chain, reefer containers, marine insurance, full documentation and timely vessel coordination — door to door.',
    },
    {
      icon: 'handshake',
      title: 'Long-Term Partnerships',
      body:
        'We don’t just close trades — we build relationships. Stable pricing, transparent communication and contracted volumes.',
    },
  ];

  process = [
    {
      step: '01',
      title: 'Inquiry & Specification',
      body:
        'Share your requirement — grade, quantity, packaging, Incoterm and destination port. We respond with indicative pricing.',
    },
    {
      step: '02',
      title: 'Sourcing & Sampling',
      body:
        'We source from verified origins and ship pre-shipment samples for your QC team to approve before loading.',
    },
    {
      step: '03',
      title: 'Documentation & Loading',
      body:
        'Sales contract, LC / payment terms, packing list, COO, phyto and BL — all handled in-house with full visibility.',
    },
    {
      step: '04',
      title: 'Shipment & Support',
      body:
        'Live vessel tracking and post-shipment support through customs clearance and delivery at destination.',
    },
  ];
}
