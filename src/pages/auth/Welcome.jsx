import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GraduationCap, Laptop, ArrowRight } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);

  // Decorative avatar colors
  const avatarColors = [
    'bg-purple-200',
    'bg-pink-200',
    'bg-orange-200',
    'bg-teal-200'
  ];

  const handleSelection = (type) => {
    setSelectedType(type);
    setTimeout(() => {
      if (type === 'internship') {
        navigate('/auth/choose-path');
      } else {
        navigate('/auth/company-signup');
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-8 left-12 w-20 h-20 rounded-full bg-purple-200 opacity-60"></div>
      <div className="absolute top-32 right-16 w-16 h-16 rounded-full bg-teal-300 opacity-70"></div>
      <div className="absolute bottom-16 left-8 w-24 h-24 rounded-full bg-pink-200 opacity-50"></div>
      <div className="absolute bottom-32 right-12 w-20 h-20 rounded-full bg-orange-200 opacity-60"></div>
      
      {/* Additional decorative avatars */}
      <div className="absolute top-48 left-16">
        <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
          <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute top-64 right-24">
        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
          <div className="w-6 h-6 bg-pink-600 rounded-full"></div>
        </div>
      </div>

      <div className="container-custom section-padding py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Remote Internships</h1>
          <p className="text-2xl text-(--color-gray-dark)">What are you looking for?</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Internship Option */}
          <div
            onClick={() => handleSelection('internship')}
            className={`bg-white border-2 rounded-2xl p-8 cursor-pointer transition-all hover:shadow-xl hover:border-(--color-primary) ${
              selectedType === 'internship' ? 'border-(--color-primary) shadow-xl' : 'border-gray-200'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <GraduationCap size={64} className="text-(--color-primary)" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">I'm looking for an internship</h3>
              <ArrowRight className="mt-4 text-(--color-primary)" size={24} />
            </div>
          </div>

          {/* Company Option */}
          <div
            onClick={() => handleSelection('company')}
            className={`bg-white border-2 rounded-2xl p-8 cursor-pointer transition-all hover:shadow-xl hover:border-(--color-primary) ${
              selectedType === 'company' ? 'border-(--color-primary) shadow-xl' : 'border-gray-200'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl flex items-center justify-center">
                <Laptop size={64} className="text-(--color-accent)" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">I'm looking for an intern for my company</h3>
              <ArrowRight className="mt-4 text-(--color-primary)" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
