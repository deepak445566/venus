import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      number: "01",
      title: "GEYSER REPAIR SERVICES",
      description: "Our expert technicians specialize in geyser repair services, diagnosing issues promptly to restore your unit's functionality. With years of experience, we ensure reliable repairs for various geyser models, keeping your home comfortable.",
      features: [
        "Emergency Geyser Repairs",
        "Routine Maintenance Check-Ups",
        "Leak Detection and Fixing",
        "Performance Troubleshooting"
      ],
      icon: "🔧"
    },
    {
      number: "02",
      title: "GEYSER INSTALLATION SERVICES",
      description: "We provide professional geyser installation services tailored to your needs. Our certified team ensures proper setup and optimal performance, allowing you to enjoy efficient hot water supply without any hassle.",
      features: [
        "New Geyser Installations",
        "Replacing Old Units",
        "Custom Installation Solutions",
        "Safety Compliance Check"
      ],
      icon: "⚡"
    },
    {
      number: "03",
      title: "REGULAR MAINTENANCE SERVICES",
      description: "Our maintenance services keep your geyser functioning at peak efficiency. We offer comprehensive check-ups to prevent issues, ensuring longevity and reliability for your heating system.",
      features: [
        "Annual Safety Inspections",
        "Performance Optimization",
        "Water Quality Testing",
        "Preventive Maintenance"
      ],
      icon: "🔍"
    },
    {
      number: "04",
      title: "GEYSER PARTS REPLACEMENT",
      description: "We supply and replace all essential geyser parts to ensure your unit operates effectively. From thermostats to heating elements, we have quality components available to restore your geyser's performance.",
      features: [
        "Heating Element Replacement",
        "Thermostat Replacement",
        "Valve and Pipe Repair",
        "Genuine Parts Guarantee"
      ],
      icon: "🔩"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Venus Geyser Service
          </h1>
          <p className="text-xl text-blue-600 font-semibold mb-8">
            Expert Geyser Solutions
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <span className="text-4xl font-bold text-blue-600 mr-4">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl text-white p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              READY TO GET STARTED?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Us for Reliable Geyser Repairs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              
              <div className="text-center sm:text-left">
                <p className="text-blue-200 text-sm">Free Consultation?</p>
                <p className="text-2xl font-bold">9051647575</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="grid md:grid-cols-3 gap-8 text-gray-600">
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">About Us</h4>
            <p className="leading-relaxed">
              Venus Geyser Service provides professional geyser solutions with years of expertise and certified technicians dedicated to your comfort and satisfaction.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Services</h4>
            <div className="space-y-2">
              <p className="hover:text-blue-600 cursor-pointer">Geyser Repair Services</p>
              <p className="hover:text-blue-600 cursor-pointer">Installation Services</p>
              <p className="hover:text-blue-600 cursor-pointer">Maintenance Services</p>
              <p className="hover:text-blue-600 cursor-pointer">Parts Replacement</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                Address: 56/72, Netaji Subhash Road, Kolkata
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                Phone: 9051647575
              </p>
              <p className="flex items-center">
                <span className="mr-2">⏰</span>
                Available 24/7 for Emergency Services
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; 2024 Venus Geyser Service. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;