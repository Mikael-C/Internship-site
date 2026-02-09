import { useState } from 'react';
import { useNavigate } from 'react-router';
import { User, Calendar, Globe, LogOut } from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    country: '',
    timezone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Navigate to personalization step
    navigate('/auth/personalization');
  };

  const handleLogout = () => {
    navigate('/auth/welcome');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>

      {/* Logout button */}
      <div className="absolute top-6 right-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-(--color-gray-dark) hover:text-(--color-primary) transition-colors"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>

      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 md:p-12 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Let's get you started</h1>
            <p className="text-(--color-gray-dark)">
              You're creating a new account using <span className="font-semibold">michaelchuks2018@gmail.com</span>.
            </p>
            <p className="text-(--color-gray-dark)">Please share some details about yourself.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm text-(--color-gray-dark) mb-2">
                  First name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-(--color-gray)" size={20} />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm text-(--color-gray-dark) mb-2">
                  Last name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-(--color-gray)" size={20} />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm text-(--color-gray-dark) mb-2">
                Date of birth *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-(--color-gray)" size={20} />
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Current Country */}
            <div>
              <label htmlFor="country" className="block text-sm text-(--color-gray-dark) mb-2">
                Current country *
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-(--color-gray)" size={20} />
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent appearance-none bg-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="NG">Nigeria</option>
                  <option value="IN">India</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Current Time Zone */}
            <div>
              <label htmlFor="timezone" className="block text-sm text-(--color-gray-dark) mb-2">
                Current time zone *
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-(--color-gray)" size={20} />
                <select
                  id="timezone"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent appearance-none bg-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="PST">Pacific Standard Time (PST)</option>
                  <option value="MST">Mountain Standard Time (MST)</option>
                  <option value="CST">Central Standard Time (CST)</option>
                  <option value="EST">Eastern Standard Time (EST)</option>
                  <option value="GMT">Greenwich Mean Time (GMT)</option>
                  <option value="CET">Central European Time (CET)</option>
                  <option value="IST">Indian Standard Time (IST)</option>
                  <option value="JST">Japan Standard Time (JST)</option>
                  <option value="AEST">Australian Eastern Standard Time (AEST)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary !bg-(--color-primary) hover:!bg-(--color-primary-dark)"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
