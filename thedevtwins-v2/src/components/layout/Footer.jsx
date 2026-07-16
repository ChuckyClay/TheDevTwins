import { ArrowUp } from "lucide-react";

import Logo from "@/components/layout/Logo";
import NavLinks from "@/components/layout/NavLinks";
import SocialLinks from "@/components/layout/SocialLinks";

import Container from "@/components/ui/Container";

import { siteConfig } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <Container className="relative py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Logo showTagline={false} />

            <p className="mt-6 leading-8 text-slate-400">
              {siteConfig.description}
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <NavLinks direction="vertical" />

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Contact
            </h3>

            <ul className="space-y-4 leading-7 text-slate-400">

              <li>
                📍 {siteConfig.location}
              </li>

              <li>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-cyan-400"
                >
                  {siteConfig.email}
                </a>

              </li>

              <li>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\+/g, "")}`}
                  className="transition hover:text-cyan-400"
                >
                  WhatsApp
                </a>

              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Follow Us
            </h3>

            <p className="mb-6 text-sm leading-7 text-slate-400">
              Connect with us and follow our latest projects.
            </p>

            <SocialLinks size="lg" />

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
            {siteConfig.copyright}
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500 hover:text-slate-950"
          >
            <ArrowUp className="transition duration-300 group-hover:scale-110" />
          </button>

        </div>

      </Container>

    </footer>
  );
}