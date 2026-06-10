'use client';

import { FormEvent } from 'react';
import { CATEGORIES } from '@/lib/data';

export function LeadForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const service = (form.elements.namedItem('service') as HTMLSelectElement).selectedOptions[0].text;
    alert(`Thank you! We'll call ${phone} about ${service} within 30 minutes.`);
    form.reset();
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <div className="form-field">
        <label htmlFor="lead-phone">Phone Number</label>
        <input type="tel" id="lead-phone" name="phone" placeholder="10-digit mobile number" inputMode="numeric" pattern="[0-9]{10}" required />
        <span className="field-hint">We&apos;ll only use this to confirm your booking</span>
      </div>
      <div className="form-field">
        <label htmlFor="lead-service">Service Category</label>
        <select id="lead-service" name="service" required defaultValue="">
          <option value="">Select a category</option>
          {CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn-primary">Request Callback</button>
    </form>
  );
}
