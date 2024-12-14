import React from "react";

const HeroSection3 = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50">
      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/courses/image9.png" // Replace with your logo path
            alt="Logo"
            className="h-10"
          />
          <span className="text-xl font-bold text-gray-800 ml-2">Ada</span>
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-6 text-gray-700 font-medium">
          <a href="#download" className="hover:text-blue-600">
            Download Ada
          </a>
          <a href="#meet" className="hover:text-blue-600">
            Meet Ada
          </a>
          <a href="#for-you" className="hover:text-blue-600">
            For you
          </a>
          <a href="#partners" className="hover:text-blue-600">
            For partners
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Get in touch
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-8 py-16 lg:py-24">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Health. <br />
            Powered by Ada.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Supporting better health outcomes and clinical excellence with
            intelligent technology.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
              Download Ada
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-50">
              Become a partner
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative mt-10 lg:mt-0">
          <div className="p-8 bg-white shadow-lg rounded-xl max-w-md">
            <img
              src="/courses/image9.png" // Replace with your icon path
              alt="Speech Bubble Icon"
              className="h-8 w-8 mb-4"
            />
            <p className="text-lg text-gray-800">
              Let’s start with the symptom that’s troubling you the most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;
