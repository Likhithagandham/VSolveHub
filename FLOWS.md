# VSolveHub — Key User Flows

## 1. Customer Booking Flow

```
Home → Category Screen → Sub-service → Booking Form → OTP (if new user) → Confirm → Track
```

| Step | Screen | Product |
|------|--------|---------|
| Home | Service categories, hero CTA | Website (`index.html`) |
| Category Screen | Category hero, filter context | Website (`services.html?cat=`) |
| Sub-service | Service cards with descriptions | Website (`services.html`) |
| Booking Form | Name, phone, service, date, location | Website (`services.html#enquiry`) |
| OTP | Phone verification for new users | Website (`booking-otp.html`) |
| Confirm | Booking reference, summary | Website (`confirm.html`) |
| Track | Status timeline | Website (`track.html`) |

**Status progression:** Pending → Confirmed → In Progress → Completed

---

## 2. Worker Job Flow

```
Notification → Job Details → Accept (timer) → On the Way → In Progress → Complete
```

| Step | Screen | Product |
|------|--------|---------|
| Notification | Push alert for new job | Worker App |
| Job Details | Customer, service, location, pay | Worker App |
| Accept (timer) | Countdown to accept or pass | Worker App |
| On the Way | GPS / ETA update to customer | Worker App |
| In Progress | Job started at location | Worker App |
| Complete | Mark done, request rating | Worker App |

---

## 3. Admin Lead Flow

```
Dashboard → Lead arrives → Assign Worker → Worker notified → Customer updated → Complete
```

| Step | Screen | Product |
|------|--------|---------|
| Dashboard | Leads queue, metrics | Admin Dashboard |
| Lead arrives | New enquiry from web/app | Admin Dashboard |
| Assign Worker | Match by skill + proximity | Admin Dashboard |
| Worker notified | Push to Worker App | Admin + Worker App |
| Customer updated | SMS/WhatsApp status update | Admin Dashboard |
| Complete | Close lead, log outcome | Admin Dashboard |

---

## 4. New User Onboarding

```
Splash → Onboarding slides → Enter Phone → OTP → Name → Home
```

| Step | Screen | Product |
|------|--------|---------|
| Splash | Brand logo, load assets | Customer App |
| Onboarding slides | 3 slides — how it works | Customer App |
| Enter Phone | 10-digit mobile input | Customer App |
| OTP | SMS verification | Customer App |
| Name | Single field, skip optional | Customer App |
| Home | Service category grid | Customer App |
