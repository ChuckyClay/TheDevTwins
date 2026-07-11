import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { contactInfo } from "@/data/contactInfo";

import ContactInfoCard from "./ContactInfoCard";

export default function ContactInfo() {
  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          title="Contact Information"
          subtitle="Choose the communication method that's most convenient for you."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {contactInfo.map((contact) => (
            <ContactInfoCard
              key={contact.id}
              contact={contact}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}