import React from 'react';
import { Target, Heart, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Objective</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Motivated and self-driven Full Stack Developer with a background in Electronics and Communication Engineering. 
                Passionate about solving real-world problems through efficient software solutions. Looking for an opportunity 
                to work in a challenging tech environment to grow and contribute as a developer.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in-up animation-delay-200">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Passion</h4>
              </div>
              <p className="text-gray-600">
                Deeply passionate about creating innovative software solutions that make a real-world impact.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in-up animation-delay-400">
              <div className="flex items-center mb-4">
                <Code2 className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Expertise</h4>
              </div>
              <p className="text-gray-600">
                Full-stack development with expertise in Java backend development, modern web technologies, and database management.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in-up animation-delay-600">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full mr-3"></div>
                <h4 className="text-lg font-semibold text-gray-900">Growth Mindset</h4>
              </div>
              <p className="text-gray-600">
                Continuously learning and adapting to new technologies while maintaining a strong foundation in software engineering principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;