import React from "react";

type FeatureCard = {
  icon: React.ReactNode; // Pass an SVG or icon component
  title: string;
  description: string;
};

type WhySectionProps = {
  title: string;
  description: string;
  features: FeatureCard[];
};

const WhySection: React.FC<WhySectionProps> = ({ title, description, features }) => {
  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-300">{description}</p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl p-6 shadow-lg flex flex-col items-start"
          >
            {/* Icon */}
            <div className="text-blue-500 mb-4">{feature.icon}</div>
            {/* Title */}
            <h2 className="text-xl font-semibold text-blue-500 mb-2">
              {feature.title}
            </h2>
            {/* Description */}
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySection;
