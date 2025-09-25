import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "6381228682",
      href: "tel:6381228682",
      color: "green"
    },
    {
      icon: Mail,
      label: "Email",
      value: "kavinkishore.j@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=kavinkishore.j@gmail.com",
      color: "red"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://tinyurl.com/linkedinkavinkishore",
      color: "blue"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Coimbatore, Tamil Nadu",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-100 text-green-600 hover:bg-green-200",
      red: "bg-red-100 text-red-600 hover:bg-red-200",
      blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
      purple: "bg-purple-100 text-purple-600 hover:bg-purple-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on projects? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              const content = (
                <div className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-lg ${getColorClasses(item.color)} bg-white border border-gray-100 hover:scale-105`}>
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-4 rounded-full mb-4 ${getColorClasses(item.color)} animate-pulse-slow`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.label}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`transform hover:-translate-y-2 transition-transform duration-300 animate-slide-in-up animation-delay-${(index + 1) * 100}`}
                >
                  {content}
                </a>
              ) : (
                <div key={index} className={`transform hover:-translate-y-2 transition-transform duration-300 animate-slide-in-up animation-delay-${(index + 1) * 100}`}>
                  {content}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Work Together!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm actively seeking opportunities to work in challenging tech environments where I can grow and contribute 
                as a developer. Whether it's a full-time position, internship, or project collaboration, I'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kavinkishore.j@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105"
>                  Send Message
                </a>
                <a
                  href="https://tinyurl.com/linkedinkavinkishore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;