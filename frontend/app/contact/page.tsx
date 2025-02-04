'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactUs = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      id: 2,
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: "support@ecomshop.com",
      description: "Online support 24/7"
    },
    {
      id: 3,
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      info: "123 Commerce Street",
      description: "New York, NY 10001"
    },
    {
      id: 4,
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      info: "Monday - Friday",
      description: "9:00 AM - 6:00 PM EST"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {contactInfo.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-900 mt-1">{item.info}</p>
            <p className="text-gray-500 text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
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
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                ></textarea>
              </div>
            </div>

            <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
              Send Message
            </Button>
          </form>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What are your shipping times?",
                answer: "We typically process and ship orders within 1-2 business days. Delivery times vary by location."
              },
              {
                question: "How can I track my order?",
                answer: "Once your order ships, you'll receive a tracking number via email to monitor your delivery."
              },
              {
                question: "What's your return policy?",
                answer: "We offer a 30-day return policy on all unused items in their original packaging."
              },
              {
                question: "Do you ship internationally?",
                answer: "Yes, we ship to over 150 countries worldwide. Shipping costs vary by location."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Chat CTA */}
      <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-center">
        <MessageCircle className="h-12 w-12 text-white mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-4">
          Need Immediate Assistance?
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Our live chat support is available 24/7 to help you with any questions.
        </p>
        <Button className="bg-white text-gray-900 hover:bg-gray-100">
          Start Live Chat
        </Button>
      </div>
    </div>
  );
};

export default ContactUs;