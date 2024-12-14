"use client"
import React from "react";

type CustomSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  primaryColor?: string; // Customizable color for the title
  buttonColor?: string; // Customizable color for the button
};

const CustomSection: React.FC<CustomSectionProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  primaryColor = "#1D4ED8", // Default to blue
  buttonColor = "#1D4ED8", // Default to blue
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white">
      {/* Text Content */}
      <div className="flex-1">
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight"
          style={{ color: primaryColor }}
        >
          {title}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-2">
          {subtitle}
        </h2>
        <p className="text-gray-600 mt-4 text-lg">{description}</p>
        <a href={buttonLink}>
          <button
            className="mt-6 px-6 py-3 rounded-md font-medium border"
            style={{
              color: buttonColor,
              borderColor: buttonColor,
            }}
          >
            {buttonText}
          </button>
        </a>
      </div>

      {/* Image */}
      <div className="flex-1">
        <img
          src={imageSrc}
          alt="Section Visual"
          className="rounded-lg shadow-md object-cover w-full"
        />
      </div>
    </div>
  );
};

export default CustomSection;
