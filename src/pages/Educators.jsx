import { GraduationCap, TrendingUp, Globe, CheckCircle, Users, Zap } from 'lucide-react';
import StatsSection from '../components/StatsSection';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

const Educators = () => {
  const stats = [
    { number: "300k+", label: "Project-Based Placements", description: "Available now and growing" },
    { number: "100%", label: "Guaranteed Placements", description: "In all career fields" },
    { number: "1 in 3", label: "Interns Hired", description: "Offered roles post-completion" },
    { number: "3 out of 4", label: "Partners", description: "Offer academic credit" }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Student Employability",
      description: "Guarantee work experience with approved companies looking for diverse, ambitious talent worldwide."
    },
    {
      icon: Globe,
      title: "Real-World Experience",
      description: "Students collaborate in real professional environments across the globe, gaining valuable skills."
    },
    {
      icon: CheckCircle,
      title: "Intelligent Matching",
      description: "Considering nearly 400k data points to connect your students with the best possible learning opportunities."
    },
    {
      icon: Zap,
      title: "Time Efficient",
      description: "Say goodbye to hours of tedious searching and let us help your students achieve their career goals."
    },
    {
      icon: Users,
      title: "Guaranteed Placements",
      description: "100% of your students are guaranteed a project-based learning experience in their chosen field."
    },
    {
      icon: GraduationCap,
      title: "Global Scale",
      description: "Partnerships range from 10 to 100,000 students, ensuring scalability at any institution level."
    }
  ];

  const testimonials = [
    {
      quote: "The assistance and support provided was crucial for our internship program success. They worked tirelessly to ensure our specific requirements were met.",
      name: "Dr. Serinah Tan",
      role: "Program Director",
      company: "International University",
      image: "https://images.pexels.com/photos/5940844/pexels-photo-5940844.jpeg?w=200"
    },
    {
      quote: "GlobalPaths offers a professional and valuable service. It's impressive to see students being offered paid employment at the end of their internships.",
      name: "David Morland",
      role: "Global Internships Manager",
      company: "Premier University",
      image: "https://images.pexels.com/photos/8199558/pexels-photo-8199558.jpeg?w=200"
    },
    {
      quote: "Giving our students the professional global exposure they need wouldn't be possible without this program. It's transformed our career services.",
      name: "Dr. Emily Chen",
      role: "Career Services Lead",
      company: "Business School",
      image: "https://images.pexels.com/photos/8199143/pexels-photo-8199143.jpeg?w=200"
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
                Guarantee Your Students an{' '}
                <span className="text-(--color-accent)">Unbeatable</span> Advantage
              </h1>
              <p className="text-xl mb-8 text-white/90">
                The only platform that guarantees 100% of your students real-world work experience with companies across the globe
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary !bg-(--color-accent) hover:!bg-(--color-accent-dark)">
                  Partner With Us
                </button>
                <button className="btn-outline">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-(--color-accent)/30 to-white/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20">
                <img
                  src="https://images.pexels.com/photos/5940844/pexels-photo-5940844.jpeg?w=600"
                  alt="Students collaborating"
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
              The <span className="text-(--color-primary)">Challenge</span>
            </h2>
            <p className="text-xl text-(--color-gray-dark) leading-relaxed">
              Choosing a university that enhances employability is critical for students, yet only 35% feel ready 
              for the workforce. Employers favor graduates with practical experience, but providing such opportunities 
              at scale poses a significant challenge. It's time to address this issue and equip students with the 
              skills they need to succeed.
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
              Career Accelerator Program - the #1 platform for universities to improve career readiness through experiential learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FeatureCard key={index} {...benefit} />
            ))}
          </div>

          {/* Highlight Box */}
          <div className="mt-16 bg-gradient-to-br from-(--color-primary)/10 to-(--color-secondary)/10 rounded-3xl p-12 text-center border border-(--color-primary)/20">
            <div className="text-7xl font-bold mb-4 bg-gradient-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent">
              10x
            </div>
            <p className="text-2xl font-semibold">
              On average, universities that partner with us gain <strong>10x the total number</strong> of internship opportunities for their students – from day one
            </p>
          </div>
        </div>
      </section>

      {/* Segments: Bootcamps, Governments, Affiliates */}
      <section className="bg-(--color-light) section-padding">
        <div className="container-custom grid gap-8 md:grid-cols-3">
          <div id="bootcamps" className="bg-white rounded-3xl border border-(--color-light) p-6">
            <h3 className="text-lg font-semibold mb-2">For bootcamps</h3>
            <p className="text-sm text-(--color-gray-dark)">
              Integrate remote, project-based experiences that help learners showcase real portfolios to employers
              and hiring partners.
            </p>
          </div>
          <div id="governments" className="bg-white rounded-3xl border border-(--color-light) p-6">
            <h3 className="text-lg font-semibold mb-2">For governments</h3>
            <p className="text-sm text-(--color-gray-dark)">
              Scale national or regional work experience initiatives with a single platform built for quality and
              reporting.
            </p>
          </div>
          <div id="affiliates" className="bg-white rounded-3xl border border-(--color-light) p-6">
            <h3 className="text-lg font-semibold mb-2">For affiliates</h3>
            <p className="text-sm text-(--color-gray-dark)">
              Partner with us to extend GlobalPaths programs to your learners, members, or alumni communities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection 
        stats={stats}
        title="Results that Count"
        subtitle="Increase your students' employability with a platform customized to help them excel"
        bgColor="bg-(--color-light)"
      />

      {/* Trusted Universities */}
      <section className="section-padding">
        <div className="container-custom">
          <h3 className="text-center text-3xl font-bold mb-12">
            Trusted by Top Universities Worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['StateU', 'TechInst', 'GlobalU', 'CityCollege', 'InnoU', 'FutureEdu'].map((uni, i) => (
              <div key={i} className="text-center text-2xl font-bold text-(--color-gray)/60">
                {uni}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-(--color-light) section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Universities Love GlobalPaths
            </h2>
            <p className="text-xl text-(--color-gray) max-w-3xl mx-auto">
              Increasing student employability through remote internship opportunities
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
        title="Partner With Us Today"
        subtitle="Transform your students' employability and career readiness"
        primaryButton={{ text: "Get Started", link: "#" }}
        secondaryButton={{ text: "Schedule Demo", link: "#" }}
        bgImage="https://images.pexels.com/photos/8199143/pexels-photo-8199143.jpeg?w=1200"
      />
    </div>
  );
};

export default Educators;
