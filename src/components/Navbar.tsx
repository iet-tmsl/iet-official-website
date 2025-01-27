import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/activities', label: 'Activities' },
    { path: '/events', label: 'Events' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/faculty', label: 'Faculty' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  // ...existing code...
return (
  <motion.nav
    initial="hidden"
    animate="visible"
    variants={navVariants}
    className={`fixed w-full z-50 transition-all duration-300 
      ${scrolled ? 'bg-primary-600/95 backdrop-blur-sm shadow-lg' : 'bg-primary-600'} navbar`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Left Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="assets/iet navbar logo.png" alt="IET TMSL" className="h-14 w-auto" />
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link relative px-2 py-2 text-sm sm:text-base font-medium text-[#00008B] hover:text-[#00008B] transition-colors
                ${location.pathname === item.path ? 'text-[#00008B] after:w-full' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Logo */}
        <div className="hidden md:flex items-center space-x-2">
          <img src="assets/techno logo.png" alt="Techno Logo" className="h-14 w-auto" />
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-white hover:bg-primary-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="md:hidden bg-primary-600"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium text-[#00008B] hover:text-[#00008B] hover:bg-primary-700 transition-colors
                  ${location.pathname === item.path ? 'bg-primary-700 text-[#00008B]' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.nav>
);
};

export default Navbar;