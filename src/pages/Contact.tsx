
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div>
      {/* Contact Hero Section */}
      <section className="relative bg-tech-blue text-white py-20">
        <div className="container-custom px-4 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg opacity-90">
              Have questions or need assistance? Reach out to our team for prompt and helpful support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Card - Address */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-tech-accent" />
              </div>
              <h3 className="text-xl font-semibold text-tech-blue mb-2">Our Location</h3>
              <p className="text-tech-gray">KG 123 Street, Kigali City, Rwanda</p>
            </div>

            {/* Contact Card - Phone */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-tech-accent" />
              </div>
              <h3 className="text-xl font-semibold text-tech-blue mb-2">Phone Number</h3>
              <p className="text-tech-gray">
                <a href="tel:+250700000000" className="hover:text-tech-accent transition-colors">
                  +250 700 000 000
                </a>
              </p>
              <p className="text-tech-gray">
                <a href="tel:+250780000000" className="hover:text-tech-accent transition-colors">
                  +250 780 000 000
                </a>
              </p>
            </div>

            {/* Contact Card - Email */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-tech-accent" />
              </div>
              <h3 className="text-xl font-semibold text-tech-blue mb-2">Email Address</h3>
              <p className="text-tech-gray">
                <a href="mailto:info@techtrends.rw" className="hover:text-tech-accent transition-colors">
                  info@techtrends.rw
                </a>
              </p>
              <p className="text-tech-gray">
                <a href="mailto:support@techtrends.rw" className="hover:text-tech-accent transition-colors">
                  support@techtrends.rw
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-tech-blue mb-4">Send Us a Message</h2>
              <p className="text-tech-gray mb-6">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-tech-accent focus:border-tech-accent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-tech-accent focus:border-tech-accent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-tech-accent focus:border-tech-accent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-tech-accent focus:border-tech-accent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-tech-accent focus:border-tech-accent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-tech-accent focus:border-tech-accent"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-tech-accent hover:bg-tech-blue">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-tech-blue mb-4">Business Hours</h2>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Friday:</span>
                    <span className="text-tech-gray">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday:</span>
                    <span className="text-tech-gray">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-tech-gray">Closed</span>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-tech-blue mb-4">FAQs</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Do you offer delivery services?</h3>
                    <p className="text-tech-gray">Yes, we provide delivery services across Kigali City. For deliveries outside Kigali, please contact our customer service team.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
                    <p className="text-tech-gray">We accept cash, credit/debit cards, mobile money, and bank transfers.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Do you offer warranty on your products?</h3>
                    <p className="text-tech-gray">Yes, all our products come with a minimum warranty of 12 months. Certain products have extended warranty options available.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-tech-blue mb-3">Stay Updated</h2>
          <p className="text-tech-gray mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on the latest products, special offers, and tech news.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-tech-accent focus:border-tech-accent"
              required
            />
            <Button className="bg-tech-accent hover:bg-tech-blue whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
