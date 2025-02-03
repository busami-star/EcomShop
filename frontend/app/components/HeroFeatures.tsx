import React from "react";
import { ShieldCheck, Truck, RefreshCw } from "lucide-react";

const HeroFeatures = () => {
  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Free Shipping",
      description: "On orders over $100",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Secure Payment",
      description: "100% secure checkout",
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Easy Returns",
      description: "30 day return policy",
    },
  ];

  return (
    <div>
      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="flex items-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 bg-gray-900 bg-opacity-5 p-3 rounded-xl">
              {feature.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeatures;
