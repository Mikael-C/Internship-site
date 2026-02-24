import CTASection from '../components/CTASection';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] right-[-10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-(--color-primary-light) rounded-full opacity-20" />
          <div className="absolute bottom-[-15%] left-[-5%] w-[40vw] h-[40vw] max-w-[520px] max-h-[520px] bg-(--color-accent) rounded-[70%_30%_50%_50%/30%_60%_40%_70%] opacity-20" />
        </div>

        <div className="container-custom relative z-10 section-padding">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.2em] text-sm font-semibold text-(--color-primary)">
              About GlobalPaths
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">
              Building the future of work-based learning
            </h1>
            <p className="text-lg md:text-xl text-(--color-gray-dark) max-w-2xl">
              GlobalPaths connects ambitious learners, forward-thinking companies, and innovative educators
              to create meaningful, project-based remote internship experiences across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="section-padding bg-(--color-light)">
        <div className="container-custom grid gap-12 lg:grid-cols-[3fr,2fr] items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our mission
            </h2>
            <p className="text-lg text-(--color-gray-dark) mb-4">
              We believe that transformative careers start with real-world experience. Our mission is to make
              work-based learning accessible to every learner—regardless of geography, background, or network—
              while helping companies and universities build sustainable talent pipelines.
            </p>
            <p className="text-lg text-(--color-gray-dark)">
              By combining human support with intelligent matching, we design immersive remote internships
              that prepare learners for the future of work and give organizations the talent advantage they need.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-(--color-light) p-8 space-y-6">
            <h3 className="text-xl font-semibold mb-2">At a glance</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-(--color-light)">
                <p className="text-3xl font-extrabold text-(--color-primary)">300k+</p>
                <p className="text-sm text-(--color-gray-dark)">Global internship opportunities</p>
              </div>
              <div className="p-4 rounded-2xl bg-(--color-light)">
                <p className="text-3xl font-extrabold text-(--color-accent)">100+</p>
                <p className="text-sm text-(--color-gray-dark)">Countries represented</p>
              </div>
              <div className="p-4 rounded-2xl bg-(--color-light)">
                <p className="text-3xl font-extrabold text-(--color-primary)">96%</p>
                <p className="text-sm text-(--color-gray-dark)">Satisfaction rate</p>
              </div>
              <div className="p-4 rounded-2xl bg-(--color-light)">
                <p className="text-3xl font-extrabold text-(--color-accent)">1 in 3</p>
                <p className="text-sm text-(--color-gray-dark)">Interns hired full-time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership & team</h2>
            <p className="text-lg text-(--color-gray-dark)">
              We&apos;re a distributed team of educators, technologists, and talent leaders united by a shared
              belief: careers should be built on opportunity, not access.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Amira Hassan',
                role: 'Co-Founder & CEO',
                bio: 'Former university career director helping students secure global opportunities at scale.',
              },
              {
                name: 'Daniel Kim',
                role: 'Co-Founder & CTO',
                bio: 'Technologist focused on matching algorithms that unlock fair, data-informed hiring.',
              },
              {
                name: 'Lucia Martínez',
                role: 'VP, Partnerships',
                bio: 'Works with universities and employers to design transformative internship programs.',
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl border border-(--color-light) shadow-sm p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-(--color-primary) to-(--color-secondary) mb-4" />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm font-medium text-(--color-primary) mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-(--color-gray-dark)">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers preview */}
      <section id="careers" className="section-padding bg-(--color-light)">
        <div className="container-custom grid gap-10 lg:grid-cols-[3fr,2fr] items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Careers at GlobalPaths</h2>
            <p className="text-lg text-(--color-gray-dark) mb-6">
              Join a mission-driven, remote-first team shaping the future of work-based learning. We hire
              builders, educators, and operators who care deeply about impact.
            </p>
            <ul className="space-y-3 text-(--color-gray-dark)">
              <li>• Remote-first, globally distributed team</li>
              <li>• Learning budget and mentorship for every team member</li>
              <li>• Mission-led culture focused on outcomes, not hours</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-(--color-light) p-6 space-y-4">
            <h3 className="text-lg font-semibold">Featured roles</h3>
            <div className="space-y-3 text-sm text-(--color-gray-dark)">
              <div className="p-3 rounded-2xl bg-(--color-light)">
                Product Manager – Learner Experience
              </div>
              <div className="p-3 rounded-2xl bg-(--color-light)">
                Partnership Success Lead – Universities
              </div>
              <div className="p-3 rounded-2xl bg-(--color-light)">
                Senior Software Engineer – Platform
              </div>
            </div>
            <p className="text-sm text-(--color-gray-dark)">
              Looking for something else? Explore all open roles on our dedicated careers page.
            </p>
          </div>
        </div>
      </section>

      {/* Press */}
      <section id="press" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">In the press</h2>
            <p className="text-lg text-(--color-gray-dark)">
              GlobalPaths is featured in leading publications covering the future of work, employability, and
              remote education.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {['Future of Work Weekly', 'Global Education Review', 'Remote First Journal'].map((outlet) => (
              <div
                key={outlet}
                className="rounded-3xl border border-(--color-light) bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-(--color-gray)">Featured in</p>
                  <p className="mt-3 text-xl font-semibold">{outlet}</p>
                </div>
                <p className="mt-4 text-sm text-(--color-gray-dark)">
                  Read how GlobalPaths is helping learners and organizations redefine access to meaningful,
                  project-based work experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Partner with GlobalPaths"
        subtitle="Whether you&apos;re a university, company, or learner, we&apos;d love to help you design meaningful work-based learning experiences."
        primaryButton={{ text: 'Talk to our team', link: '/contact' }}
        secondaryButton={{ text: 'View careers', link: '/careers' }}
        bgImage="https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?w=1200"
      />
    </div>
  );
};

export default About;

