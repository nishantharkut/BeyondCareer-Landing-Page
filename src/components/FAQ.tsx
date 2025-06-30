
import React, { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);
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

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'What makes Beyond Career different from other career guidance platforms?',
      answer: 'Founded by IIT Kharagpur alumni, we combine academic excellence with industry experience. Our personalized approach includes one-on-one mentorship, exclusive internship opportunities, and a supportive community of like-minded individuals.'
    },
    {
      question: 'How does the mentorship program work?',
      answer: 'Our mentorship program pairs you with industry experts based on your career goals and interests. You\'ll have regular sessions, goal-setting exercises, and continuous support throughout your professional journey.'
    },
    {
      question: 'What types of internships are available?',
      answer: 'We offer internships across various industries including technology, finance, consulting, healthcare, and more. Our partnerships with leading companies ensure you get hands-on experience in your field of interest.'
    },
    {
      question: 'Is there ongoing support after program completion?',
      answer: 'Yes! We provide lifetime access to our community network, continued mentorship opportunities, and career transition support whenever you need it.'
    },
    {
      question: 'How do I get started with Beyond Career?',
      answer: 'Simply reach out through our contact form or join our community. We\'ll schedule an initial consultation to understand your goals and recommend the best program for your needs.'
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="section-padding bg-light-bg dark:bg-dark-bg">
      <div className="container-custom max-w-4xl">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-light-text dark:text-dark-text mb-6 font-poppins">
            Frequently Asked <span className="text-light-accent dark:text-dark-accent">Questions</span>
          </h2>
          <p className="text-xl text-light-subtext dark:text-dark-subtext max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our services and approach
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text pr-8 font-poppins">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <Minus className="w-5 h-5 text-light-accent dark:text-dark-accent" />
                  ) : (
                    <Plus className="w-5 h-5 text-light-accent dark:text-dark-accent" />
                  )}
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openItems.includes(index) 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-8 pb-6">
                  <p className="text-light-subtext dark:text-dark-subtext leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
