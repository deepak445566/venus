import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Aboutour from "./components/Aboutour";
import GeyserServices from "./components/GeyserServices";
import ContactSection from "./components/ContactSection";
import WhyChooseUs from "./components/WhyChooseUs";
import CustomerReviews from "./components/CustomerReviews";

import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Form from "./pages/Form";



function App() {
  return (
    <Router>
      {/* Common Navbar */}
      <Navbar />

      {/* Dynamic Routes */}
      <Routes>
        <Route path="/" element={

          <>
         <Home/>
         <About/>
         <Aboutour/>
         <GeyserServices/>
         <ContactSection/>
         <WhyChooseUs/>
         <CustomerReviews/>
          <Form/>
          
          </>
        } />
  
      <Route path="/about" element={<AboutPage/>}/>
         <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/blog" element={<Blog/>}/>
               <Route path="/contact" element={<Contact/>}/>
<Route path="/form" element={<Form/>}/>
      </Routes>

      {/* Common Footer */}
      <Footer />
    </Router>
  );
}

export default App;

 