import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.email.includes('@')) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@beyondcareer.com",
      action: "mailto:hello@beyondcareer.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9876543210",
      action: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "IIT Kharagpur, West Bengal, India 721302",
      action: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-playfair">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your career? Reach out to us and let's start your journey together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form - Enhanced for Desktop */}
          <Card className={`bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <CardHeader className="pb-6 sm:pb-8">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-playfair flex items-center gap-2 sm:gap-3">
                <Send className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                Send us a Message
              </CardTitle>
              <p className="text-gray-300 mt-2 text-sm sm:text-base md:text-lg">
                We'd love to hear from you. Drop us a message and we'll respond as soon as possible.
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-200">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-10 sm:h-12 text-sm sm:text-base focus:border-blue-400 focus:ring-blue-400/20 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-200">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-10 sm:h-12 text-sm sm:text-base focus:border-blue-400 focus:ring-blue-400/20 transition-colors"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs sm:text-sm font-medium text-gray-200">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-10 sm:h-12 text-sm sm:text-base focus:border-blue-400 focus:ring-blue-400/20 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-200">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 resize-none text-sm sm:text-base focus:border-blue-400 focus:ring-blue-400/20 transition-colors"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 sm:py-4 h-12 sm:h-14 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl text-sm sm:text-base md:text-lg"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 font-playfair">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-1">{info.title}</h4>
                      <a 
                        href={info.action}
                        className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300 break-words"
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 font-playfair">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 font-playfair">Office Hours</h3>
              <div className="space-y-2 text-sm sm:text-base text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
