import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { CONTACT_RECIPIENT } from './contact-email.config';

export interface ContactFormPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  volume: string;
  message: string;
}

interface FormSubmitResponse {
  success: string;
}

@Injectable({ providedIn: 'root' })
export class ContactEmailService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_RECIPIENT)}`;

  send(payload: ContactFormPayload): Observable<void> {
    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const body: Record<string, string> = {
      _subject: `Velvorra website inquiry — ${payload.product} — ${payload.name}`,
      _template: 'table',
      _captcha: 'false',
      _honey: '',
      _replyto: payload.email,
      'Full name': payload.name,
      Company: payload.company.trim() || 'Not provided',
      'Email address': payload.email,
      Phone: payload.phone.trim() || 'Not provided',
      Country: payload.country,
      'Product of interest': payload.product,
      'Volume / packaging': payload.volume.trim() || 'Not provided',
      Message: payload.message,
      'Submitted at (IST)': submittedAt,
    };

    return this.http
      .post<FormSubmitResponse>(this.endpoint, body, {
        headers: { Accept: 'application/json' },
      })
      .pipe(
        map((res) => {
          if (res.success !== 'true') {
            throw new Error('FormSubmit rejected the request');
          }
        }),
        catchError(() =>
          throwError(
            () =>
              new Error(
                'Unable to deliver your message. Please try again or email us directly.',
              ),
          ),
        ),
      );
  }
}
