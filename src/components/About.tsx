
import React, { useEffect, useRef, useState } from 'react';
import { Target, Users, Award, TrendingUp, BookOpen, Lightbulb } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: Target,
      title: 'Career Guidance',
      description: 'Personalized career counseling and strategic planning for your professional journey.',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Connect with industry experts and experienced professionals for guidance.',
      color: 'text-green-500'
    },
    {
      icon: Award,
      title: 'Internships',
      description: 'Access to exclusive internship opportunities across various industries.',
      color: 'text-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Skill Development',
      description: 'Comprehensive training programs to enhance your professional skills.',
      color: 'text-orange-500'
    },
    {
      icon: BookOpen,
      title: 'Resources',
      description: 'Extensive library of career resources, guides, and industry insights.',
      color: 'text-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge tools and technologies to accelerate your career growth.',
      color: 'text-yellow-500'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-light-bg dark:bg-dark-bg">
      <div className="container-custom">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light-text dark:text-dark-text mb-4 sm:mb-6 font-poppins">
            About <span className="text-light-accent dark:text-dark-accent">Beyond Career</span>
          </h2>
          <p className="text-lg sm:text-xl text-light-subtext dark:text-dark-subtext max-w-4xl mx-auto leading-relaxed mb-8">
            Founded by IIT Kharagpur alumni, Beyond Career is dedicated to empowering students and professionals 
            with comprehensive career guidance, mentorship opportunities, and skill development programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-light-bg dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-light-accent/5 dark:hover:shadow-dark-accent/5 transform hover:scale-105 transition-all duration-300 group ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <feature.icon className={`w-8 h-8 ${feature.color} mr-3 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-poppins">
                  {feature.title}
                </h3>
              </div>
              <p className="text-light-subtext dark:text-dark-subtext leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-12 sm:mt-16 text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-light-accent/10 to-light-accent/5 dark:from-dark-accent/10 dark:to-dark-accent/5 rounded-2xl p-8 sm:p-12 border border-light-accent/20 dark:border-dark-accent/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-light-text dark:text-dark-text mb-4 font-poppins">
              Ready to Transform Your Career?
            </h3>
            <p className="text-lg text-light-subtext dark:text-dark-subtext mb-6 max-w-2xl mx-auto">
              Join thousands of students and professionals who have accelerated their careers with Beyond Career.
            </p>
            <button className="bg-light-accent dark:bg-dark-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-light-accent/90 dark:hover:bg-dark-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
