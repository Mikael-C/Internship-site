import { LayoutDashboard, FileText, Bookmark, Calendar, MessageSquare, Settings, LogOut } from 'lucide-react';
import { NavLink } from 'react-router';

const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'My Applications', path: '/dashboard/applications' },
    { icon: Bookmark, label: 'Saved', path: '/dashboard/saved' },
    { icon: Calendar, label: 'Calendar', path: '/dashboard/calendar' },
    { icon: MessageSquare, label: 'Messages', path: '/dashboard/messages' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-full"></div>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-teal-600">VIRTUAL</div>
              <div className="text-gray-600 -mt-1">INTERNSHIPS</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? 'bg-teal-50 text-teal-600 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  <item.icon size={20} strokeWidth={2} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-lg transition-all">
            <LogOut size={20} strokeWidth={2} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
