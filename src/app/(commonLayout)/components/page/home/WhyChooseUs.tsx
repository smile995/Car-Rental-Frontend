import React from "react";
import Title from "../shared/Title";
import { whyChooseUs } from "../../../../../../public/DummyData/WhyChooseUs";

const WhyChooseUs = () => {
  return (
    <div>
      <Title
        heading="Why Choose Us"
        subheading="Discover what makes us the trusted choice for car buyers around the world."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
        {whyChooseUs?.map((item) => (
          <div
            className="bg-slate-100 hover:translate-x-2 hover:border-t-5 hover:border-blue-500 hover:translate-y-2 shadow-md rounded-lg p-5 hover:shadow-red-500 flex items-start text-center h-52"
            key={item.id}
          >
            <div className="space-y-3">
              <h1 className="text-3xl">{item.icon}</h1>
              <p className="font-semibold text-xl">{item.title}</p>
              <p className="text-slate-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
