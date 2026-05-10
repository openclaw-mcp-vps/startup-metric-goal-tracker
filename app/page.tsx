export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Analytics
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Track Progress Toward{" "}
          <span className="text-[#58a6ff]">Investor Milestones</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop scrambling before board meetings. Startup Metric Goal Tracker gives founders and growth teams a real-time dashboard to monitor key metrics against investor-promised milestones — with automated alerts before you miss a target.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Tracking — $199/mo
          </a>
          <span className="text-[#8b949e] text-sm">No setup fees · Cancel anytime</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { stat: "Real-Time", label: "Metric ingestion & updates" },
            { stat: "Automated", label: "Alerts before missed targets" },
            { stat: "Visual", label: "Progress bars & trend charts" }
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-2xl font-bold text-[#58a6ff] mb-1">{item.stat}</div>
              <div className="text-[#8b949e] text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$199</div>
          <div className="text-[#8b949e] mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited metric goals & milestones",
              "Real-time data ingestion via API",
              "Automated email & Slack alerts",
              "Visual progress dashboards",
              "Investor-ready milestone reports",
              "Priority support"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Secured by Lemon Squeezy · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does metric ingestion work?",
              a: "You push data to our REST API or connect via webhook. Metrics update in real-time on your dashboard, so you always have the latest numbers without manual entry."
            },
            {
              q: "When will I receive milestone alerts?",
              a: "You set the thresholds. We send automated email and Slack notifications when a metric falls behind pace, giving you time to course-correct before your next investor update."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. There are no long-term contracts. Cancel from your billing portal at any time and you'll retain access until the end of your current billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Startup Metric Goal Tracker. All rights reserved.
      </footer>
    </main>
  );
}
