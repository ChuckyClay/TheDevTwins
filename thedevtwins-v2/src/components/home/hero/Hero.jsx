import Container from "@/components/ui/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden lg:min-h-[90vh]">

      <Container className="relative">

        <div className="grid min-h-[90vh] items-center gap-20 py-24 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>

      </Container>
    </section>
  );
}