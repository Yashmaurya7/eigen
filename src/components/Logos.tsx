import React from "react";
import Image from "next/image";

type LogoGridProps = {
  title: string;
  logos: { src: string; alt: string }[];
};

const LogoGrid: React.FC<LogoGridProps> = ({ title, logos }) => {
  return (
    <div className="py-16 bg-white text-center">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{title}</h1>
      {/* Logos */}
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

export default LogoGrid;
