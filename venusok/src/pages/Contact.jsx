import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Users,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4 big">Get in Touch</h2>
        <p className="text-gray-600 text-lg">We’re Here to Assist You Anytime</p>
      </div>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {/* Phone */}
        <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition duration-300">
          <div className="flex justify-center mb-4">
            <Phone className="text-blue-600 w-8 h-8" />
          </div>
          <h4 className="text-lg font-semibold text-blue-700">Phone</h4>
          <p className="text-gray-700 mt-2">9051647575</p>
        </div>

        {/* Email */}
        <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition duration-300">
          <div className="flex justify-center mb-4">
            <Mail className="text-blue-600 w-8 h-8" />
          </div>
          <h4 className="text-lg font-semibold text-blue-700">Email</h4>
          <p className="text-gray-700 mt-2 break-words">
            venusgeyserservice143@gmail.com
          </p>
        </div>

        {/* Address */}
        <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition duration-300">
          <div className="flex justify-center mb-4">
            <MapPin className="text-blue-600 w-8 h-8" />
          </div>
          <h4 className="text-lg font-semibold text-blue-700">Address</h4>
          <p className="text-gray-700 mt-2 leading-relaxed">
            56/72, Netaji Subhash Chandra Bose Rd,
            <br />
            Nehru Colony, Ashok Nagar,
            <br />
            Tollygunge, Kolkata, West Bengal 700040
          </p>
        </div>

        {/* Follow Us */}
        <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition duration-300">
          <div className="flex justify-center mb-4">
            <Users className="text-blue-600 w-8 h-8" />
          </div>
          <h4 className="text-lg font-semibold text-blue-700">Follow Us</h4>
          <div className="flex justify-center space-x-5 mt-4 text-blue-600">
            <a href="#" className="hover:text-blue-800">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-pink-600">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-sky-500">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-700">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-red-600">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
