import React from "react";
import Hero from "../../components/guest/Hero";
import AboutUs from "../../components/guest/AboutUs"
import Gallery from "../../components/guest/Gallery";
import Services from "../../components/guest/Menu";
import Footer from "../../components/guest/Footer";
import Testimoni from "../../components/guest/Testimoni";

export default function Dashboard1(){
  return(
    <div>
      <Hero/>
      <AboutUs/>
      <Gallery/>
      <Services/>
      <Testimoni/>
      <Footer/>
      
    </div>
  )
}