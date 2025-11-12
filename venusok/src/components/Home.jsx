import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate= useNavigate();
  const handleform=()=>{
  navigate("/form")
}
  return (
    <div
      className="h-[110vh] bg-cover bg-center relative text-white max-w-screen"
      style={{
        backgroundImage: `url("/images/main.avif")`,
      }}
    >
      {/* Navbar */}

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center h-[110vh] text-center  px-6 bg-black/40 w-full">
        <h1 className="text-lg md:text-xl  drop-shadow-lg mont  ">
        Trustworthy Geyser Solutions
        </h1>
        <p className="mt-4 text-5xl md:text-8xl big text-white max-w-6xl font-semibold ">
   Expert Geyser Repair Services in Kolkata
        </p>
        <button onClick={handleform} className="mt-8 big text-lg bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-all">
         GET A QUOTE
        </button>
      </div>
    </div>
  );
};

export default Home;
