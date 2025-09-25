import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.E – Electronics and Communication Engineering",
      institution: "Easa College of Engineering and Technology, Coimbatore",
      cgpa: "7.8",
      year: "2025",
      status: "Current",
      description: "Comprehensive study in Electronics and Communication with strong foundation in programming and system design."
    },
    {
      degree: "HSC – Higher Secondary Certificate",
      institution: "State Board – Tamil Nadu",
      year: "Completed-2021",
      description: "Higher secondary education with focus on Science and Mathematics."
    },
    {
      degree: "SSLC – Secondary School Leaving Certificate",
      institution: "State Board – Tamil Nadu",
      year: "Completed-2019",
      description: "Secondary education with excellent academic performance."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className={`bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:scale-105 animate-slide-in-up animation-delay-${(index + 1) * 200}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0 animate-pulse-slow">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{edu.institution}</span>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{edu.year}</span>
                        </div>
                        
                        {edu.cgpa && (
                          <div className="flex items-center space-x-1">
                            <Award className="w-4 h-4" />
                            <span className="text-sm font-semibold">CGPA: {edu.cgpa}/10</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                      
                      {edu.status && (
                        <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                          {edu.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;