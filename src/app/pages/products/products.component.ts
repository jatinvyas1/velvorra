import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { IconComponent } from '../../shared/icons.component';
import { CATEGORIES, Category, PRODUCTS } from '../../shared/products.data';

type Filter = 'All' | Category;

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, RevealDirective, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  readonly filters: Filter[] = ['All', ...CATEGORIES];
  readonly activeFilter = signal<Filter>('All');

  readonly visible = computed(() => {
    const f = this.activeFilter();
    if (f === 'All') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === f);
  });

  readonly counts = computed(() => {
    const map: Record<string, number> = { All: PRODUCTS.length };
    for (const c of CATEGORIES) {
      map[c] = PRODUCTS.filter((p) => p.category === c).length;
    }
    return map;
  });

  setFilter(f: Filter) {
    this.activeFilter.set(f);
  }
}
