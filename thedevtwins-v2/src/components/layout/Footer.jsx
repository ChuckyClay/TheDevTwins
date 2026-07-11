import Logo from "@/components/layout/Logo";
import NavLinks from "@/components/layout/NavLinks";
import SocialLinks from "@/components/layout/SocialLinks";

import Container from "@/components/ui/Container";

import { siteConfig } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo showTagline={false} />

            <p className="mt-5 text-sm leading-7 text-slate-400">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <NavLinks direction="vertical" />
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                {siteConfig.location}
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
            <h3 className="mb-5 text-lg font-semibold text-white">
              Follow Us
            </h3>

            <SocialLinks />
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          {siteConfig.copyright}
        </div>
      </Container>
    </footer>
  );
}