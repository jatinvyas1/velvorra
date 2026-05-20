import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { IconComponent } from '../../shared/icons.component';
import { CERTIFICATIONS } from '../../shared/products.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RevealDirective, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  certs = CERTIFICATIONS;

  values = [
    {
      icon: 'shield',
      title: 'Reliability',
      body:
        'When we commit to a volume, a grade and a date — we deliver. Our buyers in 50+ countries know that.',
    },
    {
      icon: 'spark',
      title: 'Quality',
      body:
        'Rigorous pre-shipment inspections, sample-based approvals and third-party QC certificates on request.',
    },
    {
      icon: 'handshake',
      title: 'Relationships',
      body:
        'We build long-term contracts with both growers and buyers, smoothing out volatility for everyone.',
    },
    {
      icon: 'globe',
      title: 'Reach',
      body:
        'Active trade lanes spanning Asia, Europe, Africa, the Middle East and the Americas — and growing.',
    },
  ];

  lanes = [
    {
      category: 'Fresh Produce',
      items: ['G4 Green Chilli', 'G9 Banana', 'Red Onion', 'Ginger', 'Okra'],
      note: 'Cold-chain handled, calibrated and packed at certified packhouses.',
    },
    {
      category: 'Pulses & Lentils',
      items: ['Kabuli Chana', 'Pigeon Peas', 'Black Chickpeas', 'Green Moong', 'Red Moong'],
      note: 'Sortexed, cleaned and graded to international buyer specs.',
    },
    {
      category: 'Rice',
      items: ['Basmati', 'Non-Basmati', 'Long Grain', 'Sella', 'Broken'],
      note: 'Sortex-cleaned with low broken percentages and custom packaging.',
    },
    {
      category: 'Spices',
      items: ['Red Chilli', 'Coriander', 'Turmeric', 'Cumin'],
      note: 'Whole and ground — steam-sterilised, ASTA-graded colour and verified curcumin.',
    },
    {
      category: 'Food Ingredients',
      items: ['Dehydrated Onion', 'Onion Powder', 'Garlic Powder', 'Ginger Powder', 'Beetroot Powder'],
      note: 'Free-flowing powders with custom mesh sizes for HORECA and FMCG buyers.',
    },
    {
      category: 'Sugar & Oil',
      items: ['Refined Sugar (ICUMSA 45)', 'Brown Sugar', 'Palm Oil'],
      note: 'High-purity, full documentation, flexible Incoterms (CIF / CFR / FOB).',
    },
  ];
}
