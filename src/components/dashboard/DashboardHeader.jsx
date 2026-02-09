import { Search, Bell, Menu } from 'lucide-react';

const DashboardHeader = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 lg:px-8 py-4">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search internships, companies..."
              className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={24} className="text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition-colors">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
              UC
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-semibold text-gray-900">Ugochukwu</div>
              <div className="text-xs text-gray-500">Student</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
