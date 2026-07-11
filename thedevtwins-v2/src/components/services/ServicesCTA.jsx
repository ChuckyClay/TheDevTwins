import { Link } from "react-router-dom";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import { servicesCta } from "@/data/servicesCta";


export default function ServicesCTA() {
  return (
    <section className="py-24">
      <Container>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 px-6 py-16 text-center md:px-12">

          <h2 className="text-4xl font-bold text-white">
            {servicesCta.title}
          </h2>


          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            {servicesCta.description}
          </p>


          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link to={servicesCta.primaryButton.link}>
              <Button>
                {servicesCta.primaryButton.text}
              </Button>
            </Link>


            <Link to={servicesCta.secondaryButton.link}>
              <Button variant="secondary">
                {servicesCta.secondaryButton.text}
              </Button>
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}