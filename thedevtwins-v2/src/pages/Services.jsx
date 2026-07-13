import {
  ServicesHero,
  ServicesList,
  Process,
  WhyChooseUs,
  ServicesCTA,
} from "@/components/services";
import { SEO } from "@/components/seo";

import { seo } from "@/data/seo";


export default function Services() {
  return (
    <>
      <SEO {...seo.services} />

      <ServicesHero />

      <ServicesList />

      <Process />

      <WhyChooseUs />

      <ServicesCTA />
    </>
  );
}