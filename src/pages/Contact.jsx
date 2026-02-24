const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute top-[-15%] right-[-10%] w-[40vw] h-[40vw] max-w-[520px] max-h-[520px] bg-(--color-secondary-light) rounded-full opacity-20" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[35vw] h-[35vw] max-w-[480px] max-h-[480px] bg-(--color-accent-light) rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-30" />
        </div>

        <div className="container-custom relative z-10 section-padding">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.2em] text-sm font-semibold text-(--color-primary)">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              Let&apos;s build what&apos;s next, together
            </h1>
            <p className="text-lg text-(--color-gray-dark)">
              Reach out to our team for partnerships, learner support, media enquiries, or platform questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section-padding bg-(--color-light)">
        <div className="container-custom grid gap-10 lg:grid-cols-[3fr,2fr] items-start">
          {/* Form (non-functional UI) */}
          <div className="bg-white rounded-3xl shadow-xl border border-(--color-light) p-8">
            <h2 className="text-2xl font-semibold mb-2">Send us a message</h2>
            <p className="text-sm text-(--color-gray-dark) mb-6">
              Share a few details and we&apos;ll respond within 1–2 business days.
            </p>

            <form className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-(--color-gray-dark) mb-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-(--color-gray-light) px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-(--color-primary)/60"
                    placeholder="Alex Johnson"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-(--color-gray-dark) mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-(--color-gray-light) px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-(--color-primary)/60"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-(--color-gray-dark) mb-1">
                  I&apos;m reaching out as a...
                </label>
                <select className="w-full rounded-lg border border-(--color-gray-light) px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-(--color-primary)/60">
                  <option>Student / learner</option>
                  <option>Company</option>
                  <option>University / educator</option>
                  <option>Media / press</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-(--color-gray-dark) mb-1">
                  Topic
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-(--color-gray-light) px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-(--color-primary)/60"
                  placeholder="Partnerships, support, feedback..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-(--color-gray-dark) mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-(--color-gray-light) px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-(--color-primary)/60 resize-none"
                  placeholder="Share as much detail as you can so we can route your request quickly."
                />
              </div>

              <button
                type="button"
                className="btn-primary w-full md:w-auto"
              >
                Submit message
              </button>
            </form>
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-(--color-light) p-6">
              <h3 className="text-lg font-semibold mb-3">How to reach us</h3>
              <div className="space-y-2 text-sm text-(--color-gray-dark)">
                <p><span className="font-semibold">General:</span> hello@globalpaths.com</p>
                <p><span className="font-semibold">Partnerships:</span> partners@globalpaths.com</p>
                <p><span className="font-semibold">Support:</span> support@globalpaths.com</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-(--color-light) p-6">
              <h3 className="text-lg font-semibold mb-3">Where we operate</h3>
              <p className="text-sm text-(--color-gray-dark) mb-3">
                GlobalPaths is a fully remote company with team members across time zones in Europe, Africa,
                Asia-Pacific, and the Americas.
              </p>
              <p className="text-sm text-(--color-gray-dark)">
                We partner with universities and companies in 100+ countries to deliver project-based remote
                internships and work experiences.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-(--color-light) p-6">
              <h3 className="text-lg font-semibold mb-3">Press & media</h3>
              <p className="text-sm text-(--color-gray-dark)">
                For media kits, logos, or interview requests, contact{' '}
                <span className="font-semibold">press@globalpaths.com</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

