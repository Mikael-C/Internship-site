import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom section-padding !py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-(--color-primary) to-(--color-secondary) rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GP</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent">
              GlobalPaths
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-(--color-gray-dark) hover:text-(--color-primary) transition-colors">
                <span>Companies</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/companies" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  Host an Intern
                </Link>
                <Link to="/companies#how-it-works" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  How It Works
                </Link>
                <Link to="/companies#faqs" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  FAQs
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-(--color-gray-dark) hover:text-(--color-primary) transition-colors">
                <span>Educators</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/educators" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  Universities
                </Link>
                <Link to="/educators#bootcamps" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  Bootcamps
                </Link>
                <Link to="/educators#governments" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  Governments
                </Link>
                <Link to="/educators#affiliates" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  Affiliates
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-(--color-gray-dark) hover:text-(--color-primary) transition-colors">
                <span>Interns</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/students" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  Apply for Internships
                </Link>
                <Link to="/students#how-it-works" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  How It Works
                </Link>
                <Link to="/students#career-fields" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  Career Fields
                </Link>
                <Link to="/students#experiences" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  Experiences
                </Link>
                <Link to="/students#faqs" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  FAQs
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-(--color-gray-dark) hover:text-(--color-primary) transition-colors">
                <span>Resources</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/blog" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  Blog
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-(--color-gray-dark) hover:text-(--color-primary) transition-colors">
                <span>About Us</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/about#mission" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  Our Mission
                </Link>
                <Link to="/about#team" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  Our Team
                </Link>
                <Link to="/about#careers" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  Join Us
                </Link>
                <Link to="/about#press" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  Press
                </Link>
                <Link to="/contact" className="block px-4 py-3 hover:bg-(--color-light) transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>

            <Link to="/auth/welcome" className="btn-primary">
              Login/Signup
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-(--color-dark)"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <div>
              <button
                onClick={() => toggleDropdown('companies')}
                className="flex items-center justify-between w-full py-2 text-(--color-gray-dark)"
              >
                <span>Companies</span>
                <ChevronDown size={16} className={`transform transition-transform ${openDropdown === 'companies' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'companies' && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link to="/companies" className="block py-2 text-(--color-gray)">
                    Host an Intern
                  </Link>
                  <Link to="/companies#how-it-works" className="block py-2 text-(--color-gray)">
                    How It Works
                  </Link>
                  <Link to="/companies#faqs" className="block py-2 text-(--color-gray)">
                    FAQs
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown('educators')}
                className="flex items-center justify-between w-full py-2 text-(--color-gray-dark)"
              >
                <span>Educators</span>
                <ChevronDown size={16} className={`transform transition-transform ${openDropdown === 'educators' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'educators' && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link to="/educators" className="block py-2 text-(--color-gray)">
                    Universities
                  </Link>
                  <Link to="/educators#bootcamps" className="block py-2 text-(--color-gray)">
                    Bootcamps
                  </Link>
                  <Link to="/educators#governments" className="block py-2 text-(--color-gray)">
                    Governments
                  </Link>
                  <Link to="/educators#affiliates" className="block py-2 text-(--color-gray)">
                    Affiliates
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown('interns')}
                className="flex items-center justify-between w-full py-2 text-(--color-gray-dark)"
              >
                <span>Interns</span>
                <ChevronDown size={16} className={`transform transition-transform ${openDropdown === 'interns' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'interns' && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link to="/students" className="block py-2 text-(--color-gray)">
                    Apply for Internships
                  </Link>
                  <Link to="/students#how-it-works" className="block py-2 text-(--color-gray)">
                    How It Works
                  </Link>
                  <Link to="/students#career-fields" className="block py-2 text-(--color-gray)">
                    Career Fields
                  </Link>
                  <Link to="/students#experiences" className="block py-2 text-(--color-gray)">
                    Experiences
                  </Link>
                  <Link to="/students#faqs" className="block py-2 text-(--color-gray)">
                    FAQs
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center justify-between w-full py-2 text-(--color-gray-dark)"
              >
                <span>Resources</span>
                <ChevronDown size={16} className={`transform transition-transform ${openDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'resources' && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link to="/blog" className="block py-2 text-(--color-gray)">
                    Blog
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown('about')}
                className="flex items-center justify-between w-full py-2 text-(--color-gray-dark)"
              >
                <span>About Us</span>
                <ChevronDown size={16} className={`transform transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'about' && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link to="/about#mission" className="block py-2 text-(--color-gray)">
                    Our Mission
                  </Link>
                  <Link to="/about#team" className="block py-2 text-(--color-gray)">
                    Our Team
                  </Link>
                  <Link to="/about#careers" className="block py-2 text-(--color-gray)">
                    Join Us
                  </Link>
                  <Link to="/about#press" className="block py-2 text-(--color-gray)">
                    Press
                  </Link>
                  <Link to="/contact" className="block py-2 text-(--color-gray)">
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            <Link to="/auth/welcome" className="btn-primary w-full text-center">
              Login/Signup
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
