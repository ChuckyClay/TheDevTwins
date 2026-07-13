import Card from "@/components/ui/Card";

export default function TechnologyCard({ technology }) {
  return (
    <Card className="text-center">
      <h3 className="text-xl font-semibold text-white">
        {technology}
      </h3>
    </Card>
  );
}