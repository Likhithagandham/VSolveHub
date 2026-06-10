'use client';

import { FormEvent, useState } from 'react';

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export function WorkerRegistrationForm() {
  const [otpCode, setOtpCode] = useState<string | null>(null);
  const [otpSent, setOtpSent] = useState(false);
  const [locked, setLocked] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', skill: '', experience: '', area: '', phone: '' });

  function validate(): typeof formData | null {
    const { name, skill, experience, area, phone } = formData;
    if (!name || !skill || !experience || !area) {
      setError('Please fill in all fields before continuing.');
      return null;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      setError('Enter a valid 10-digit mobile number.');
      return null;
    }
    setError('');
    return formData;
  }

  function sendOtp() {
    const data = validate();
    if (!data) return;
    const code = generateOtp();
    setOtpCode(code);
    setOtpSent(true);
    setLocked(true);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!otpSent) {
      sendOtp();
      return;
    }
    const entered = (e.currentTarget.elements.namedItem('worker-otp') as HTMLInputElement).value.trim();
    if (entered !== otpCode) {
      setError('Invalid OTP. Please try again.');
      return;
    }
    alert(`Welcome ${formData.name}! Your worker registration is submitted. Our team will contact you within 24–48 hours.`);
    setFormData({ name: '', skill: '', experience: '', area: '', phone: '' });
    setOtpCode(null);
    setOtpSent(false);
    setLocked(false);
    e.currentTarget.reset();
  }

  return (
    <form id="worker-form" className="enquiry-form" onSubmit={onSubmit}>
      {error && <p className="form-error" style={{ color: 'crimson', marginBottom: 16 }}>{error}</p>}
      <div className="form-field">
        <label htmlFor="worker-name">Full Name</label>
        <input type="text" id="worker-name" name="name" required readOnly={locked} value={formData.name} onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))} />
      </div>
      <div className="form-field">
        <label htmlFor="worker-skill">Primary Skill</label>
        <select id="worker-skill" name="skill" required disabled={locked} value={formData.skill} onChange={(e) => setFormData((d) => ({ ...d, skill: e.target.value }))}>
          <option value="">Select skill</option>
          <option value="electrician">Electrician</option>
          <option value="plumber">Plumber</option>
          <option value="mason">Mason / Construction</option>
          <option value="beautician">Beautician</option>
          <option value="driver">Driver</option>
          <option value="cleaner">Cleaner / Housekeeping</option>
          <option value="cook">Cook</option>
          <option value="security">Security Guard</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="worker-experience">Experience</label>
        <select id="worker-experience" name="experience" required disabled={locked} value={formData.experience} onChange={(e) => setFormData((d) => ({ ...d, experience: e.target.value }))}>
          <option value="">Select experience</option>
          <option value="0-1">Less than 1 year</option>
          <option value="1-3">1–3 years</option>
          <option value="3-5">3–5 years</option>
          <option value="5+">5+ years</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="worker-area">City / Area</label>
        <input type="text" id="worker-area" name="area" required readOnly={locked} value={formData.area} onChange={(e) => setFormData((d) => ({ ...d, area: e.target.value }))} />
      </div>
      <div className="form-field">
        <label htmlFor="worker-phone">Phone Number</label>
        <input type="tel" id="worker-phone" name="phone" inputMode="numeric" pattern="[0-9]{10}" required readOnly={locked} value={formData.phone} onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))} />
      </div>
      {otpSent && otpCode && (
        <div id="otp-block" className="form-field">
          <label htmlFor="worker-otp">Enter OTP</label>
          <input type="text" id="worker-otp" name="worker-otp" inputMode="numeric" pattern="[0-9]{6}" maxLength={6} required />
          <span className="field-hint">
            OTP sent to +91 {formData.phone.slice(0, 2)}******{formData.phone.slice(-2)} (demo: {otpCode})
          </span>
        </div>
      )}
      {!otpSent ? (
        <button type="submit" className="btn-primary" id="send-otp-btn">Send OTP</button>
      ) : (
        <button type="submit" className="btn-primary" id="submit-btn">Complete Registration</button>
      )}
    </form>
  );
}
