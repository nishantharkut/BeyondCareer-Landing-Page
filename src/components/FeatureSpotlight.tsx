
import React, { useEffect, useRef, useState } from 'react';
import { Search, Smartphone, BarChart3, ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const FeatureSpotlight = () => {
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
      icon: Search,
      title: 'Career Guidance',
      description: 'Personalized career guidance tailored to your strengths and aspirations.',
      details: 'Get expert advice on choosing the right path, cracking interviews, and achieving your professional goals.',
      color: 'bg-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Internship Opportunities',
      description: 'Access to premium internships at top companies and startups.',
      details: 'Work on real-world projects, build your resume, and gain hands-on experience that sets you apart.',
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: 'Mentorship Programs',
      description: 'One-on-one mentorship from industry leaders and IIT alumni.',
      details: 'Receive guidance on technical skills, soft skills, and career planning from seasoned professionals.',
      color: 'bg-purple-500'
    },
    {
    icon: Globe,
    title: 'Community Engagement',
    description: 'Be part of a vibrant community of learners, mentors, and peers.',
    details: 'Collaborate on projects, participate in events, and grow your network in a supportive ecosystem.',
    color: 'bg-pink-500'
  }
  ];

  return (
    <section id="features" ref={sectionRef} className="section-padding bg-light-bg dark:bg-dark-bg">
      <div className="container-custom">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light-text dark:text-dark-text mb-4 sm:mb-6 font-poppins">
            Feature <span className="text-light-accent dark:text-dark-accent">Spotlight</span>
          </h2>
          <p className="text-lg sm:text-xl text-light-subtext dark:text-dark-subtext max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology powering your career transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-light-bg dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:shadow-light-accent/10 dark:hover:shadow-dark-accent/10 transform hover:scale-105 transition-all duration-300 group ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-light-text dark:text-dark-text mb-3 sm:mb-4 font-poppins">
                {feature.title}
              </h3>
              
              <p className="text-sm sm:text-base text-light-subtext dark:text-dark-subtext mb-4 sm:mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl mb-4 sm:mb-6 border border-gray-100 dark:border-gray-600">
                <p className="text-xs sm:text-sm text-light-text dark:text-dark-text font-medium leading-relaxed">
                  {feature.details}
                </p>
              </div>
              
              <button className="inline-flex items-center text-light-accent dark:text-dark-accent font-semibold text-sm sm:text-base hover:underline transition-all duration-300 group-hover:translate-x-1">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSpotlight;
