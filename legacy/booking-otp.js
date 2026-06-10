let otpCode = null;

function redirectIfNoBooking() {
  const booking = getBooking();
  if (!booking) {
    window.location.href = 'index.html';
    return null;
  }
  return booking;
}

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function sendOtp(phone) {
  otpCode = generateOtp();
  document.getElementById('otp-demo-hint').textContent =
    `Demo OTP: ${otpCode} (sent to +91 ${phone.slice(0, 2)}******${phone.slice(-2)})`;
}

document.addEventListener('DOMContentLoaded', () => {
  const booking = redirectIfNoBooking();
  if (!booking) return;

  document.getElementById('otp-phone-hint').textContent =
    `Confirm booking for ${booking.serviceName}. Verify +91 ${booking.phone}.`;

  sendOtp(booking.phone);

  document.getElementById('resend-booking-otp')?.addEventListener('click', () => {
    sendOtp(booking.phone);
    document.getElementById('booking-otp').value = '';
    document.getElementById('booking-otp').focus();
  });

  document.getElementById('booking-otp-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const entered = document.getElementById('booking-otp').value.trim();
    const errorEl = document.getElementById('otp-error');

    if (entered !== otpCode) {
      errorEl.textContent = 'Invalid OTP. Please try again.';
      errorEl.hidden = false;
      return;
    }

    errorEl.hidden = true;
    markUserRegistered(booking.phone);
    booking.otpVerified = true;
    booking.status = 'confirmed';
    saveBooking(booking);
    window.location.href = 'confirm.html';
  });
});
