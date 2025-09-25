import React, { useState } from 'react';
import { Menu, X, User, BookOpen, Briefcase, Mail } from 'lucide-react'; 
// removed Code & Github imports

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: User },
    { href: '#about', label: 'About', icon: User },
    { href: '#education', label: 'Education', icon: BookOpen },
    { href: '#skills', label: 'Skills', icon: Briefcase },
    { href: '#projects', label: 'Projects', icon: Briefcase },
    { href: '#contact', label: 'Contact', icon: Mail }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* --- Left side: only the name now --- */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              Kavin Kishore R
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
