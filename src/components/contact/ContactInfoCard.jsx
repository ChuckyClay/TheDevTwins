import { memo } from "react";

import {
  Mail,
  MessageCircle,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import { HoverCard } from "@/components/motion";

const icons = {
  Email: Mail,
  WhatsApp: MessageCircle,
  Location: MapPin,
  Availability: Clock3,
};

function ContactInfoCard({ contact }) {
  const Icon = icons[contact.title] || Mail;

  const content = (
    <HoverCard>

      <div className="group h-full rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40">

        <div className="flex items-center justify-between">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition duration-300 group-hover:bg-cyan-500">

            <Icon
              size={30}
              className="text-cyan-400 transition duration-300 group-hover:text-slate-950"
            />

          </div>

          {contact.href !== "#" && (
            <ArrowUpRight
              size={22}
              className="text-slate-500 transition group-hover:text-cyan-400"
            />
          )}

        </div>

        <h3 className="mt-8 text-2xl font-bold text-white">
          {contact.title}
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          {contact.value}
        </p>

      </div>

    </HoverCard>
  );

  if (contact.href && contact.href !== "#") {
    return (
      <a
        href={contact.href}
        target={contact.href.startsWith("http") ? "_blank" : undefined}
        rel={
          contact.href.startsWith("http")
            ? "noopener noreferrer"
            : undefined
        }
      >
        {content}
      </a>
    );
  }

  return content;
}

export default memo(ContactInfoCard);