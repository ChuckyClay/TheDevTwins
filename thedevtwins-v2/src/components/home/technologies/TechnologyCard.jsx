import Card from "@/components/ui/Card";

export default function TechnologyCard({ technology }) {
  return (
    <Card className="text-center">
      <h3 className="text-xl font-semibold text-white">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm text-cyan-400">
        {technology.category}
      </p>
    </Card>
  );
}