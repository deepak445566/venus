import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 mt-40 lg:mt-5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl big font-bold text-gray-800 mb-4">
            WHY CHOOSE US
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl pop mx-auto">
            Dedicated to Quality and Customer Satisfaction Like No Other
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex  mb-4 items-center big">
              <span className="text-3xl font-bold text-blue-600 mr-4">01.</span>
              <h3 className="text-xl font-bold text-gray-800">Certified Technicians</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mont">
              Our team consists of certified professionals with extensive experience in geyser repairs, ensuring top-notch service every time.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex  mb-4 items-center big">
              <span className="text-3xl font-bold text-green-600 mr-4">02.</span>
              <h3 className="text-xl font-bold text-gray-800">Transparent Pricing</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mont">
              We believe in honest pricing, with no hidden costs, so you know exactly what you're paying for each service.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex  mb-4 items-center big">
              <span className="text-3xl font-bold text-orange-600 mr-4">03.</span>
              <h3 className="text-xl font-bold text-gray-800">Quick Response Times</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mont">
              Our commitment to prompt service means we respond quickly to your repair needs, minimizing downtime for your geyser.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;