import React from "react";
import Image from "next/image";

type TrustedByProps = {
  title: string;
  subtitle: string;
  logos: { src: string; alt: string }[];
};

const TrustedBy: React.FC<TrustedByProps> = ({ title, subtitle, logos }) => {
  return (
    <div className="min-h-[60vh] py-24 bg-white text-center">
      {/* Title and Subtitle */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-black">{title}</h1>
        <p className="text-lg text-gray-600 mt-2">{subtitle}</p>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-5xl mx-auto">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
