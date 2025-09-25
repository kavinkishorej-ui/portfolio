import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50
                 flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden
                 pt-20 pb-20 sm:pt-24 sm:pb-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in-up">
          <div className="w-40 h-40 rounded-full mx-auto mb-6 shadow-2xl animate-float overflow-hidden">
            <img
              src="/img/Profile.jpg"   // Place Profile.jpg inside public/ folder
              alt="Kavin Kishore"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
          Kavin Kishore R
        </h1>

        {/* Title */}
        <div className="text-xl md:text-2xl text-blue-600 font-semibold mb-6 animate-fade-in-up animation-delay-400">
          Fullstack Developer
        </div>

        {/* Intro */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up animation-delay-600">
          Motivated and self-driven Full Stack Developer with a background in
          Electronics and Communication Engineering. Passionate about solving
          real-world problems through efficient software solutions.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-800">
          <a
            href="tel:6381228682"
            className="flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>6381228682</span>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kavinkishore.j@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span>kavinkishore.j@gmail.com</span>
          </a>

          <a
            href="https://tinyurl.com/linkedinkavinkishore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-blue-700"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Down Arrow */}
        <div className="animate-bounce animation-delay-1000">
          <ArrowDown className="w-6 h-6 text-blue-600 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
