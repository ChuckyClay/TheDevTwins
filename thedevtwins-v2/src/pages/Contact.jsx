import {
  ContactHero,
  ContactInfo,
  ContactForm,
  FAQ,
} from "@/components/contact";
import { SEO } from "@/components/seo";

import { seo } from "@/data/seo";

export default function Contact() {
  return (
    <>
      <SEO {...seo.contact} />

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <FAQ />
    </>
  );
}