import { Clock, BadgeCheck, Globe, Users, Award, Sparkles } from 'lucide-react';
import StatsSection from '../components/StatsSection';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

const Students = () => {
  const stats = [
    { number: "300k+", label: "Global Internships", description: "Available now and growing" },
    { number: "100+", label: "Countries", description: "Internships worldwide" },
    { number: "2:1", label: "Coaching Calls", description: "Professional guidance" },
    { number: "1 in 3", label: "Interns Hired", description: "Offered roles post-completion" }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Complete Flexibility",
      description: "You choose your start date, internship length, and weekly commitment of hours. Work on your schedule."
    },
    {
      icon: BadgeCheck,
      title: "Guaranteed Placement",
      description: "No matter your degree, location, or experience – we'll find you the right internship in your field."
    },
    {
      icon: Globe,
      title: "Real Experience",
      description: "Work remotely with one of thousands of companies looking for ambitious talent like you."
    },
    {
      icon: Users,
      title: "Coaching & Support",
      description: "You will be supported by a team of expert coaches to guide you towards career success."
    },
    {
      icon: Award,
      title: "Award-Winning Courses",
      description: "Complement your internship with access to courses to build the skills that will set you apart."
    },
    {
      icon: Sparkles,
      title: "Save Time",
      description: "Tell us what remote internship you want – we match you based on your preferences and goals."
    }
  ];

  const testimonials = [
    {
      quote: "My remote internship with GlobalPaths was life-changing. I gained real-world experience while studying full-time, and it led to a full-time offer!",
      name: "Aishah Sofea",
      role: "Data Analyst Intern",
      company: "Now at Tech Solutions",
      image: "https://images.pexels.com/photos/3808023/pexels-photo-3808023.jpeg?w=200"
    },
    {
      quote: "The flexibility of a remote internship allowed me to work part-time while completing my degree. The experience was invaluable for my career.",
      name: "John Passmore",
      role: "HR Intern",
      company: "Now Client Executive at Global Corp",
      image: "https://images.pexels.com/photos/7584933/pexels-photo-7584933.jpeg?w=200"
    },
    {
      quote: "I never thought I could get international work experience from my home country. This platform made it possible and opened doors I never imagined.",
      name: "Maria Santos",
      role: "Marketing Intern",
      company: "Now Digital Marketing Manager",
      image: "https://images.pexels.com/photos/5908769/pexels-photo-5908769.jpeg?w=200"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-(--color-secondary) via-(--color-primary) to-(--color-secondary)">
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-(--color-accent)/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Give Yourself an{' '}
                <span className="text-(--color-accent)">Unbeatable</span> Advantage
              </h1>
              <p className="text-xl mb-8 text-white/90">
                The only platform that guarantees real-world work experience across the globe. Launch your career with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary !bg-(--color-accent) hover:!bg-(--color-accent-dark)">
                  Enroll Now
                </button>
                <button className="btn-outline">
                  How It Works
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-(--color-accent)/30 to-white/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20">
                <img
                  src="https://images.pexels.com/photos/3808023/pexels-photo-3808023.jpeg?w=600"
                  alt="Student working on laptop"
                  className="rounded-2xl w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-(--color-light) section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Reality of{' '}
              <span className="text-(--color-primary)">Starting Your Career</span>
            </h2>
            <p className="text-xl text-(--color-gray-dark) leading-relaxed">
              The need for work experience is essential, but getting a job can be tough. You need experience, 
              but to gain experience, you need a job. Internships are competitive, with 80% of employers 
              considering it a critical factor for recent graduates. So, what do you do?
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How it works
            </h2>
            <p className="text-xl text-(--color-gray) max-w-3xl mx-auto">
              A clear path from application to real-world experience, designed around your schedule.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Apply in minutes',
                body: 'Tell us about your interests, goals, and availability—no prior experience required.',
              },
              {
                step: '02',
                title: 'Get matched',
                body: 'We connect you with remote internships that align with your field and ambitions.',
              },
              {
                step: '03',
                title: 'Gain experience',
                body: 'Work on real projects with support from coaches and mentors throughout your journey.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-3xl border border-(--color-light) shadow-sm p-6 text-left"
              >
                <p className="text-sm font-semibold text-(--color-primary) mb-2">
                  Step {item.step}
                </p>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-(--color-gray-dark)">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Benefits Section */}
      <section id="benefits" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Answer? <span className="text-(--color-primary)">GlobalPaths</span>
            </h2>
            <p className="text-xl text-(--color-gray) max-w-3xl mx-auto">
              Land a guaranteed internship in your chosen career field, flexible to your schedule, no prior experience necessary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FeatureCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection 
        stats={stats}
        title="Launch Your Career"
        subtitle="Gain valuable skills and knowledge from top companies worldwide, all from the comfort of your own home"
        bgColor="bg-(--color-light)"
      />

      {/* Testimonials */}
      <section id="testimonials" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Students Love GlobalPaths
            </h2>
            <p className="text-xl text-(--color-gray) max-w-3xl mx-auto">
              Join our global network of alumni who have landed prestigious jobs worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Career Fields */}
      <section id="career-fields" className="bg-(--color-light) section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Explore career fields
            </h2>
            <p className="text-lg text-(--color-gray-dark) max-w-3xl mx-auto">
              Discover opportunities across business, technology, creative industries, and more.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              'Business, Finance & Consulting',
              'Technology, Data & Product',
              'Marketing, Communications & Design',
              'People, HR & Operations',
              'Policy, Non-profit & Impact',
              'And many more...',
            ].map((field) => (
              <div
                key={field}
                className="bg-white rounded-3xl border border-(--color-light) p-5 text-sm text-(--color-gray-dark)"
              >
                {field}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="section-padding">
        <div className="container-custom grid gap-10 lg:grid-cols-[2fr,2.2fr] items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built around your life, not the other way around
            </h2>
            <p className="text-lg text-(--color-gray-dark) mb-4">
              Choose from part-time or full-time internships, summer programs, or shorter sprints that fit
              alongside your studies, work, or other commitments.
            </p>
            <p className="text-sm text-(--color-gray-dark)">
              Every experience includes structured support, feedback, and reflection so you can translate your
              work into stories that stand out on applications and interviews.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-(--color-light) p-5 text-sm text-(--color-gray-dark)">
              <p className="font-semibold mb-1">4–12 week programs</p>
              <p>Flexible start dates with options for 10–30 hours per week.</p>
            </div>
            <div className="rounded-3xl bg-(--color-light) p-5 text-sm text-(--color-gray-dark)">
              <p className="font-semibold mb-1">Project-based sprints</p>
              <p>Shorter, intensive experiences to build portfolio-ready work.</p>
            </div>
            <div className="rounded-3xl bg-(--color-light) p-5 text-sm text-(--color-gray-dark)">
              <p className="font-semibold mb-1">Year-round intakes</p>
              <p>Apply at any time of year—no need to wait for summer.</p>
            </div>
            <div className="rounded-3xl bg-(--color-light) p-5 text-sm text-(--color-gray-dark)">
              <p className="font-semibold mb-1">Coaching built-in</p>
              <p>Career coaching and skills support alongside your internship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-(--color-light) section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Frequently asked questions</h2>
            <p className="text-lg text-(--color-gray-dark) max-w-3xl mx-auto">
              Answers to common questions about eligibility, time commitment, and outcomes.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Do I need previous work experience to apply?',
                a: 'No. Our programs are designed for students and career changers at different stages. We focus on your motivation, interests, and potential.',
              },
              {
                q: 'How many hours per week do I need to commit?',
                a: 'Most programs range from 10–30 hours per week. During matching, we work with you to find opportunities that fit your schedule.',
              },
              {
                q: 'Can I get academic credit?',
                a: 'Many of our university partners offer credit-bearing options. We can provide documentation and support where required.',
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-white rounded-3xl border border-(--color-light) p-5 text-left"
              >
                <p className="font-semibold mb-2">{item.q}</p>
                <p className="text-sm text-(--color-gray-dark)">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Start Your Career Journey with GlobalPaths!"
        subtitle="Apply now and take the first step towards your dream career"
        primaryButton={{ text: "Apply Now", link: "#" }}
        secondaryButton={{ text: "Learn More", link: "#" }}
        bgImage="https://images.pexels.com/photos/5676734/pexels-photo-5676734.jpeg?w=1200"
      />
    </div>
  );
};

export default Students;
