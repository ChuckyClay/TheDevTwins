import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { Reveal } from "@/components/motion";

import { contactInfo } from "@/data/contactInfo";

import ContactInfoCard from "./ContactInfoCard";

export default function ContactInfo() {
  return (
    <section className="py-28">

      <Container>

        <Reveal>

          <SectionTitle
            title="Ways To Reach Us"
            subtitle="Choose the communication method that works best for you. We're always happy to discuss new ideas and answer your questions."
          />

        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {contactInfo.map((contact) => (
            <Reveal key={contact.id}>
              <ContactInfoCard contact={contact} />
            </Reveal>
          ))}

        </div>

      </Container>

    </section>
  );
}