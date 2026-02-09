import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GraduationCap, User, Check, HelpCircle, Calendar, Globe, Tag, ArrowLeft } from 'lucide-react';

const ChoosePath = () => {
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState(null);

  const handleContinue = () => {
    if (selectedPath) {
      navigate('/auth/get-started');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-2 gap-12 min-h-[calc(100vh-4rem)]">
          {/* Left Side - Form */}
          <div className="flex flex-col">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">
                Start Your <span className="text-[#17B6A6]">Internship</span> Journey
              </h1>
              <p className="text-(--color-gray-dark)">And gain experience to be career-ready</p>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-(--color-gray) uppercase mb-4">I AM APPLYING</p>

              {/* Partnership Option */}
              <div
                onClick={() => setSelectedPath('partnership')}
                className={`bg-white rounded-xl p-6 mb-4 cursor-pointer border-2 transition-all ${
                  selectedPath === 'partnership'
                    ? 'border-(--color-primary) shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">Through a partnership</h3>
                      <HelpCircle size={20} className="text-(--color-gray)" />
                    </div>
                    <p className="text-(--color-gray-dark) text-sm mb-4">
                      Select this if you are applying through an institution which has a partnership with Virtual Internships
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 text-sm text-(--color-gray-dark) bg-gray-50 px-3 py-1.5 rounded-full">
                        <Check size={16} />
                        Special programs
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm text-(--color-gray-dark) bg-gray-50 px-3 py-1.5 rounded-full">
                        <HelpCircle size={16} />
                        Support & assistance
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Independent Option */}
              <div
                onClick={() => setSelectedPath('independent')}
                className={`bg-white rounded-xl p-6 cursor-pointer border-2 transition-all ${
                  selectedPath === 'independent'
                    ? 'border-(--color-primary) shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">Independently</h3>
                      <HelpCircle size={20} className="text-(--color-gray)" />
                    </div>
                    <p className="text-(--color-gray-dark) text-sm mb-4">
                      Select this if you are a student applying independently
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 text-sm text-(--color-gray-dark) bg-gray-50 px-3 py-1.5 rounded-full">
                        <Calendar size={16} />
                        Flexible start date
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm text-(--color-gray-dark) bg-gray-50 px-3 py-1.5 rounded-full">
                        <Globe size={16} />
                        Global opportunities
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm text-(--color-gray-dark) bg-gray-50 px-3 py-1.5 rounded-full">
                        <Tag size={16} />
                        Program fees
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('/auth/welcome')}
              className="inline-flex items-center gap-2 text-(--color-gray-dark) hover:text-(--color-primary) mb-6"
            >
              <ArrowLeft size={20} />
              Not a student? Continue as a company
            </button>

            {selectedPath && (
              <button
                onClick={handleContinue}
                className="btn-primary !bg-(--color-primary) hover:!bg-(--color-primary-dark) w-full md:w-auto"
              >
                Continue
              </button>
            )}
          </div>

          {/* Right Side - Social Proof */}
          <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-12 relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-20"></div>
            
            <div className="relative z-10 text-center">
              {/* Avatar Stack */}
              <div className="flex justify-center mb-6">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/80?img=1" alt="User" className="w-12 h-12 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/80?img=5" alt="User" className="w-12 h-12 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/80?img=8" alt="User" className="w-12 h-12 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/80?img=9" alt="User" className="w-12 h-12 rounded-full border-2 border-white" />
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-2">
                <span className="text-[#17B6A6]">10,000+ interns</span> launch their careers with us every month
              </h3>

              <div className="mt-12">
                <p className="text-sm font-semibold mb-6">Trusted by education providers worldwide</p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg text-xs font-bold text-(--color-gray)">NEW MEXICO</div>
                  <div className="bg-white p-4 rounded-lg text-xs font-bold text-(--color-gray)">AUCKLAND</div>
                  <div className="bg-white p-4 rounded-lg text-xs font-bold text-(--color-gray)">EMIRATES</div>
                  <div className="bg-white p-4 rounded-lg text-xs font-bold text-(--color-gray)">S. CAROLINA</div>
                  <div className="bg-white p-4 rounded-lg text-xs font-bold text-(--color-gray)">SALFORD</div>
                  <div className="bg-white p-4 rounded-lg text-xs font-bold text-(--color-gray)">BAYES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePath;
