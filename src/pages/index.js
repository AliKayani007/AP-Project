// pages/index.jsx
import Head from "next/head";
import fs from 'fs/promises';
import path from 'path';
// Landing page sections
import HeroSection from "@/components/landing/HeroSection";
import AgentsSection from "@/components/landing/AgentsSection";
import AvailabilitySection from "@/components/landing/AvailabilitySection";
import IntegrationsSection from "@/components/landing/IntegrationsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import FAQSection from "@/components/landing/FAQSection";

import Layout from "@/components/layout/layout";
export default function Home(props) {
  const faqs=props.faqs;
  const agents=props.agents;
  const features=props.features;
  const testimonials=props.testimonials;
  return (
  
    <div className="h-full bg-black text-white relative overflow-x-hidden">
      <Head>
        <title>AI-Powered Agents | Clear Parts</title>
        <meta name="description" content="Next-gen AI platform for PC enthusiastic." />
      </Head>

      <HeroSection />
      <AgentsSection agents={agents}/>
      <AvailabilitySection />
      <FeaturesSection  feature={features}/>
      <IntegrationsSection />
    <TestimonialsSection testimonials={testimonials}/>
      <FAQSection faqs={faqs} />

      </div>
 
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(),'data', 'data.json');
  const dataJson = await fs.readFile(filePath);
  const data = JSON.parse(dataJson);

  const { faqs, agents,features, testimonials } = data;

  return {
    props: {
      faqs,
      agents,
      features,
      testimonials,
    },
    revalidate: 600,
  };
}