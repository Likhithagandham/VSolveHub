let generatedOtp = null;
let otpVerified = false;

function validateWorkerFields() {
  const name = document.getElementById('worker-name').value.trim();
  const skill = document.getElementById('worker-skill').value;
  const experience = document.getElementById('worker-experience').value;
  const area = document.getElementById('worker-area').value.trim();
  const phone = document.getElementById('worker-phone').value.trim();

  if (!name || !skill || !experience || !area) {
    showError('Please fill in all fields before continuing.');
    return null;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    showError('Enter a valid 10-digit mobile number.');
    return null;
  }

  clearError();
  return { name, skill, experience, area, phone };
}

function showError(msg) {
  const el = document.getElementById('form-error');
  el.textContent = msg;
  el.hidden = false;
}

function clearError() {
  const el = document.getElementById('form-error');
  el.textContent = '';
  el.hidden = true;
}

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function sendOtp() {
  const data = validateWorkerFields();
  if (!data) return;

  generatedOtp = generateOtp();
  otpVerified = false;

  document.getElementById('otp-block').hidden = false;
  document.getElementById('send-otp-btn').hidden = true;
  document.getElementById('submit-btn').hidden = false;
  document.getElementById('worker-otp').value = '';
  document.getElementById('worker-otp').focus();

  const hint = document.getElementById('otp-hint');
  hint.textContent = `OTP sent to +91 ${data.phone.slice(0, 2)}******${data.phone.slice(-2)} (demo: ${generatedOtp})`;

  document.getElementById('worker-name').readOnly = true;
  document.getElementById('worker-skill').disabled = true;
  document.getElementById('worker-experience').disabled = true;
  document.getElementById('worker-area').readOnly = true;
  document.getElementById('worker-phone').readOnly = true;
}

function verifyOtp(entered) {
  return entered === generatedOtp;
}

function resetForm() {
  const form = document.getElementById('worker-form');
  form.reset();
  generatedOtp = null;
  otpVerified = false;

  document.getElementById('otp-block').hidden = true;
  document.getElementById('send-otp-btn').hidden = false;
  document.getElementById('submit-btn').hidden = true;

  ['worker-name', 'worker-area', 'worker-phone'].forEach((id) => {
    document.getElementById(id).readOnly = false;
  });
  document.getElementById('worker-skill').disabled = false;
  document.getElementById('worker-experience').disabled = false;

  clearError();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('send-otp-btn')?.addEventListener('click', sendOtp);

  document.getElementById('resend-otp')?.addEventListener('click', () => {
    generatedOtp = generateOtp();
    const phone = document.getElementById('worker-phone').value;
    document.getElementById('otp-hint').textContent = `New OTP sent to +91 ${phone.slice(0, 2)}******${phone.slice(-2)} (demo: ${generatedOtp})`;
    document.getElementById('worker-otp').value = '';
    document.getElementById('worker-otp').focus();
  });

  document.getElementById('worker-form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const otp = document.getElementById('worker-otp').value.trim();
    if (!/^[0-9]{6}$/.test(otp)) {
      showError('Enter the 6-digit OTP sent to your phone.');
      return;
    }

    if (!verifyOtp(otp)) {
      showError('Invalid OTP. Please check and try again.');
      return;
    }

    otpVerified = true;
    const name = document.getElementById('worker-name').value;
    alert(`Welcome ${name}! Your worker profile is registered. Our team will contact you within 24–48 hours.`);
    resetForm();
  });

  const waUrl = getWhatsAppUrl('Hi VSolveHub, I want to register as a worker');
  document.getElementById('whatsapp-fab')?.setAttribute('href', waUrl);
  document.getElementById('footer-whatsapp')?.setAttribute('href', waUrl);
});
