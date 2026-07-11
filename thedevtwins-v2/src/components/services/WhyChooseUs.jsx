import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { whyChooseUs } from "@/data/whyChooseUs";

import WhyChooseCard from "./WhyChooseCard";


export default function WhyChooseUs() {
  return (
    <section className="py-24">

      <Container>

        <SectionTitle
          title="Why Choose Us"
          subtitle="We combine technical skills, security awareness, and a commitment to quality to deliver dependable digital solutions."
        />


        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {whyChooseUs.map((item) => (
            <WhyChooseCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}