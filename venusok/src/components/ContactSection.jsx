import React from "react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
   const navigate= useNavigate();
  const handleform=()=>{
  navigate("/form")
}
  return (
    <section className="w-full flex flex-col md:flex-row h-[400px]">
      {/* Left Side - Background Image */}
      <div className="md:w-1/2 w-full h-full">
        <img
          src="/images/main5.jpg" // replace with your own image
          alt="Technician working"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Blue Overlay */}
      <div className="md:w-1/2 w-full bg-[#001845]/95 text-white flex flex-col justify-center items-center text-center p-8">
        <h2 className="text-3xl md:text-5xl big font-bold mb-6">Contact Us Today</h2>

        <button onClick={handleform} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md mb-6 transition">
          GET A QUOTE
        </button>

    

        <p className="text-2xl mont font-semibold">
          OR Call Us: <span className="text-white">9051647575</span>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
