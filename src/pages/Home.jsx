import { Briefcase, Users, BadgeCheck, Globe, Clock, CalendarClock } from 'lucide-react';
import { Link } from 'react-router';
import StatsSection from '../components/StatsSection';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

const Home = () => {
  const stats = [
    { number: "300k+", label: "Global Internships", description: "Available now and growing" },
    { number: "100+", label: "Countries", description: "Offering real-world experience" },
    { number: "96%", label: "Satisfaction Rate", description: "Developing career skills" },
    { number: "1 in 3", label: "Get Hired", description: "Post-program completion" }
  ];

  const features = [
    {
      icon: Clock,
      title: "Complete Flexibility",
      description: "Choose your start date, internship length, and weekly commitment. Work on your schedule, from anywhere in the world."
    },
    {
      icon: BadgeCheck,
      title: "Guaranteed Placement",
      description: "No matter your degree, location, or experience level – we'll match you with the right opportunity."
    },
    {
      icon: Globe,
      title: "Global Experience",
      description: "Work remotely with thousands of companies worldwide looking for ambitious talent like you."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Professional coaching and mentorship throughout your journey to ensure career success."
    },
    {
      icon: CalendarClock,
      title: "Real Projects",
      description: "Gain hands-on experience with meaningful work that contributes to real business outcomes."
    },
    {
      icon: Briefcase,
      title: "Career Growth",
      description: "Build your professional network and develop skills that employers are actively seeking."
    }
  ];

  const testimonials = [
    {
      quote: "GlobalPaths helped me land my dream role. The remote internship gave me flexibility to work while studying, and the experience was invaluable.",
      name: "Sarah Johnson",
      role: "Marketing Analyst",
      company: "Tech Innovations Inc",
      image: "https://images.pexels.com/photos/3986984/pexels-photo-3986984.jpeg?w=200"
    },
    {
      quote: "The platform connected us with exceptional talent from around the world. Our interns brought fresh perspectives and made significant contributions.",
      name: "Michael Chen",
      role: "CEO",
      company: "Digital Solutions Co",
      image: "https://images.pexels.com/photos/6893899/pexels-photo-6893899.jpeg?w=200"
    },
    {
      quote: "As an educator, I've seen firsthand how these internships transform student employability. It's a game-changer for career readiness.",
      name: "Dr. Emily Rodriguez",
      role: "Career Services Director",
      company: "State University",
      image: "https://images.pexels.com/photos/5940844/pexels-photo-5940844.jpeg?w=200"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        {/* Background with circular organic shapes */}
        <div className="absolute inset-0">
          {/* Large teal circle on the right */}
          <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-[#17B6A6] rounded-full"></div>
          
          {/* Dark teal organic shape bottom right */}
          <div className="absolute bottom-[-15%] right-[5%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-[#124A4D] rounded-[40%_60%_70%_30%/60%_30%_70%_40%]"></div>
          
          {/* Orange/Yellow curved accent shape */}
          <div className="absolute top-[20%] right-[15%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-gradient-to-br from-(--color-accent) to-yellow-400 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-90"></div>
          
          {/* Small teal accent bottom left */}
          <div className="absolute bottom-[10%] left-[-5%] w-[20vw] h-[20vw] max-w-[250px] max-h-[250px] bg-[#17B6A6] rounded-[70%_30%_50%_50%/30%_60%_40%_70%]"></div>
        </div>

        <div className="container-custom relative z-10 section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-(--color-dark)">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The only platform that{' '}
                <span className="text-[#17B6A6]">guarantees</span> real-world work experience across the globe
              </h1>
              <p className="text-lg md:text-xl mb-8 text-(--color-gray-dark)">
                Shaping tomorrow's workforce: one internship at a time
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/companies" className="btn-primary !bg-(--color-accent) hover:!bg-(--color-accent-dark) text-center inline-flex items-center justify-center gap-2">
                  <Briefcase size={20} />
                  Companies: Hire
                </Link>
                <Link to="/educators" className="btn-secondary !border-(--color-dark) !text-(--color-dark) hover:!bg-(--color-dark) hover:!text-white text-center inline-flex items-center justify-center gap-2">
                  <Users size={20} />
                  Educators: Partner
                </Link>
                <Link to="/students" className="btn-primary !bg-[#17B6A6] hover:!bg-[#129B8D] text-center inline-flex items-center justify-center gap-2">
                  <BadgeCheck size={20} />
                  Interns: Apply
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative z-20">
              <img
                src="https://images.pexels.com/photos/3808023/pexels-photo-3808023.jpeg?w=600"
                alt="Young professional working remotely"
                className="rounded-2xl w-full h-[450px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative bg-[#124A4D] section-padding overflow-hidden">
        {/* Background organic shapes */}
        <div className="absolute inset-0">
          {/* Large yellow/orange curved shape bottom right */}
          <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gradient-to-br from-(--color-accent) to-yellow-400 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-90"></div>
          
          {/* Teal accent shape top left */}
          <div className="absolute top-[-10%] left-[-5%] w-[30vw] h-[30vw] max-w-[350px] max-h-[350px] bg-[#17B6A6] rounded-[70%_30%_50%_50%/30%_60%_40%_70%] opacity-80"></div>
          
          {/* Small dark accent bottom left */}
          <div className="absolute bottom-[5%] left-[10%] w-[20vw] h-[20vw] max-w-[250px] max-h-[250px] bg-[#0D3335] rounded-full opacity-60"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The Future of Work is Changing.{' '}
              <span className="block mt-2">Are You Ready?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              As AI technology reshapes industries, work-based learning is more essential than ever. 
              Real-world experience not only empowers learners but also equips employers with fresh talent 
              ready to drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Solution: <span className="text-(--color-primary)">GlobalPaths</span>
            </h2>
            <p className="text-xl text-(--color-gray) max-w-3xl mx-auto">
              Connecting educators, companies, and students to create lasting, meaningful impact through remote internships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection 
        stats={stats}
        title="Proven Results: Global Impact"
        subtitle="Join thousands who have transformed their careers through our platform"
        bgColor="bg-(--color-light)"
      />

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real Stories. Real Impact
            </h2>
            <p className="text-xl text-(--color-gray) max-w-3xl mx-auto">
              Success stories from companies, educators, and students who have benefited from our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-(--color-light) section-padding">
        <div className="container-custom">
          <h3 className="text-center text-2xl font-bold mb-12 text-(--color-gray)">
            Trusted by Leading Organizations Worldwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-4xl font-bold">TechCorp</div>
            <div className="text-4xl font-bold">EduGlobal</div>
            <div className="text-4xl font-bold">InnovateCo</div>
            <div className="text-4xl font-bold">FutureWorks</div>
            <div className="text-4xl font-bold">GlobalU</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Journey?"
        subtitle="Join thousands of students, companies, and educators transforming careers worldwide"
        primaryButton={{ text: "Get Started Now", link: "/students" }}
        secondaryButton={{ text: "Learn More", link: "/about" }}
        bgImage="https://images.pexels.com/photos/3986928/pexels-photo-3986928.jpeg?w=1200"
      />
    </div>
  );
};

export default Home;
