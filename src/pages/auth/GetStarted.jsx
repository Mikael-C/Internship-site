import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, ArrowLeft } from 'lucide-react';

const GetStarted = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      navigate('/auth/sign-up');
    }
  };

  const handleGoogleSignup = () => {
    // Handle Google OAuth
    console.log('Google signup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-2 gap-12 min-h-[calc(100vh-4rem)]">
          {/* Left Side - Form */}
          <div className="flex flex-col justify-center max-w-md">
            <h1 className="text-4xl font-bold mb-4">
              Get experience that employers actually notice
            </h1>

            <form onSubmit={handleEmailSubmit} className="mt-8">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm text-(--color-gray-dark) mb-2">
                  Email address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-(--color-gray)" size={20} />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gray-200 text-(--color-gray-dark) rounded-lg font-semibold hover:bg-gray-300 transition-colors mb-6"
              >
                Continue with email
              </button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gradient-to-br from-blue-50 to-white text-(--color-gray)">Or</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignup}
                className="w-full py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>

              <p className="text-xs text-(--color-gray) text-center mt-6">
                By continuing you are agreeing to Virtual Internship's{' '}
                <a href="#" className="underline">Terms of Use</a> &{' '}
                <a href="#" className="underline">Privacy Policy</a> and confirming that you're above 18 years of age.
              </p>
            </form>

            <button
              onClick={() => navigate('/auth/choose-path')}
              className="inline-flex items-center gap-2 text-(--color-gray-dark) hover:text-(--color-primary) mt-8"
            >
              <ArrowLeft size={20} />
              Back
            </button>
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

export default GetStarted;
