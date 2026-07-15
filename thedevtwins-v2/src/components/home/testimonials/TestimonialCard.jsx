import { memo } from "react";
import {
  Quote,
  Star,
} from "lucide-react";

import Card from "@/components/ui/Card";
import { HoverCard } from "@/components/motion";

function TestimonialCard({ testimonial }) {
  return (
    <HoverCard>

      <Card className="group relative h-full overflow-hidden border border-slate-800 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40">

        {/* Glow */}

        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

        <Quote
          size={44}
          className="mb-6 text-cyan-500/30"
        />

        {/* Stars */}

        <div className="mb-6 flex gap-1">

          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className="fill-cyan-400 text-cyan-400"
            />
          ))}

        </div>

        {/* Message */}

        <p className="leading-8 text-slate-400 italic">
          "{testimonial.message}"
        </p>

        {/* Client */}

        <div className="mt-8 flex items-center gap-4 border-t border-slate-800 pt-6">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 text-lg font-bold text-cyan-400">

            {testimonial.name.charAt(0)}

          </div>

          <div>

            <h3 className="font-semibold text-white">
              {testimonial.name}
            </h3>

            <p className="text-sm text-cyan-400">
              {testimonial.role}
            </p>

          </div>

        </div>

      </Card>

    </HoverCard>
  );
}

export default memo(TestimonialCard);