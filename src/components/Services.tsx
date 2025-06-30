
import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Users, TrendingUp, Award, Lightbulb, ArrowRight } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Briefcase,
      title: 'Career Counseling',
      description: 'Personalized career guidance and strategic planning sessions.',
      features: ['One-on-one sessions', 'Career assessment', 'Goal setting', 'Action planning'],
      price: 'Starting at ₹999',
      popular: false
    },
    {
      icon: GraduationCap,
      title: 'Skill Development',
      description: 'Comprehensive training programs to enhance your professional skills.',
      features: ['Technical skills', 'Soft skills', 'Industry certifications', 'Portfolio building'],
      price: 'Starting at ₹1,999',
      popular: true
    },
    {
      icon: Users,
      title: 'Mentorship Program',
      description: 'Connect with industry experts for ongoing guidance and support.',
      features: ['Industry experts', 'Regular check-ins', 'Network building', 'Interview prep'],
      price: 'Starting at ₹2,999',
      popular: false
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light-text dark:text-dark-text mb-4 sm:mb-6 font-poppins">
            Our <span className="text-light-accent dark:text-dark-accent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-light-subtext dark:text-dark-subtext max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of career development services designed to accelerate your professional growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-light-bg dark:bg-dark-bg border-2 ${
                service.popular 
                  ? 'border-light-accent dark:border-dark-accent shadow-lg shadow-light-accent/20 dark:shadow-dark-accent/20' 
                  : 'border-gray-200 dark:border-gray-700'
              } rounded-2xl p-6 sm:p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300 group ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-light-accent dark:bg-dark-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 ${
                  service.popular 
                    ? 'bg-light-accent dark:bg-dark-accent' 
                    : 'bg-gray-100 dark:bg-gray-800'
                } rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${
                    service.popular 
                      ? 'text-white' 
                      : 'text-light-accent dark:text-dark-accent'
                  }`} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-light-text dark:text-dark-text mb-2 font-poppins">
                  {service.title}
                </h3>
                <p className="text-light-subtext dark:text-dark-subtext leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-light-accent dark:text-dark-accent mb-6">
                  {service.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-light-text dark:text-dark-text">
                    <div className="w-2 h-2 bg-light-accent dark:bg-dark-accent rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center group-hover:scale-105 ${
                service.popular
                  ? 'bg-light-accent dark:bg-dark-accent text-white hover:bg-light-accent/90 dark:hover:bg-dark-accent/90'
                  : 'bg-gray-100 dark:bg-gray-800 text-light-text dark:text-dark-text hover:bg-light-accent hover:text-white dark:hover:bg-dark-accent'
              }`}>
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className={`mt-12 sm:mt-16 text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-light-accent/10 to-light-accent/5 dark:from-dark-accent/10 dark:to-dark-accent/5 rounded-2xl p-8 border border-light-accent/20 dark:border-dark-accent/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-light-text dark:text-dark-text mb-4 font-poppins">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-light-subtext dark:text-dark-subtext mb-6 max-w-2xl mx-auto">
              Contact us for personalized career development packages tailored to your specific needs and goals.
            </p>
            <button className="bg-light-accent dark:bg-dark-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-light-accent/90 dark:hover:bg-dark-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
