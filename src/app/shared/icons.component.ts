import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 64 64" fill="none"
         [attr.stroke]="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         aria-hidden="true">
      <ng-container [ngSwitch]="name">
        <!-- Rice grain stalk -->
        <g *ngSwitchCase="'rice'">
          <path d="M32 8v48"/>
          <path d="M32 18c-6 0-10 4-10 9 6 0 10-4 10-9zM32 18c6 0 10 4 10 9-6 0-10-4-10-9z"/>
          <path d="M32 30c-6 0-10 4-10 9 6 0 10-4 10-9zM32 30c6 0 10 4 10 9-6 0-10-4-10-9z"/>
          <path d="M32 42c-6 0-10 4-10 9 6 0 10-4 10-9zM32 42c6 0 10 4 10 9-6 0-10-4-10-9z"/>
        </g>
        <!-- Chilli -->
        <g *ngSwitchCase="'chilli'">
          <path d="M20 14c4 0 8 2 10 5"/>
          <path d="M22 14h10"/>
          <path d="M30 18c8 4 14 12 14 22 0 8-6 14-14 14-8 0-14-6-14-12 0-10 6-18 14-24z"/>
        </g>
        <!-- Banana -->
        <g *ngSwitchCase="'banana'">
          <path d="M14 26c4 18 22 28 36 22-2-4-3-8-3-12 0-3 1-6 3-8-12-2-26-6-36-2z"/>
          <path d="M50 36c2-2 3-5 3-8"/>
        </g>
        <!-- Pulses (3 beans) -->
        <g *ngSwitchCase="'pulses'">
          <ellipse cx="20" cy="22" rx="9" ry="6" transform="rotate(-20 20 22)"/>
          <ellipse cx="42" cy="28" rx="9" ry="6" transform="rotate(15 42 28)"/>
          <ellipse cx="30" cy="44" rx="9" ry="6" transform="rotate(-8 30 44)"/>
        </g>
        <!-- Cashew -->
        <g *ngSwitchCase="'cashew'">
          <path d="M22 18c-8 4-12 12-10 20 2 8 10 12 18 10 6-2 10-8 10-14 0-4-2-8-6-10"/>
          <path d="M34 24c2-4 6-6 10-6 2 0 4 2 4 4 0 4-4 6-8 6"/>
        </g>
        <!-- Palm oil bottle/drop -->
        <g *ngSwitchCase="'oil'">
          <path d="M32 10c-8 12-14 20-14 28 0 8 6 14 14 14s14-6 14-14c0-8-6-16-14-28z"/>
          <path d="M28 38c0 4 2 6 6 6"/>
        </g>
        <!-- Sugar cubes -->
        <g *ngSwitchCase="'sugar'">
          <rect x="10" y="26" width="20" height="20" rx="3"/>
          <rect x="34" y="26" width="20" height="20" rx="3"/>
          <rect x="22" y="10" width="20" height="20" rx="3"/>
        </g>
        <!-- Globe -->
        <g *ngSwitchCase="'globe'">
          <circle cx="32" cy="32" r="22"/>
          <path d="M10 32h44M32 10c6 8 6 36 0 44M32 10c-6 8-6 36 0 44"/>
        </g>
        <!-- Truck / logistics -->
        <g *ngSwitchCase="'truck'">
          <rect x="6" y="20" width="32" height="22" rx="2"/>
          <path d="M38 26h10l8 8v8H38z"/>
          <circle cx="18" cy="46" r="4"/>
          <circle cx="48" cy="46" r="4"/>
        </g>
        <!-- Shield (quality) -->
        <g *ngSwitchCase="'shield'">
          <path d="M32 8l20 6v14c0 14-10 24-20 28-10-4-20-14-20-28V14l20-6z"/>
          <path d="M24 32l6 6 12-12"/>
        </g>
        <!-- Ship -->
        <g *ngSwitchCase="'ship'">
          <path d="M8 38l24-6 24 6-4 12c-4 2-10 4-20 4s-16-2-20-4z"/>
          <path d="M32 32V14"/>
          <path d="M22 22h20"/>
        </g>
        <!-- Handshake -->
        <g *ngSwitchCase="'handshake'">
          <path d="M6 28l10-8 8 6 6-2 8 6"/>
          <path d="M58 28l-10-8-8 6"/>
          <path d="M22 34l8 6 6-2 6 6"/>
          <path d="M30 40l6 4"/>
        </g>
        <!-- Spark / quality -->
        <g *ngSwitchCase="'spark'">
          <path d="M32 8v20M32 36v20M8 32h20M36 32h20"/>
          <path d="M16 16l12 12M36 36l12 12M48 16L36 28M28 36L16 48"/>
        </g>
      </ng-container>
    </svg>
  `,
})
export class IconComponent {
  @Input({ required: true }) name!: string;
  @Input() size = 28;
  @Input() color = 'currentColor';
}
