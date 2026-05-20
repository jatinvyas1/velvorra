import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RevealDirective } from '../../shared/reveal.directive';
import { PRODUCTS } from '../../shared/products.data';
import { CONTACT_RECIPIENT } from './contact-email.config';
import { ContactEmailService } from './contact-email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private fb = new FormBuilder().nonNullable;
  private emailService = inject(ContactEmailService);

  readonly contactEmail = CONTACT_RECIPIENT;
  products = PRODUCTS;
  submitted = signal(false);
  sending = signal(false);
  sendError = signal<string | null>(null);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    country: ['', [Validators.required]],
    product: ['', [Validators.required]],
    volume: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    this.sendError.set(null);

    this.emailService.send(this.form.getRawValue()).subscribe({
      next: () => {
        this.sending.set(false);
        this.submitted.set(true);
        this.form.reset();
      },
      error: (err: Error) => {
        this.sending.set(false);
        this.sendError.set(err.message);
      },
    });
  }

  resetForm() {
    this.submitted.set(false);
    this.sendError.set(null);
  }

  isInvalid(control: keyof ReturnType<ContactComponent['buildShape']>) {
    const c = this.form.get(control as string);
    return c ? c.invalid && c.touched : false;
  }

  private buildShape() {
    return {
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      product: '',
      volume: '',
      message: '',
    };
  }
}
