export function HomeHowItWorks() {
  const steps = [
    { n: '1', title: 'Pick a service', desc: 'Browse categories and choose what you need.' },
    { n: '2', title: 'Book in minutes', desc: 'Share your details — we call back within 30 mins.' },
    { n: '3', title: 'Pro at your door', desc: 'Verified worker arrives and gets the job done.' },
  ];

  return (
    <section className="home-section" aria-labelledby="home-how-heading">
      <h2 id="home-how-heading" className="home-section-title">How it works</h2>
      <ol className="home-steps">
        {steps.map((step) => (
          <li key={step.n} className="home-step">
            <span className="home-step-num" aria-hidden="true">{step.n}</span>
            <div>
              <strong>{step.title}</strong>
              <p>{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
