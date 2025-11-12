import { User, Mail, Home, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export default function Form() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // Replace with your key

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setStatus("Message sent successfully ✅");
      e.target.reset();
    } else {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-blue-50 p-8 rounded-2xl shadow-lg space-y-6"
        >
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border rounded-md bg-white">
                <User className="text-blue-500 ml-3" />
                <input
                  type="text"
                  name="first_name"
                  required
                  className="w-full px-3 py-2 border-none focus:ring-0 outline-none rounded-md"
                  placeholder="John"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border rounded-md bg-white">
                <User className="text-blue-500 ml-3" />
                <input
                  type="text"
                  name="last_name"
                  required
                  className="w-full px-3 py-2 border-none focus:ring-0 outline-none rounded-md"
                  placeholder="Doe"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border rounded-md bg-white">
              <Mail className="text-blue-500 ml-3" />
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 border-none focus:ring-0 outline-none rounded-md"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border rounded-md bg-white">
              <Home className="text-blue-500 ml-3" />
              <input
                type="text"
                name="address"
                required
                className="w-full px-3 py-2 border-none focus:ring-0 outline-none rounded-md"
                placeholder="56/72 Netaji Subhash Chandra Bose Rd, Kolkata"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Comment or Message
            </label>
            <div className="flex items-start border rounded-md bg-white">
              <MessageSquare className="text-blue-500 ml-3 mt-3" />
              <textarea
                name="message"
                rows="4"
                className="w-full px-3 py-2 border-none focus:ring-0 outline-none rounded-md"
                placeholder="Write your message here..."
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition duration-200"
          >
            <Send size={18} /> Submit
          </button>

          {/* Status Message */}
          {status && (
            <p className="text-center text-sm text-gray-700 font-medium mt-4">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
