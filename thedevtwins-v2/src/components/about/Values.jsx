import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

import { aboutPage } from "@/data/aboutPage";


export default function Values() {
  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          title="Our Values"
          subtitle="The principles that guide how we design, build, and deliver technology solutions."
        />


        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {aboutPage.values.map((value) => (
            <Card key={value.id}>

              <h3 className="text-xl font-semibold text-white">
                {value.title}
              </h3>


              <p className="mt-4 leading-7 text-slate-400">
                {value.description}
              </p>

            </Card>
          ))}

        </div>

      </Container>
    </section>
  );
}