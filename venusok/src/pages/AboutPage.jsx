import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 big">
          Venus Geyser Service
        </h1>
        <p className="text-xl text-blue-600 font-semibold">
          Reliable Geyser Repair
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main About Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  ABOUT US
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Your Trusted<br />
                <span className="text-blue-600">Service Partner</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Venus Geyser Service has been a leading geyser repair company in Kolkata since 2010, 
                offering quality solutions and customer support. Our certified technicians handle 
                every geyser issue with expertise and promptness, ensuring complete satisfaction 
                for our clients.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">24/7 Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Certified Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Quick Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Warranty Included</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full h-80 bg-gradient-to-br from-blue-500 rounded-2xl to-blue-600  flex items-center justify-center">
              <img src='/images/main4.jpg' className='h-full w-full rounded-2xl'/>
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl text-white p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Our Journey Since 2010</h3>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-blue-100">
              Founded in 2010, Venus Geyser Service began with a mission to provide the best geyser 
              repairs in Kolkata, responding to a growing need for reliable service in the local community. 
              Over the years, we've built a reputation for excellence, trust, and unparalleled customer service.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-blue-500">
              <div className="text-center">
                <div className="text-3xl font-bold">14+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-blue-200 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-200 text-sm">Service Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-blue-200 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
       
      </div>
    </div>
  );
};

export default AboutPage;