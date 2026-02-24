const Careers = () => {
  const roles = [
    {
      title: 'Senior Software Engineer',
      location: 'Remote · Global',
      type: 'Full-time',
      summary: 'Build the platform that powers matching, onboarding, and program delivery for learners worldwide.',
    },
    {
      title: 'Partnerships Manager – Universities',
      location: 'Remote · EMEA / APAC',
      type: 'Full-time',
      summary: 'Lead strategic relationships with universities and governments adopting work-based learning at scale.',
    },
    {
      title: 'Program Success Manager',
      location: 'Remote · Americas',
      type: 'Full-time',
      summary: 'Design and support internship programs that drive measurable career outcomes for learners.',
    },
  ];

  const benefits = [
    'Remote-first culture with flexible, asynchronous collaboration',
    'Annual learning & development budget for every team member',
    'Inclusive, mission-driven environment where impact is visible',
    'Ownership, autonomy, and room to grow your career',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-(--color-primary) via-(--color-secondary) to-(--color-primary)">
          <div className="absolute top-10 right-0 w-[320px] h-[320px] bg-(--color-accent)/25 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[260px] h-[260px] bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 section-padding text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Help millions of learners unlock global opportunities
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Join a diverse, remote team building the infrastructure for work-based learning across borders.
          </p>
        </div>
      </section>

      {/* Why work here */}
      <section className="section-padding bg-(--color-light)">
        <div className="container-custom grid gap-10 lg:grid-cols-[2.2fr,2fr] items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work with purpose</h2>
            <p className="text-lg text-(--color-gray-dark) mb-6">
              Every role at GlobalPaths contributes directly to bridging the gap between education and meaningful work.
              You&apos;ll help learners gain real experience, while enabling companies and universities to run
              world-class internship programs.
            </p>
            <ul className="space-y-3 text-(--color-gray-dark)">
              {benefits.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-(--color-primary)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-(--color-light) p-6 space-y-4">
            <h3 className="text-lg font-semibold">How we hire</h3>
            <ol className="list-decimal list-inside text-sm text-(--color-gray-dark) space-y-2">
              <li>Share your experience, portfolio, or LinkedIn profile.</li>
              <li>Meet with the hiring manager and future collaborators.</li>
              <li>Complete a short, role-specific task or case study.</li>
              <li>Final conversation focused on ways of working and values.</li>
            </ol>
            <p className="text-xs text-(--color-gray) mt-2">
              We value skills, potential, and lived experience over traditional pedigrees.
            </p>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Open roles</h2>
              <p className="text-(--color-gray-dark)">
                Don&apos;t see a perfect fit? We&apos;d still love to hear from you.
              </p>
            </div>
            <p className="text-sm text-(--color-gray)">
              GlobalPaths is an equal opportunity employer. We celebrate diversity and are committed to building
              an inclusive environment for all teammates.
            </p>
          </div>

          <div className="space-y-4">
            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-white rounded-3xl border border-(--color-light) shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
                  <p className="text-sm text-(--color-gray-dark) mb-2">
                    {role.location} · {role.type}
                  </p>
                  <p className="text-sm text-(--color-gray-dark) max-w-xl">{role.summary}</p>
                </div>
                <button type="button" className="btn-secondary md:shrink-0">
                  View role
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-gradient-to-r from-(--color-primary)/10 to-(--color-secondary)/10 border border-(--color-primary)/10 p-6 text-sm text-(--color-gray-dark)">
            <p className="font-semibold mb-1">No open roles that match?</p>
            <p>
              Send us a short note and your CV to <span className="font-semibold">careers@globalpaths.com</span>. We
              review speculative applications regularly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

