export default function Page() {
  const faqs = [
    {
      q: 'Which platforms do you monitor?',
      a: 'Slack messages, GitHub commits and PRs, and email send/receive activity. Any employee with zero activity across all three for 30+ days is flagged.'
    },
    {
      q: 'How does the paywall work?',
      a: 'After checkout via Lemon Squeezy you receive an API key. Enter it in the dashboard to unlock full scanning and automated weekly email alerts.'
    },
    {
      q: 'Is employee data stored on your servers?',
      a: 'No. We only store anonymised last-seen timestamps. Raw messages and code are never stored or transmitted to our servers.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          HR Tool for Remote Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Find Inactive Employees<br />
          <span className="text-[#58a6ff]">Still on Payroll</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-10">
          Ghost Employee Detector scans Slack, GitHub, and email to surface team members with zero activity for 30+ days — before payroll does.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Detecting — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for the 7-day trial. Cancel anytime.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          {[['30+', 'Days of inactivity threshold'], ['3', 'Platforms monitored'], ['Weekly', 'Automated HR alerts']].map(([val, label]) => (
            <div key={label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#6e7681] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <div className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#6e7681] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited employee scans',
              'Slack + GitHub + Email monitoring',
              'Weekly automated HR digest',
              'Configurable inactivity threshold',
              'CSV export for payroll review',
              'Priority email support'
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg bg-[#161b22] p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Ghost Employee Detector. Built for remote-first HR teams.
      </footer>
    </main>
  )
}
