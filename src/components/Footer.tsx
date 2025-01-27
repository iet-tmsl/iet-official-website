import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#E2EFF8] text-blue-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">IET TMSL</h3>
            <p className="text-blue-900">
              Working to engineer a better world through technology and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-700 transition-colors">About</a></li>
              <li><a href="/events" className="hover:text-blue-700 transition-colors">Events</a></li>
              <li><a href="/team" className="hover:text-blue-700 transition-colors">Team</a></li>
              <li><a href="/contact" className="hover:text-blue-700 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/17MNa2cwpA/" className="hover:text-blue-700 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/iet_tmsl/profilecard/?igsh=M2thNnAzNDIyZ3Rm" className="hover:text-blue-700 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/iet-tmsl-bb71b5332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="hover:text-blue-700 transition-colors">
                <Linkedin size={24} />
              </a>
              {/* <a href="mailto:iet.tmsl.2013@gmail.com" className="hover:text-blue-700 transition-colors">
                <Mail size={24} />
              </a> */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-violet-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} IET TMSL Student Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;