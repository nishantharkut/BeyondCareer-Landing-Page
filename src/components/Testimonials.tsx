
import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      company: "IIT Delhi Graduate",
      content: "Beyond Career transformed my career trajectory. The personalized guidance helped me land my dream job at Google. The mentorship program was invaluable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b9a4b0d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Rahul Gupta",
      role: "Product Manager at Microsoft",
      company: "NIT Trichy Graduate",
      content: "The internship opportunities provided by Beyond Career gave me the practical experience I needed. Now I'm successfully managing products at Microsoft.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Anisha Patel",
      role: "Data Scientist at Amazon",
      company: "BITS Pilani Graduate",
      content: "The community aspect of Beyond Career is amazing. I found my mentor here who guided me through my transition from engineering to data science.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const stats = [
    { number: "2000+", label: "Students Guided" },
    { number: "500+", label: "Successful Placements" },
    { number: "150+", label: "Partner Companies" },
    { number: "95%", label: "Success Rate" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
  <section
    id="testimonials"
    ref={sectionRef}
    className="py-20 bg-light-bg dark:bg-dark-bg"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div
        className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-light-text dark:text-dark-text">
          Success{' '}
          <span className="text-light-accent dark:text-dark-accent">
            Stories
          </span>
        </h2>
        <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed text-light-subtext dark:text-dark-subtext">
          Real stories from students who transformed their careers with Beyond Career
        </p>
      </div>

      {/* Stats Bar */}
      <div
        className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 transform delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {stats.map((stat, index) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl sm:text-4xl max-w-3xl font-playfair font-bold mb-2 text-light-accent dark:text-dark-accent">
              {stat.number}
            </div>
            <div className="text-sm font-medium sm:text-base text-light-subtext dark:text-dark-subtext">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Carousel */}
      <div
        className={`relative transition-all duration-1000 transform delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            aria-live="polite"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Card className="max-w-sm sm:max-w-3xl mx-auto border border-light-border dark:border-dark-border rounded-2xl shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300 bg-light-bg dark:bg-dark-bg">
                  <CardContent className="p-8 sm:p-8 lg:p-10">
                    <div className="flex flex-col items-center text-center">
                      <Quote className="w-10 h-10 mb-4 text-light-accent/[.85] dark:text-dark-accent/[.85]" />
                      <p className="text-base sm:text-xl leading-snug font-medium mb-6 text-light-text dark:text-dark-text">
                        “{testimonial.content}”
                      </p>
                      <div className="flex items-center space-x-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-current text-yellow-400 dark:text-yellow-500"
                          />
                        ))}
                      </div>
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="text-left">
                          <h4 className="font-bold text-base sm:text-lg text-light-text dark:text-dark-text">
                            {testimonial.name}
                          </h4>
                          <p className="font-medium text-sm text-light-accent dark:text-dark-accent">
                            {testimonial.role}
                          </p>
                          <p className="text-xs sm:text-sm text-light-subtext dark:text-dark-subtext">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 h-3 bg-light-accent dark:bg-dark-accent'
                  : 'w-3 h-3 bg-light-subtext dark:bg-dark-subtext'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

};

export default Testimonials;


// import React, { useEffect, useRef, useState } from 'react';
// import { Star, Quote } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { useTheme } from 'next-themes';

// const Testimonials = () => {
//   const { theme } = useTheme();
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.2 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const testimonials = [
//     {
//       name: "Priya Sharma",
//       role: "Software Engineer at Google",
//       company: "IIT Delhi Graduate",
//       content: "Beyond Career transformed my career trajectory. The personalized guidance helped me land my dream job at Google. The mentorship program was invaluable.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1494790108755-2616b9a4b0d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
//     },
//     {
//       name: "Rahul Gupta",
//       role: "Product Manager at Microsoft",
//       company: "NIT Trichy Graduate",
//       content: "The internship opportunities provided by Beyond Career gave me the practical experience I needed. Now I'm successfully managing products at Microsoft.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
//     },
//     {
//       name: "Anisha Patel",
//       role: "Data Scientist at Amazon",
//       company: "BITS Pilani Graduate",
//       content: "The community aspect of Beyond Career is amazing. I found my mentor here who guided me through my transition from engineering to data science.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
//     }
//   ];

//   const stats = [
//     { number: "2000+", label: "Students Guided" },
//     { number: "500+", label: "Successful Placements" },
//     { number: "150+", label: "Partner Companies" },
//     { number: "95%", label: "Success Rate" }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [testimonials.length]);

//   return (
//     <section
//       id="testimonials"
//       ref={sectionRef}
//       className={
//         `py-20 bg-gradient-to-br 
//          light:from-blue-50 light:to-purple-50 
//          dark:from-gray-800 dark:to-gray-900
//          transition-colors duration-500`
//       }
//     >
//       <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div
//           className={`text-center mb-16 transform transition-all duration-700 
//             ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-playfair
//             light:text-gray-900 dark:text-gray-100"
//           >
//             Success <span className="text-gradient">Stories</span>
//           </h2>
//           <p className="text-xl max-w-3xl mx-auto leading-relaxed
//             light:text-gray-600 dark:text-gray-300"
//           >
//             Real stories from students who transformed their careers with Beyond Career
//           </p>
//         </div>

//         {/* Stats Bar */}
//         <div
//           className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transform transition-all duration-700 
//             ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//           style={{ transitionDelay: '200ms' }}
//         >
//           {stats.map((stat) => (
//             <div key={stat.label} className="text-center">
//               <div className="text-4xl font-bold mb-2 font-playfair text-gradient">
//                 {stat.number}
//               </div>
//               <div className="font-medium light:text-gray-600 dark:text-gray-400">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Testimonials Carousel */}
//         <div
//           className={`relative transform transition-all duration-700 
//             ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//           style={{ transitionDelay: '400ms' }}
//         >
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {testimonials.map((t, i) => (
//                 <div key={i} className="w-full flex-shrink-0">
//                   <Card className="max-w-4xl mx-auto border-0 shadow-2xl 
//                     light:bg-white dark:bg-gray-800"
//                   >
//                     <CardContent className="p-8 sm:p-12">
//                       <div className="flex flex-col items-center text-center">
//                         <Quote className="w-12 h-12
//                           light:text-blue-500 dark:text-blue-300 mb-6"
//                         />
//                         <p className="text-xl sm:text-2xl leading-relaxed mb-8 font-medium
//                           light:text-gray-700 dark:text-gray-300"
//                         >
//                           "{t.content}"
//                         </p>
//                         <div className="flex items-center space-x-1 mb-6">
//                           {[...Array(t.rating)].map((_, starIdx) => (
//                             <Star
//                               key={starIdx}
//                               className="w-5 h-5 fill-current light:text-yellow-400 dark:text-yellow-500"
//                             />
//                           ))}
//                         </div>
//                         <div className="flex items-center space-x-4">
//                           <img
//                             src={t.image}
//                             alt={t.name}
//                             className="w-16 h-16 rounded-full object-cover"
//                           />
//                           <div className="text-left">
//                             <h4 className="font-bold text-lg
//                               light:text-gray-900 dark:text-gray-100"
//                             >
//                               {t.name}
//                             </h4>
//                             <p className="font-medium
//                               text-blue-600 dark:text-blue-400"
//                             >
//                               {t.role}
//                             </p>
//                             <p className="text-sm light:text-gray-600 dark:text-gray-400">
//                               {t.company}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Carousel Indicators */}
//           <div className="flex justify-center space-x-2 mt-8">
//             {testimonials.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentIndex(idx)}
//                 className={`rounded-full transition-all duration-300 
//                   ${idx === currentIndex
//                     ? 'light:bg-blue-500 dark:bg-blue-400 w-8 h-3'
//                     : 'light:bg-gray-300 dark:bg-gray-600 w-3 h-3'}
//                 `}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



