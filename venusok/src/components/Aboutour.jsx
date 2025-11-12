// AboutUs.jsx
import React from 'react';

const Aboutour = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 lg:mb-4 big">ABOUT US</h2>
         
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 ">
            <h1 className=" text-3xl  lg:text-4xl font-bold text-gray-900 leading-tight big">
              Your Trusted Partner for<br />
              <span className="text-blue-600">Geyser Repair in Kolkata</span>
            </h1>
            
            <p className="text-md lg:text-lg text-gray-600 leading-relaxed pop">
              Venus Geyser Service has been serving Kolkata since 2010, providing reliable 
              geyser repair services. Our certified technicians are dedicated to delivering 
              quality workmanship and customer satisfaction.
            </p>

            {/* Established Badge */}
            <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-lg border border-blue-200">
              <div className="text-blue-900">
                <div className="text-sm font-semibold">Established in</div>
                <div className="text-2xl font-bold">2010</div>
              </div>
            </div>
          </div>

          {/* Right Column - Placeholder for Image */}
          <div className="bg-gray-200 rounded-xl  lg:h-80 flex items-center justify-center">
         <img src='/images/main1.jpg'  className='rounded-2xl'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutour;