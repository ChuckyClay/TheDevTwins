import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

import { aboutPage } from "@/data/aboutPage";

export default function MissionVision() {
  return (
    <section className="py-24">
      <Container>

        <div className="grid gap-8 md:grid-cols-2">

          <Card>
            <h3 className="text-2xl font-semibold text-white">
              Our Mission
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              {aboutPage.mission}
            </p>
          </Card>


          <Card>
            <h3 className="text-2xl font-semibold text-white">
              Our Vision
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              {aboutPage.vision}
            </p>
          </Card>

        </div>

      </Container>
    </section>
  );
}