import { useState } from 'react';
import { useNavigate } from 'react-router';
import { User, Award, ClipboardCheck, ChevronLeft, Check, Tag } from 'lucide-react';

const ProgramSelection = () => {
  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState('virtual-internships');

  const programs = [
    {
      id: 'virtual-internships',
      name: 'Virtual Internships',
      fee: '1,000 USD',
      isAvailable: true
    }
  ];

  const stages = [
    {
      id: 'application',
      icon: User,
      title: 'Application',
      description: 'Apply for the program',
      color: 'bg-blue-500',
      borderColor: 'border-blue-500'
    },
    {
      id: 'interview',
      icon: Award,
      title: 'Interview stage',
      description: 'Get interviewed by companies',
      color: 'bg-amber-500',
      borderColor: 'border-amber-500'
    },
    {
      id: 'offer',
      icon: ClipboardCheck,
      title: 'Offer stage',
      description: 'Land an internship offer',
      color: 'bg-green-500',
      borderColor: 'border-green-500'
    }
  ];

  const handleBack = () => {
    navigate('/auth/experience');
  };

  const handleApply = () => {
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-100 via-red-100 to-purple-100 opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-orange-500 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-red-400 rounded-full opacity-40 blur-3xl"></div>
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
            {/* Left Side - Program Selection */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Choose Your <span className="text-teal-600">Internship Program</span>
              </h1>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Select a program that matches your career goals and schedule. Apply directly to get started.
              </p>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">AVAILABLE PROGRAM</h2>
                
                {programs.map((program) => (
                  <div
                    key={program.id}
                    className={`bg-white border-2 rounded-2xl p-6 transition-all ${
                      selectedProgram === program.id
                        ? 'border-teal-500 shadow-lg'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {program.name}
                        </h3>
                        <div className="flex items-center gap-2 text-teal-600">
                          <Tag size={18} />
                          <span className="font-semibold">{program.fee}</span>
                          <span className="text-sm text-gray-600">Program fee</span>
                        </div>
                      </div>
                      {selectedProgram === program.id && (
                        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                          <Check size={18} className="text-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Application Process */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
                Application Process
              </h2>

              <div className="relative space-y-8">
                {stages.map((stage, index) => (
                  <div key={stage.id} className="relative">
                    {/* Connector Line */}
                    {index < stages.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-16 border-l-2 border-dashed border-gray-300"></div>
                    )}

                    {/* Stage Card */}
                    <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${stage.color} rounded-xl flex items-center justify-center shrink-0`}>
                          <stage.icon size={24} className="text-white" strokeWidth={2} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {stage.title}
                          </h3>
                          <p className="text-sm text-teal-600 font-medium">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Success Flag */}
                <div className="flex justify-end">
                  <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-purple-500">
                  </div>
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
              onClick={handleApply}
              className="px-8 py-3.5 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              Apply
              <ChevronLeft size={20} className="rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSelection;
