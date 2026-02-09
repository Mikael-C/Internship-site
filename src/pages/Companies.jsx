import { DollarSign, Zap, Users, CheckCircle, FolderOpen, MapPin } from 'lucide-react';
import StatsSection from '../components/StatsSection';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

const Companies = () => {
  const stats = [
    { number: "90%", label: "Companies Satisfied", description: "Would recommend to others" },
    { number: "$8,000", label: "Average Savings", description: "Per intern hired" },
    { number: "1 in 3", label: "Conversion Rate", description: "Interns offered full-time roles" },
    { number: "500+", label: "Project Templates", description: "Ready to use" }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Zero Financial Cost",
      description: "Benefit from fully funded intern support, backed by educational partners—no hiring fees or hidden costs."
    },
    {
      icon: Zap,
      title: "Instant Support",
      description: "Bring on qualified interns within days to tackle overdue projects and reduce team backlogs effectively."
    },
    {
      icon: Users,
      title: "Pre-Screened Talent",
      description: "Access a global pool of skilled, motivated interns ready to contribute from day one with minimal onboarding."
    },
    {
      icon: CheckCircle,
      title: "Effortless Matching",
      description: "Receive tailored intern recommendations that fit your needs, or browse candidates independently."
    },
    {
      icon: FolderOpen,
      title: "Ready-Made Projects",
      description: "Choose from 500+ project templates designed to streamline setup and deliver results faster."
    },
    {
      icon: MapPin,
      title: "Access Anywhere",
      description: "Seamlessly onboard and manage interns from anywhere with our remote-first, cloud-based platform."
    }
  ];

  const testimonials = [
    {
      quote: "GlobalPaths has become an extension of our HR department. The quality of interns and the support provided has been exceptional. We've hired multiple interns full-time.",
      name: "Elaine Miller",
      role: "Operations Manager",
      company: "Marketing Consultancy",
      image: "https://images.pexels.com/photos/6893899/pexels-photo-6893899.jpeg?w=200"
    },
    {
      quote: "Working with remote interns through this platform helped us scale our operations without the overhead. The fresh perspectives they bring are invaluable.",
      name: "Graham Patterson",
      role: "Founder & CEO",
      company: "Tech Startup",
      image: "https://images.pexels.com/photos/9301752/pexels-photo-9301752.jpeg?w=200"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-(--color-primary) to-(--color-secondary)">
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-(--color-accent)/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Achieve More With{' '}
                <span className="text-(--color-accent)">Ready-to-Work</span> Interns
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Connect with driven, pre-screened interns to overcome project backlogs, boost productivity, and make real impact—all at zero cost to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary !bg-(--color-accent) hover:!bg-(--color-accent-dark)">
                  Hire Interns
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
                  src="https://images.pexels.com/photos/6893899/pexels-photo-6893899.jpeg?w=600"
                  alt="Professional holding laptop"
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
              Tackle Your Talent Needs with{' '}
              <span className="text-(--color-primary)">Zero Overheads</span>
            </h2>
            <p className="text-xl text-(--color-gray-dark) leading-relaxed">
              As we face a global skills gap, finding diverse talent and building talent pipelines is a priority 
              for business leaders worldwide. Our platform provides the support you need to onboard the right 
              interns quickly and get additional help, without hiring or recruitment overheads.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Work Done & Make an Impact
            </h2>
            <p className="text-xl text-(--color-gray) max-w-3xl mx-auto">
              Our platform connects you with ambitious interns worldwide. With built-in support and pre-screened talent.
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
        title="Access a Pool of Ambitious Talent"
        subtitle="Harness the power of dedicated interns to grow your business faster, with zero financial burden"
        bgColor="bg-(--color-light)"
      />

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success Stories from Companies
            </h2>
            <p className="text-xl text-(--color-gray) max-w-3xl mx-auto">
              See how businesses worldwide are leveraging our platform to grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Find Top Talent and Hire Remote Interns Today"
        subtitle="Start building your team with skilled, motivated interns from around the world"
        primaryButton={{ text: "Get Started", link: "#" }}
        secondaryButton={{ text: "Schedule Demo", link: "#" }}
        bgImage="https://images.pexels.com/photos/5940844/pexels-photo-5940844.jpeg?w=1200"
      />
    </div>
  );
};

export default Companies;
