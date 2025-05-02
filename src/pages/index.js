// pages/index.jsx
import { useEffect, useState } from "react";
import Head from "next/head";

// Landing page sections
import HeroSection from "@/components/landing/HeroSection";
import AgentsSection from "@/components/landing/AgentsSection";
import AvailabilitySection from "@/components/landing/AvailabilitySection";
import IntegrationsSection from "@/components/landing/IntegrationsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import FAQSection from "@/components/landing/FAQSection";
import Layout from "@/components/layout/layout";
export default function Home() {
  return (
  
    <div className="h-full bg-black text-white relative overflow-x-hidden">
      <Head>
        <title>AI-Powered Agents | Clear Parts</title>
        <meta name="description" content="Next-gen AI platform for PC enthusiastic." />
      </Head>

      <HeroSection />
      <AgentsSection />
      <AvailabilitySection />
      <FeaturesSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <FAQSection />
      </div>
 
  );
}
