import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
            <span className="w-2 h-6 bg-blue-600 mr-3 rounded"></span>
            About Us
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Venus Geyser Service provides trusted geyser repair services with a
            commitment to quality and customer satisfaction.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
            <span className="w-2 h-6 bg-green-600 mr-3 rounded"></span>
            Services
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center hover:text-gray-900 transition-colors">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
              Geyser Repair Services
            </li>
            <li className="flex items-center hover:text-gray-900 transition-colors">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
              Geyser Installation Services
            </li>
            <li className="flex items-center hover:text-gray-900 transition-colors">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
              Regular Maintenance Services
            </li>
            <li className="flex items-center hover:text-gray-900 transition-colors">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
              Geyser Parts Replacement
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
            <span className="w-2 h-6 bg-orange-600 mr-3 rounded"></span>
            Contact Us
          </h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <span className="font-semibold block text-gray-900 mb-1">Address:</span>
              <p className="text-sm">56/72, Netaji Subhash Chandra Bose Rd, Nehru Colony, Ashok Nagar, Tollygunge, Kolkata, West Bengal 700040</p>
            </div>
            <div>
              <span className="font-semibold block text-gray-900 mb-1">Email:</span>
              <p className="text-sm">venusgeyserservice143@gmail.com</p>
            </div>
            <div>
              <span className="font-semibold block text-gray-900 mb-1">Phone:</span>
              <p className="text-sm">9051647575</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 text-center py-6 text-gray-500 text-sm bg-gray-50">
        Copyright © 2025 Venus Geyser Service. All rights reserved.
      </div>
    </footer>
  );
}