import { Link } from 'react-router';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-(--color-dark) text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-(--color-primary) to-(--color-secondary) rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GP</span>
              </div>
              <span className="text-2xl font-bold">GlobalPaths</span>
            </Link>
            <p className="text-(--color-gray-light) mb-6">
              Connecting talent with opportunities worldwide through innovative remote internship programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* For Companies */}
          <div>
            <h3 className="font-bold text-lg mb-4">For Companies</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/companies" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                  Host Interns
                </Link>
              </li>
              <li>
                <Link to="/companies#how-it-works" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/companies#success-stories" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="font-bold text-lg mb-4">For Students</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/students" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                  Find Internships
                </Link>
              </li>
              <li>
                <Link to="/students#benefits" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link to="/students#testimonials" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                  Student Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-(--color-gray-light) hover:text-(--color-accent) transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-(--color-gray-light) text-sm">
            <p>© 2026 GlobalPaths. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-(--color-accent) transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-(--color-accent) transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-(--color-accent) transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
