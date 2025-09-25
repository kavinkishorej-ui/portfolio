import React from 'react';
import { Code, Database, Wrench, Users, Lightbulb, MessageSquare } from 'lucide-react';

const Skills = () => {
  const technicalSkills = {
    "Frontend": {
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      color: "blue"
    },
    "Backend": {
      icon: Code,
      skills: ["Java"],
      color: "green"
    },
    "Database": {
      icon: Database,
      skills: ["MySQL"],
      color: "purple"
    },
    "Tools/Platforms": {
      icon: Wrench,
      skills: ["GitHub", "VS Code", "Eclipse"],
      color: "orange"
    }
  };

  const softSkills = [
    { name: "Quick learner & Problem solver", icon: Lightbulb },
    { name: "Self-motivated and reliable", icon: Users },
    { name: "Good communication & Teamwork", icon: MessageSquare },
    { name: "Adaptable to new technologies", icon: Code }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(technicalSkills).map(([category, data]) => {
                const IconComponent = data.icon;
                return (
                  <div key={category} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 animate-fade-in-up">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg mr-3 ${getColorClasses(data.color).replace('text-', 'bg-').replace('border-', '').replace('bg-', 'bg-')} bg-opacity-20 animate-pulse-slow`}>
                        <IconComponent className="w-5 h-5 text-gray-700" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(data.color)} hover:scale-110 transition-transform duration-200`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Soft Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-white rounded-full p-3 shadow-sm animate-pulse-slow">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-lg font-medium text-gray-800">{skill.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;