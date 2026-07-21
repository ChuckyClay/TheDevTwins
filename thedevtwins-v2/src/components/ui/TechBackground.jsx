import cyberTechBackground from "@/assets/images/cyber-tech-background.png";

export default function TechBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-slate-950" />

      <div
        className="absolute inset-x-0 top-0 h-full w-full select-none bg-[length:100%_auto] opacity-50"
        style={{
          backgroundImage: `url(${cyberTechBackground})`,
          backgroundRepeat: "repeat-y",
          backgroundPosition: "top center",
          backgroundSize: "100% auto",
        }}
      />

      <div className="absolute inset-0 bg-slate-950/24" />

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-40 w-40 bg-cyan-400/5 blur-3xl"
      />
    </div>
  );
}