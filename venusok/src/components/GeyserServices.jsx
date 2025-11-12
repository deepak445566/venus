import React from "react";
import { CheckCircle } from "lucide-react";

const GeyserServices = () => {
  const services = [
    {
      image:
        "/images/main2.webp",
      title: "Geyser Repair Services",
      points: [
        "Emergency Geyser Repairs",
        "Routine Maintenance Check-Ups",
        "Leak Detection and Fixing",
      ],
    },
    {
      image:
        "/images/main1.jpg",
      title: "Geyser Installation Services",
      points: [
        "New Geyser Installations",
        "Replacing Old Units",
        "Custom Installation Solutions",
      ],
    },
    {
      image:
        "/images/main4.jpg",
      title: "Regular Maintenance Services",
      points: [
        "Annual Safety Inspections",
        "Performance Optimization",
        "Water Quality Testing",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
           <h2 className="text-xl  font-bold text-gray-900 mb-4 big">
          Our Services
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 big">
            Comprehensive Geyser Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto pop">
            Professional repair, installation, and maintenance services to keep your geyser running efficiently
          </p>
         
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li 
                      key={i} 
                      className="flex items-start gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    >
                      <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>

             
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default GeyserServices;