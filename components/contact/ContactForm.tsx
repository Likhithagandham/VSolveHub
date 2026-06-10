'use client';

import { FormEvent } from 'react';

export function ContactForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    alert(`Thank you ${name}! We've received your enquiry and will respond soon.`);
    form.reset();
  }

  return (
    <form className="enquiry-form" id="contact-form" onSubmit={onSubmit}>
      <div className="form-field">
        <label htmlFor="contact-name">Your Name</label>
        <input type="text" id="contact-name" name="name" placeholder="Full name" required />
      </div>
      <div className="form-field">
        <label htmlFor="contact-phone">Phone Number</label>
        <input type="tel" id="contact-phone" name="phone" placeholder="10-digit mobile number" inputMode="numeric" pattern="[0-9]{10}" required />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Email (optional)</label>
        <input type="email" id="contact-email" name="email" placeholder="you@email.com" />
      </div>
      <div className="form-field">
        <label htmlFor="contact-subject">Subject</label>
        <select id="contact-subject" name="subject" required defaultValue="">
          <option value="">Select a topic</option>
          <option value="booking">Service Booking</option>
          <option value="worker">Worker Registration</option>
          <option value="partnership">Business Partnership</option>
          <option value="support">Support / Complaint</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={4} placeholder="How can we help?" required />
      </div>
      <button type="submit" className="btn-primary">Send Enquiry</button>
    </form>
  );
}
