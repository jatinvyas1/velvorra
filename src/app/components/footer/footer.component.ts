import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="col-brand">
          <a routerLink="/" class="footer-brand">
            <img
              class="footer-logo"
              src="assets/logo-wordmark.png"
              alt="Velvorra International Pvt. Ltd."
              width="140"
              height="84"
            />
          </a>
          <p class="footer-blurb">
            Global trade &amp; export solutions — connecting India to global markets.
            Premium fresh produce, pulses, rice, spices and food ingredients delivered to
            50+ countries with full quality assurance and logistics support.
          </p>

          <div class="newsletter">
            <label for="news">Stay updated</label>
            <form class="news-form" (submit)="onSubscribe($event)">
              <input
                id="news"
                type="email"
                required
                placeholder="your@email.com"
                autocomplete="email"
              />
              <button type="submit" aria-label="Subscribe">→</button>
            </form>
          </div>
        </div>

        <div class="col">
          <h4>Explore</h4>
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/products">Products</a></li>
            <li><a routerLink="/about">About Us</a></li>
            <li><a routerLink="/contact">Contact</a></li>
          </ul>
        </div>

        <div class="col">
          <h4>Categories</h4>
          <ul>
            <li><a routerLink="/products" fragment="green-chilli-g4">Fresh Produce</a></li>
            <li><a routerLink="/products" fragment="kabuli-chana">Pulses &amp; Lentils</a></li>
            <li><a routerLink="/products" fragment="basmati-rice">Rice</a></li>
            <li><a routerLink="/products" fragment="red-chilli-whole">Spices</a></li>
            <li><a routerLink="/products" fragment="dehydrated-onion">Food Ingredients</a></li>
            <li><a routerLink="/products" fragment="refined-sugar">Sugar &amp; Oil</a></li>
          </ul>
        </div>

        <div class="col">
          <h4>Reach Us</h4>
          <address>
            158, Ralamandal,<br />
            Kasturbagram,<br />
            Indore 452020,<br />
            Madhya Pradesh, India
          </address>
          <ul class="contact-lines">
            <li>
              <a href="mailto:Contact@velvorrainternational.com">Contact&#64;velvorrainternational.com</a>
            </li>
            <li><a href="tel:+917746006410">+91 77460 06410</a></li>
            <li><a href="tel:+919805020124">+91 98050 20124</a></li>
          </ul>

          <ul class="cert-pills">
            <li>APEDA</li>
            <li>FSSAI</li>
            <li>Spices Board</li>
            <li>SGS</li>
          </ul>

          <div class="socials">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M13 22v-8h3l1-4h-4V7.5c0-1 .3-1.5 1.7-1.5H17V2.2C16.5 2.1 15.4 2 14.3 2 11.9 2 10 3.5 10 6.7V10H7v4h3v8z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M22 5.8c-.7.3-1.5.6-2.4.7.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-1.5-1.6-4-1.7-5.6-.2-1 1-1.5 2.5-1.2 3.9C8.7 8.7 5.6 7.1 3.5 4.6c-1 1.8-.5 4.1 1.2 5.3-.6 0-1.2-.2-1.7-.5 0 2 1.5 3.7 3.4 4-.5.2-1.1.2-1.7.1.5 1.7 2.1 2.8 3.9 2.9-1.6 1.3-3.7 1.9-5.6 1.6 2 1.3 4.3 2 6.6 2 7.9 0 12.3-6.7 12.1-12.7.8-.6 1.6-1.4 2.3-2.2"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9 2 12 2 12s0 3 .4 4.8c.2.9.9 1.6 1.8 1.8 1.8.4 7.8.4 7.8.4s6 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.8.4-4.8.4-4.8s0-3-.4-4.8M10 15V9l5 3z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18H5.7V9.7h2.6zM7 8.6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.3 18h-2.6v-4.4c0-1.1-.4-1.8-1.4-1.8s-1.5.7-1.8 1.4c-.1.2-.1.5-.1.8V18H9.8s.1-7.4 0-8.3h2.6V11c.4-.6 1-1.5 2.6-1.5 1.9 0 3.3 1.2 3.3 3.9z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="container footer-bottom">
        <p>© {{ year }} Velvorra International. All rights reserved.</p>
        <p class="legal">
          <a href="#">Privacy Policy</a>
          <span>·</span>
          <a href="#">Terms of Use</a>
        </p>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year = new Date().getFullYear();

  onSubscribe(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;
    if (!input.value) return;
    form.reset();
    alert('Thanks for subscribing — we’ll keep you posted.');
  }
}
