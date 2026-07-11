import Card from "@/components/ui/Card";

export default function TestimonialCard({ testimonial }) {
  return (
    <Card>
      <p className="leading-7 text-slate-400">
        "{testimonial.message}"
      </p>

      <div className="mt-6 border-t border-slate-800 pt-4">
        <h3 className="font-semibold text-white">
          {testimonial.name}
        </h3>

        <p className="text-sm text-cyan-400">
          {testimonial.role}
        </p>
      </div>
    </Card>
  );
}