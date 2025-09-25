import React from 'react';
import { ExternalLink, Github, Cpu, Globe, Coffee, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Student Grade Management System",
      category: "Java Console Application",
      description: "Developed a comprehensive Java console application to efficiently manage student records and grades. Features include adding new students, viewing all records, searching by student ID, updating grades, and removing student details using ArrayLists for dynamic data management.",
      technologies: ["Java", "ArrayLists", "Console Interface", "Data Management"],
      features: [
        "Add new student records with details",
        "View all student information",
        "Search students by ID or name",
        "Update and manage grades",
        "Remove student records",
        "Menu-driven interface for easy navigation"
      ],
      icon: Cpu,
      color: "blue",
      highlight: true
    },
    {
      title: "Wildlife Monitoring Using Drone",
      category: "IoT & Machine Learning",
      description: "Developed an F450 drone with YOLOv3 object detection to monitor forest areas and detect animals or humans in real time. Integrated ESP32 streaming and web server for live video, instant alerts, and event logging with GPS coordinates.",
      technologies: ["YOLOv3", "ESP32", "TensorFlow Lite", "OpenCV", "GPS"],
      features: [
        "Real-time object detection",
        "Live video streaming",
        "GPS coordinate logging",
        "Instant alert system",
        "Optimized on-device recognition"
      ],
      icon: Cpu,
      color: "green",
      github: "https://github.com/Kavinkishore6236/wildlife-monitoring-drone"
    },
    {
      title: "Restaurant Website",
      category: "Frontend Development",
      description: "Developed a fully functional restaurant website with modern UI/UX design. Features include menu browsing, add to cart functionality, and buy now features built with responsive design principles.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Interactive menu browsing",
        "Add to cart functionality",
        "Buy now features",
        "Responsive design",
        "Modern UI/UX"
      ],
      icon: Globe,
      color: "purple",
      github: "https://kavinkishore6236.github.io/kavin-project3/",
      demo: "https://kavinkishore6236.github.io/kavin-project3/"
    },
    {
      title: "Task/Event Handler",
      category: "Java Application",
      description: "Created a Java console application for personal task and event management. Built with ArrayLists for data storage and features a menu-driven interface for smooth user interaction and efficient task organization.",
      technologies: ["Java", "ArrayLists", "Console Interface"],
      features: [
        "Add personal events and tasks",
        "View all scheduled events",
        "Remove completed tasks",
        "Menu-driven interface",
        "Efficient data management"
      ],
      icon: Calendar,
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing a range of projects from Java applications to IoT solutions and web development
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:scale-105 animate-slide-in-up animation-delay-${(index + 1) * 200} ${
                  project.highlight ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`p-6 ${project.highlight ? 'lg:p-8' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`bg-gradient-to-r ${getColorClasses(project.color)} p-3 rounded-lg animate-pulse-slow`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        <span className="text-sm text-gray-500">{project.category}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-110"
                          title="View Source Code"
                        >
                          <Github className="w-5 h-5 text-gray-700" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-110"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5 text-gray-700" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className={`grid gap-2 ${project.highlight ? 'md:grid-cols-2' : ''}`}>
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;