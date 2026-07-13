import { Link } from "react-router-dom";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import { about } from "@/data/about";

export default function AboutPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <Badge>{about.badge}</Badge>

            <h2 className="mt-6 text-4xl font-bold text-white">
              {about.title}
            </h2>

            {about.description.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 leading-8 text-slate-400"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-10">
              <Link to={about.button.link}>
                <Button>
                  {about.button.text}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side Placeholder */}
          <div className="flex items-center justify-center">
            <div className="flex h-[400px] w-full max-w-lg items-center justify-center rounded-3xl border border-slate-800 bg-slate-900">
              <span className="text-slate-500">
                Team Image Placeholder
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}