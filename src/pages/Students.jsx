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

      {/* Solution Section */}
      <section className="section-padding">
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
      <section className="section-padding">
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
