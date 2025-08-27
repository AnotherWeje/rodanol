import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import AboutSection from "@/components/ui/about-section";
import ServicesSection from "@/components/ui/services-section";
import MissionSection from "@/components/ui/mission-section";
import Footer from "@/components/ui/footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
  <HeroSection />
  <AboutSection />
  <ServicesSection />
      <MissionSection />
      <Footer />
    </div>
  );
};

export default Index;