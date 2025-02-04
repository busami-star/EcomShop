import React from 'react';
import { Button } from "@/components/ui/button";
import { BadgeCheck, Users, Globe, TrendingUp } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
}

interface StatCard {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

const AboutUs = () => {
  const stats: StatCard[] = [
    {
      id: 1,
      title: "Global Reach",
      value: "150+",
      description: "Countries Served",
      icon: <Globe className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Happy Customers",
      value: "1M+",
      description: "Satisfied Shoppers",
      icon: <Users className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Growth Rate",
      value: "85%",
      description: "Year over Year",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "Visionary leader with 15 years in e-commerce innovation"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Head of Design",
      description: "Award-winning designer focused on user experience"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Customer Success",
      description: "Dedicated to creating exceptional shopping experiences"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Our Story
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Building the future of online shopping with innovation, style, and a commitment to customer satisfaction.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <BadgeCheck className="h-12 w-12 text-gray-900 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            At EcomShop, we're revolutionizing the online shopping experience by combining cutting-edge technology with personalized service. Our goal is to make premium products accessible to everyone while maintaining the highest standards of quality and customer care.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-lg font-semibold text-gray-900">{stat.title}</p>
            <p className="text-gray-600 mt-1">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Meet Our Team
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          The passionate individuals behind EcomShop
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Team Member Photo</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
            <p className="text-gray-600 font-medium">{member.role}</p>
            <p className="mt-2 text-gray-500">{member.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Join Our Journey
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Be part of our growing community and experience shopping reimagined.
        </p>
        <Button className="bg-white text-gray-900 hover:bg-gray-100">
          Start Shopping
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;