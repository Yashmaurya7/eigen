import React from "react";

type Column = {
  title: string;
  description: string;
};

type WhatWeDoProps = {
  heading: string;
  subHeading?: string;
  columns: Column[];
};

export const WhatWeDo: React.FC<WhatWeDoProps> = ({
  heading,
  subHeading,
  columns,
}) => {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">{heading}</h2>
        {subHeading && (
          <p className="text-lg text-neutral-500 mt-2">{subHeading}</p>
        )}
      </div>

      {/* Columns Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {columns.map((column, index) => (
          <div
            key={index}
            className="text-center border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-4">{column.title}</h3>
            <p className="text-neutral-600">{column.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

 
