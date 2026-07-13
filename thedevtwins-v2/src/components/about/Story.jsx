import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { aboutPage } from "@/data/aboutPage";

export default function Story() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Content */}
          <div>
            <SectionTitle
              title={aboutPage.story.title}
              subtitle="Our journey, passion, and commitment to building meaningful technology solutions."
            />

            <div className="mt-8 space-y-6">
              {aboutPage.story.paragraphs.map(
                (paragraph) => (
                  <p
                    key={paragraph}
                    className="leading-8 text-slate-400"
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </div>


          {/* Visual Placeholder */}
          <div className="flex justify-center">
            <div className="flex h-[350px] w-full max-w-md items-center justify-center rounded-3xl border border-slate-800 bg-slate-900">

              <span className="text-slate-500">
                Our Story Image
              </span>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}