
// import React, { useEffect, useRef, useState } from 'react';
// import { CheckCircle, ArrowRight, Lightbulb, Rocket, Target, Trophy } from 'lucide-react';

// /**
//  * Interactive Timeline Component
//  * Features: Progressive animation, responsive design, accessibility support
//  * Shows the journey from Discovery to Success with smooth transitions
//  */
// const Timeline = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeStep, setActiveStep] = useState(-1);
//   const [animationProgress, setAnimationProgress] = useState(0);
//   const sectionRef = useRef<HTMLDivElement>(null);
//   // const animationRef = useRef<NodeJS.Timeout | null>(null);
//   const animationRef = useRef<number | null>(null);

//   // Intersection Observer for triggering animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !isVisible) {
//           setIsVisible(true);
//           startAnimation();
//         }
//       },
//       { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       observer.disconnect();
//       if (animationRef.current) {
//         clearInterval(animationRef.current);
//       }
//     };
//   }, [isVisible]);

//   /**
//    * Starts the progressive animation sequence
//    */
//   // const startAnimation = () => {
//   //   let step = 0;
//   //   const totalSteps = steps.length;

//   //   // Clear any existing animation
//   //   if (animationRef.current) {
//   //     clearInterval(animationRef.current);
//   //   }

//   //   animationRef.current = setInterval(() => {
//   //     if (step < totalSteps) {
//   //       setActiveStep(step);
//   //       setAnimationProgress(((step + 1) / totalSteps) * 100);
//   //       step++;
//   //     } else {
//   //       if (animationRef.current) {
//   //         clearInterval(animationRef.current);
//   //         animationRef.current = null;
//   //       }
//   //     }
//   //   }, 1200); // Slower, more visible animation
//   // };

//   const startAnimation = () => {
//     let step = 0;
//     const total = steps.length;

//     const tick = () => {
//       if (step < total) {
//         setActiveStep(step);
//         setAnimationProgress(((step + 1) / total) * 100);
//         step++;
//         animationRef.current = requestAnimationFrame(tick);
//       } else {
//         if (animationRef.current) cancelAnimationFrame(animationRef.current);
//       }
//     };

//     // kick it off
//     animationRef.current = requestAnimationFrame(tick);
//   };

//   /**
//    * Timeline steps configuration
//    */
//   const steps = [
//     {
//       number: '01',
//       title: 'Discovery',
//       description: 'Explore career paths with personalized assessments and expert guidance',
//       icon: Lightbulb,
//       color: 'from-blue-500 to-cyan-500',
//       bgColor: 'bg-blue-500',
//       shadowColor: 'shadow-blue-500/25',
//       details: 'Comprehensive career assessment, skill analysis, and personalized roadmap creation'
//     },
//     {
//       number: '02',
//       title: 'Development',
//       description: 'Build skills through curated courses and hands-on projects',
//       icon: Rocket,
//       color: 'from-purple-500 to-pink-500',
//       bgColor: 'bg-purple-500',
//       shadowColor: 'shadow-purple-500/25',
//       details: 'Industry-relevant courses, practical workshops, and mentorship programs'
//     },
//     {
//       number: '03',
//       title: 'Opportunities',
//       description: 'Access exclusive internships and job placements',
//       icon: Target,
//       color: 'from-emerald-500 to-teal-500',
//       bgColor: 'bg-emerald-500',
//       shadowColor: 'shadow-emerald-500/25',
//       details: 'Premium internships, job opportunities, and direct company connections'
//     },
//     {
//       number: '04',
//       title: 'Success',
//       description: 'Achieve your career goals with ongoing mentorship support',
//       icon: Trophy,
//       color: 'from-orange-500 to-red-500',
//       bgColor: 'bg-orange-500',
//       shadowColor: 'shadow-orange-500/25',
//       details: 'Continuous support, career advancement, and professional growth'
//     }
//   ];

//   return (
//     <section
//       id="timeline"
//       ref={sectionRef}
//       className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900"
//       role="region"
//       aria-label="How our process works"

//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6 font-poppins">
//             How It <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Works</span>
//           </h2>
//           <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
//             Your journey to career success in four strategic steps
//           </p>
//         </div>

//         <div aria-live="polite" className="sr-only">
//           Step {activeStep + 1} of {steps.length}: {steps[activeStep]?.title}
//         </div>

//         {/* Desktop Timeline - Horizontal Layout */}
//         <div className="hidden lg:block relative mb-12">
//           {/* Animated Progress Line */}
//           <div className="absolute top-1/2 left-0 w-full h-3 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0 rounded-full shadow-inner">
//             <div
//               className={`h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden
//       ${isVisible ? 'animate-fill-bar' : ''}`}
//             >
//               <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full" />
//               <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-4 border-purple-500 animate-bounce" />
//             </div>
//           </div>

//           {/* Timeline Steps */}
//           <div className="relative z-10 grid grid-cols-4 gap-4 xl:gap-8">
//             {steps.map((step, index) => {
//               const IconComponent = step.icon;
//               const isActive = index <= activeStep;
//               const isCurrentlyAnimating = index === activeStep;

//               return (
//                 <div
//                   key={index}
//                   className={`text-center cursor-pointer transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//                     } ${isCurrentlyAnimating ? 'scale-110 z-20' : isActive ? 'scale-105' : 'hover:scale-105'}`}
//                   style={{ transitionDelay: `${index * 200}ms` }}
//                   onClick={() => setActiveStep(index)}
//                   role="button"
//                   tabIndex={0}
//                   aria-label={`Step ${index + 1}: ${step.title}`}
//                   onKeyDown={(e) => {
//                     if (e.key === 'Enter' || e.key === ' ') {
//                       e.preventDefault();
//                       setActiveStep(index);
//                     }
//                   }}
//                 >
//                   {/* Icon Container */}
//                   <div className="relative mx-auto mb-6">
//                     <div className={`relative w-20 h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center transition-all duration-500 ${isActive
//                       ? `${step.bgColor} text-white shadow-2xl ${step.shadowColor} transform rotate-12`
//                       : 'bg-white dark:bg-gray-800 text-slate-400 dark:text-slate-500 border-2 border-gray-200 dark:border-gray-700 shadow-lg'
//                       }`}>
//                       {isActive ? (
//                         <IconComponent className={`w-8 h-8 xl:w-10 xl:h-10 ${isCurrentlyAnimating ? 'animate-bounce' : ''}`} />
//                       ) : (
//                         <span className="text-xl xl:text-2xl font-bold">{step.number}</span>
//                       )}

//                       {/* Glow effect for active step */}
//                       {isActive && (
//                         <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-30 blur-xl animate-pulse`} />
//                       )}
//                     </div>

//                     {/* Checkmark for completed steps */}
//                     {isActive && (
//                       <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-scale-in shadow-lg">
//                         <CheckCircle className="w-4 h-4 text-white" />
//                       </div>
//                     )}
//                   </div>

//                   {/* Content Card */}
//                   <div className={`bg-white dark:bg-gray-800 rounded-2xl p-4 xl:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform ${isActive ? 'ring-2 ring-purple-500 ring-opacity-50 shadow-2xl' : ''
//                     }`}>
//                     <h3 className="text-lg xl:text-2xl font-semibold text-slate-800 dark:text-white mb-2 xl:mb-3 font-poppins">{step.title}</h3>
//                     <p className="text-sm xl:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-3 xl:mb-4">{step.description}</p>

//                     {/* Expanded details for active step */}
//                     {isActive && (
//                       <div className="mt-4 p-3 xl:p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl animate-fade-in">
//                         <p className="text-xs xl:text-sm text-slate-700 dark:text-slate-300 font-medium">{step.details}</p>
//                       </div>
//                     )}

//                     {/* Progress indicator */}
//                     {index < activeStep && (
//                       <div className="flex justify-center mt-4">
//                         <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6 text-green-500 animate-bounce" />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Mobile/Tablet Timeline - Vertical Layout */}
//         {/* <div className="lg:hidden space-y-6 sm:space-y-8 mb-12"> */}
//         <div className="lg:hidden mb-12 relative">
//           {/* Progress Bar */}
//           {/* <div className="flex justify-center mb-8">
//             <div className="w-2 h-[30vh] sm:h-[40vh] md:h-[50vh] lg:hidden bg-gray-200 dark:bg-gray-700 rounded-full relative shadow-inner">
//               <div
//                 className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
//                 style={{ height: `${animationProgress}%` }}
//               >
//                 <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full" />
//               </div>
//             </div>
//           </div> */}
//           {/* <div className="absolute left-6 top-0 bottom-0 w-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-inner">
//             <div
//               className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out overflow-hidden"
//               style={{ height: `${animationProgress}%` }}
//             >
//               <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full" />
//             </div>
//           </div> */}

//           <div className="absolute left-6 top-0 bottom-0 w-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-inner overflow-hidden">
//             <div
//               className={`w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full
//       ${isVisible ? 'animate-fill-bar-vertical' : ''}`}
//             >
//               <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full" />
//             </div>
//           </div>

//           {/* Edited new div */}
//           <div className="space-y-6 sm:space-y-8 pl-12">
//             {steps.map((step, index) => {
//               const IconComponent = step.icon;
//               const isActive = index <= activeStep;
//               const isCurrentlyAnimating = index === activeStep;


//               return (
//                 <div
//                   key={index}
//                   className={`flex items-start space-x-4 sm:space-x-6 transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
//                     } ${isCurrentlyAnimating ? 'scale-105' : ''}`}
//                   style={{ transitionDelay: `${index * 300}ms` }}
//                   role="article"
//                   aria-label={`Step ${index + 1}: ${step.title}`}
//                 >
//                   {/* Icon */}
//                   <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-500 ${isActive
//                     ? `${step.bgColor} text-white shadow-xl ${step.shadowColor}`
//                     : 'bg-white dark:bg-gray-800 text-slate-400 border-2 border-gray-200 dark:border-gray-700 shadow-lg'
//                     }`}>
//                     {isActive ? (
//                       <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${isCurrentlyAnimating ? 'animate-pulse' : ''}`} />
//                     ) : (
//                       <span className="text-sm sm:text-lg font-bold">{step.number}</span>
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div className={`flex-1 bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 ${isActive ? 'ring-2 ring-purple-500 ring-opacity-30 shadow-2xl' : ''
//                     }`}>
//                     <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white mb-2 sm:mb-3 font-poppins">{step.title}</h3>
//                     <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-3 sm:mb-4">{step.description}</p>

//                     {isActive && (
//                       <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl animate-fade-in">
//                         <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{step.details}</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className={`text-center transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//           <button
//             onClick={() => {
//               try {
//                 document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//               } catch (error) {
//                 console.warn('Scroll to contact error:', error);
//               }
//             }}
//             className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
//             aria-label="Start your career journey today"
//           >
//             Start Your Journey Today
//             <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Timeline;



// File: src/components/ui/Timeline.tsx

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle, ArrowRight, Lightbulb, Rocket, Target, Trophy } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
  details: string;
  icon: React.FC<{ className?: string }>;
  color: string;
  bgColor: string;
  shadowColor: string;
}

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  // Configuration of steps
  const steps: Step[] = useMemo(
    () => [
      {
        number: '01', title: 'Discovery', description: 'Explore career paths...',
        details: 'Career assessment, skill analysis, and roadmap creation.',
        icon: Lightbulb, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500', shadowColor: 'shadow-blue-500/25',
      },
      {
        number: '02', title: 'Development', description: 'Build skills through curated courses...',
        details: 'Courses, workshops, and mentorship.',
        icon: Rocket, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500', shadowColor: 'shadow-purple-500/25',
      },
      {
        number: '03', title: 'Opportunities', description: 'Access exclusive internships...',
        details: 'Internships, job offers, and company access.',
        icon: Target, color: 'from-emerald-500 to-teal-500', bgColor: 'bg-emerald-500', shadowColor: 'shadow-emerald-500/25',
      },
      {
        number: '04', title: 'Success', description: 'Achieve your career goals...',
        details: 'Ongoing support and career growth.',
        icon: Trophy, color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-500', shadowColor: 'shadow-orange-500/25',
      },
    ],
    []
  );

  // Kick off animation sequence
  const startAnimation = useCallback(() => {
    let step = 0;
    const delayMs = 1000;
    const tick = () => {
      if (step < steps.length) {
        setActiveStep(step);
        step++;
        animationRef.current = window.setTimeout(tick, delayMs);
      } else if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
    animationRef.current = window.setTimeout(tick, delayMs);
  }, [steps.length]);

  // Intersection Observer
  const handleIntersect = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting && !isVisible) {
      setIsVisible(true);
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(handleIntersect, { threshold: 0.3, rootMargin: '-50px' });
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [handleIntersect]);

  // Calculate progress bar width
  const progressPercent = activeStep >= 0
    ? ((activeStep + 1) / steps.length) * 100
    : 0;

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="py-16 px-4 sm:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900"
      aria-label="Timeline of steps"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
          How It <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Works</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Your journey to career success in four strategic steps.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative h-1 bg-gray-200 dark:bg-gray-700 rounded-full max-w-4xl mx-auto mb-10">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-pink-500 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Steps Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index <= activeStep;
          const isCurrent = index === activeStep;

          return (
            <div
              key={index}
              className={`group p-6 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl transition-all transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                ${isCurrent ? 'scale-105 ring-2 ring-purple-500' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-4 relative">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white ${step.bgColor} ${step.shadowColor} shadow-lg transition-transform duration-500 ${isCurrent ? 'scale-110' : ''}`}>                    
                  <Icon className={`w-8 h-8 ${isCurrent ? 'animate-bounce' : ''}`} />
                </div>
                {isActive && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-scale-in shadow">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                {step.description}
              </p>
              {isActive && (
                <div className="text-xs text-slate-700 dark:text-slate-300 p-3 mt-2 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg animate-fade-in">
                  {step.details}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-transform duration-300"
        >
          Start Your Journey <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Timeline;


