import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Kavin Kishore R</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-300">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using React & TypeScript</span>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © 2025 Kavin Kishore R. All rights reserved. | Fullstack Developer passionate about creating efficient software solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;