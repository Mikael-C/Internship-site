import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Laptop, Signpost, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';

const Personalization = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState(null);

  const goals = [
    {
      id: 'experience',
      title: 'Gain real experience',
      icon: Laptop,
      iconBg: 'from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'career',
      title: 'Explore career options',
      icon: Signpost,
      iconBg: 'from-amber-50 to-orange-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 'credits',
      title: 'Earn academic credits',
      icon: GraduationCap,
      iconBg: 'from-teal-50 to-cyan-50',
      iconColor: 'text-teal-600'
    },
    {
      id: 'skills',
      title: 'Build professional skills',
      icon: Briefcase,
      iconBg: 'from-emerald-50 to-green-50',
      iconColor: 'text-emerald-600'
    }
  ];

  const handleNext = () => {
    if (selectedGoal) {
      navigate('/auth/experience');
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-purple-100 to-pink-100 opacity-40"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-400 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/2 w-56 h-56 bg-pink-400 rounded-full opacity-40 blur-3xl"></div>
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
        {/* Progress Indicator */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex gap-2">
            <div className="h-1.5 flex-1 bg-gray-900 rounded-full"></div>
            <div className="h-1.5 flex-1 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-teal-600">
            Hey Ugochukwu
          </h1>
          <p className="text-2xl md:text-3xl text-gray-900 font-semibold">
            What's your primary goal from this internship program?
          </p>
        </div>

        {/* Goal Options */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 mb-16">
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setSelectedGoal(goal.id)}
              className={`bg-white border-2 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl ${
                selectedGoal === goal.id
                  ? 'border-teal-500 shadow-xl ring-2 ring-teal-200'
                  : 'border-gray-200 hover:border-teal-300'
              }`}
            >
              <div className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${goal.iconBg} flex items-center justify-center`}>
                <goal.icon size={48} className={goal.iconColor} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
            </button>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            disabled={!selectedGoal}
            className={`px-8 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 ${
              selectedGoal
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Next
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personalization;
