import React from "react";
import { Phone, Star, BadgeCheck } from "lucide-react"; // icon library

const About = () => {
  const infoData = [
    {
      icon: <Phone size={26} className="text-white" />,
      title: "Get a Free Quote Today!",
      value: "9051647575",
    },
    {
      icon: <Star size={26} className="text-white" />,
      title: "Based on Real Reviews",
      value: "5 Star Service",
    },
    {
      icon: <BadgeCheck size={26} className="text-white" />,
      title: "Years of Experience",
      value: "5+ years",
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 px-8 py-6 max-w-6xl mx-auto mt-3 ">
      {infoData.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 text-center md:text-left"
        >
          <div className="bg-blue-500 p-4 rounded-full flex items-center justify-center">
            {item.icon}
          </div>
          <div>
            <p className="text-gray-600 font-medium">{item.title}</p>
            <p className="text-xl md:text-2xl font-bold text-[#001845]">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
