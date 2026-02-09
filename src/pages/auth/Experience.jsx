import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BriefcaseBusiness, UsersRound, Globe, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Experience = () => {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: BriefcaseBusiness,
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      title: 'Industry experience that matters',
      description: 'Work on projects that demonstrate your potential'
    },
    {
      icon: UsersRound,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      title: 'Personalised coaching for your career',
      description: 'Sharpen your skills and direction with 1:1 sessions'
    },
    {
      icon: Globe,
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      title: 'International industry exposure',
      description: 'Get matched to innovative companies worldwide'
    }
  ];

  const testimonials = [
    {
      name: 'Rebecca Wood',
      role: 'Front End Development',
      image: 'https://images.pexels.com/photos/12899183/pexels-photo-12899183.jpeg',
      quote: 'Virtual Internships allowed me to gain practical experience in a new field, connect with a new mentor, and learn new skills which have added value to my life',
      photographer: 'Mizuno K on Pexels'
    },
    {
      name: 'Michael Chen',
      role: 'Backend Engineering',
      image: 'https://images.pexels.com/photos/12902899/pexels-photo-12902899.jpeg',
      quote: 'The mentorship I received was invaluable. I learned industry best practices and gained confidence in my technical abilities',
      photographer: 'Mizuno K on Pexels'
    },
    {
      name: 'Sarah Johnson',
      role: 'UX Design',
      image: 'https://images.pexels.com/photos/12903147/pexels-photo-12903147.jpeg',
      quote: 'Working with an international team gave me insights into different perspectives and approaches to problem-solving',
      photographer: 'Mizuno K on Pexels'
    }
  ];

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleBack = () => {
    navigate('/auth/personalization');
  };

  const handleJoinProgram = () => {
    navigate('/auth/program-selection');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-100 via-red-100 to-purple-100 opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-orange-500 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-red-400 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-purple-500 rounded-full opacity-50 blur-3xl"></div>
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white rounded-full"></div>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-teal-600">VIRTUAL</div>
          <div className="text-gray-600 -mt-1">INTERNSHIPS</div>
        </div>
      </div>

      {/* User Badge */}
      <div className="absolute top-8 right-8">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold">
          UC
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Features */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Get the <span className="text-teal-600">experience</span> you won't find<br />
                in the classroom
              </h1>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                      <feature.icon size={28} className={feature.iconColor} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Testimonial */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={`${testimonials[currentTestimonial].name}, ${testimonials[currentTestimonial].photographer}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {testimonials[currentTestimonial].role}
                </p>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>

                {/* Navigation */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrevTestimonial}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={20} className="text-gray-700" />
                  </button>
                  <button
                    onClick={handleNextTestimonial}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={20} className="text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-between items-center mt-16">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft size={20} />
              Back
            </button>

            <button
              onClick={handleJoinProgram}
              className="px-8 py-3.5 bg-gray-900 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors"
            >
              Join program
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
