import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { WorkerRegistrationForm } from '@/components/jobs/WorkerRegistrationForm';

export const metadata = { title: 'Job Opportunities — VSolveHub' };

export default function JobsPage() {
  return (
    <div className="page-jobs">
      <SiteHeader bookHref="#register" bookLabel="Register" />
      <main>
        <section className="page-hero page-hero--jobs" aria-labelledby="jobs-heading">
          <div className="page-hero-content section-inner">
            <p className="hero-eyebrow">Work With Us</p>
            <h1 id="jobs-heading">Job Opportunities</h1>
            <p className="hero-tagline">Register as a skilled worker and get matched with customers near you.</p>
          </div>
        </section>
        <section id="register" className="section jobs-register-section">
          <div className="section-inner jobs-layout">
            <div>
              <h2 className="section-title">Worker Registration</h2>
              <p className="lead-hint">Free to join. Verify your phone and our team will contact you within 24–48 hours.</p>
              <WorkerRegistrationForm />
            </div>
            <aside className="jobs-benefits">
              <h2 className="section-title">Why Join VSolveHub?</h2>
              <ul>
                <li>Steady job leads in your area</li>
                <li>Transparent earnings via Worker App</li>
                <li>No registration fee</li>
                <li>Support in Telugu, Hindi and English</li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFab message="Hi VSolveHub, I want to register as a worker" />
    </div>
  );
}
