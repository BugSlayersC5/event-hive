import { Calendar, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer () {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl font-bold">
              Event <span className="text-purple-400">Hive</span>
            </span>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="bg-[#7848F4] from-purple-600 to-blue-600 text-white px-6 py-3 rounded-r-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-8 mb-8 text-sm">
          <a href="#" className="hover:text-purple-400 transition-colors duration-200">Home</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-200">About</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-200">Services</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-200">Get in touch</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-200">FAQs</a>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-white/60 hover:text-purple-400 transition-colors duration-200">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-white/60 hover:text-purple-400 transition-colors duration-200">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-white/60 hover:text-purple-400 transition-colors duration-200">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-white/60 hover:text-purple-400 transition-colors duration-200">
            <Mail className="h-6 w-6" />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-white/60 border-t border-white/10 pt-8">
          <p>Non Copyright 2023 Upwork by EventHive</p>
        </div>
      </div>
    </footer>
  );
};

