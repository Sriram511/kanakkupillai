import React from "react";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import Quality from "./components/Quality";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Feature />
      <Quality />
      <Plan />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
