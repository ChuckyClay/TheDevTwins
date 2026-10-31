import {
  Floating,
  HoverCard,
} from "@/components/motion";

export default function HeroImage() {
  return (
    <Floating>

      <HoverCard>

        <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900 shadow-2xl shadow-cyan-500/10">

          <div className="flex items-center gap-2 border-b border-slate-800 px-6 py-4">

            <div className="h-3 w-3 rounded-full bg-red-500" />

            <div className="h-3 w-3 rounded-full bg-yellow-500" />

            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="ml-auto text-sm text-slate-500">
              DevTwins Terminal
            </span>

          </div>

          <div className="space-y-4 p-8 font-mono text-sm">

            <p className="text-cyan-400">
              $ npm run dev
            </p>

            <p className="text-green-400">
              ✓ React
            </p>

            <p className="text-green-400">
              ✓ Tailwind CSS
            </p>

            <p className="text-green-400">
              ✓ Node.js
            </p>

            <p className="text-green-400">
              ✓ Express.js
            </p>

            <p className="text-green-400">
              ✓ MySQL
            </p>

            <p className="text-green-400">
              ✓ Cybersecurity
            </p>

            <div className="pt-6">

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">

                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              </div>

              <p className="mt-3 text-xs text-slate-500">
                System Status • Online
              </p>

            </div>

          </div>

        </div>

      </HoverCard>

    </Floating>
  );
}