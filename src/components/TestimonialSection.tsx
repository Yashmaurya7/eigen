import React from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  imageSrc: string;
};

type TestimonialsSectionProps = {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
};

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  subtitle,
  testimonials,
}) => {
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-blue-600">{title}</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-2">{subtitle}</h2>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
          >
            <p className="text-lg text-gray-800 font-medium mb-6">
              “{testimonial.quote}”
            </p>
            <div className="flex items-center mt-6">
              <img
                src={testimonial.imageSrc}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
