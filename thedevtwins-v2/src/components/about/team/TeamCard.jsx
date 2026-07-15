import { memo } from "react";
import {
  Code2,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import Card from "@/components/ui/Card";

import {
  HoverCard,
  Floating,
} from "@/components/motion";

function TeamCard({ member }) {
  return (
    <HoverCard>
      <Card className="group relative overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex flex-col items-center text-center">

          <Floating>

            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-800 text-cyan-400">

              <Code2 size={42} />

            </div>

          </Floating>

          <h3 className="mt-7 text-2xl font-bold text-white">
            {member.name}
          </h3>

          <span className="mt-2 rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            {member.role}
          </span>

          <p className="mt-6 leading-8 text-slate-400">
            {member.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">

            {member.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
              >
                {skill}
              </span>
            ))}

          </div>

          <div className="mt-8 flex items-center gap-5">

            {member.social.github !== "#" && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                <FaGithub size={22} />
              </a>
            )}

            {member.social.linkedin !== "#" && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                <FaLinkedin size={22} />
              </a>
            )}

          </div>

        </div>

      </Card>
    </HoverCard>
  );
}

export default memo(TeamCard);