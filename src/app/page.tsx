"use client";

import React from "react";
import { ThemeProvider } from "@/components/ThemeContext"; // Import ThemeProvider
import ThemeToggle from "@/components/ThemeToggle"; // Import ThemeToggle component
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackGroundBeamDemo";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import { BentoGridDemo } from "@/components/BentoGrid";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import { WhatWeDo } from "../components/WhatWeDo";
import CustomSection from "@/components/NewSection";
import WhySection from "@/components/FeatureCard";
import { FaLock, FaHandsHelping, FaClipboardList } from "react-icons/fa";
import TestimonialsSection from "@/components/TestimonialSection";
import LogoGrid from "@/components/Logos";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialDemo";
import HeroSection3 from "@/components/HeroSection3";
 
import TrustedBy from "@/components/TemporaryLogo";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
 

const logos = [
  { src: "/courses/image5.png", alt: "Netflix" },
  { src: "/courses/image6.png", alt: "Google" },
  { src: "/courses/image7.png", alt: "Meta" },
  { src: "/courses/image8.png", alt: "OnlyFans" },
];



 



const features = [
  {
    icon: <FaHandsHelping size={32} />,
    title: "Self-service to full-service",
    description:
      "Only EigenGram offers a suite of solutions with customizable levels of AI automation and human support so that you can meet clinicians where they are today while preparing your organization for the future.",
  },
  {
    icon: <FaClipboardList size={32} />,
    title: "Specialties are our speciality",
    description:
      "With a bespoke app for Emergency Medicine and AI fine-tuned for oncology and other specialties, EigenGram handles complex workflows, noisy environments, and intelligently curates data from the point of care.",
  },
  {
    icon: <FaLock size={32} />,
    title: "Uncompromising security",
    description:
      "With HITRUST certification and HIPAA compliance, EigenGram delivers enterprise-grade security to ensure that your organization’s data is fully protected and compliant.",
  },
];

const testData = {
  heading: "What We Do",
  subHeading: "Driving innovation and delivering exceptional products.",
  columns: [
    { title: "Innovative Solutions", description: "Cutting-edge solutions for industries." },
    { title: "Customer Focus", description: "Exceeding customer expectations with every delivery." },
    { title: "Quality Commitment", description: "Delivering rigorously tested, high-quality products." },
  ],
};

const testimonialsData = [
  {
    quote:
      "This technology is transformative. In my 23 years of practice, this is the biggest leap forward in technology that I’ve seen.",
    name: "Dr. Stephen Beck",
    designation: "Alabama Oncology",
    imageSrc: "/images/stephen-beck.jpg", // Replace with your image path
  },
  {
    quote:
      "Total game changer. I’m taking lunch breaks for the first time in years, and I was even able to attend my kid’s school play for the first time.",
    name: "Dr. Robert Grigg",
    designation: "Paradise Medical Group",
    imageSrc: "/images/robert-grigg.jpg", // Replace with your image path
  },
  {
    quote:
      "EigenGram has been life changing for me! It’s a great service that every physician should be using.",
    name: "Dr. Mani Nezhad",
    designation: "Dignity Health Medical Group",
    imageSrc: "/images/mani-nezhad.jpg", // Replace with your image path
  },
];


export default function Home() {
  return (
    <ThemeProvider>
      {/* Dark/Light Theme Toggle */}
      <header className="p-4 fixed top-0 right-0 z-50">
        <ThemeToggle />
      </header>

      <main className="min-h-screen bg-gray-100 dark:bg-black dark:text-white antialiased">
      <AuroraBackgroundDemo/>
        <HeroSection />
        
        <BackgroundBeamsWithCollisionDemo />
        <BentoGridDemo />
        <WhatWeDo
          heading={testData.heading}
          subHeading={testData.subHeading}
          columns={testData.columns}
        />
        <CustomSection
          title="AI-centric solutions"
          subtitle="for human-centric medicine"
          description={`From the emergency department to primary care, we handle EHR documentation, 
            allowing clinicians to stay fully engaged with their patients. Our ambient AI captures the 
            conversation in the exam room and generates accurate, complete, and easy-to-read medical notes.`}
          buttonText="Explore Products"
          buttonLink="/products"
          imageSrc="courses/image4.jpg" // Replace with your image path
          primaryColor="#4F46E5" // Custom title color
          buttonColor="#4F46E5" // Custom button color
        />
        <TestimonialsSection
          title="A welcome change"
          subtitle="for physicians"
          testimonials={testimonialsData}
        />
        <WhySection
          title="Why EigenGram?"
          description="In 2013 Augmedix became the first to deliver ambient medical documentation to health systems, hospitals, and clinics. A decade and 10 million notes later, we’ve learned a few things about what healthcare enterprises need."
          features={features}
        />
        <AnimatedTestimonialsDemo/>
       
        {/* <MusicSchoolTestimonials /> */}
        {/* <UpcomingWebinars /> */}
        <Instructors />
        <TrustedBy
      title="Trusted by the best companies"
      subtitle="Every AI is the choice of all the fortune 500 companies."
      logos={logos}
    />
    <HeroSection3/>
        <Footer />
      </main>
    </ThemeProvider>

 
  );
}
