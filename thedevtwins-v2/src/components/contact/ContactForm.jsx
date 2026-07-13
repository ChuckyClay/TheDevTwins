import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import FormField from "@/components/contact/FormField";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend integration will be added later
    console.log("Form submitted.");
  };

  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          title="Send Us a Message"
          subtitle="Tell us about your project and we'll get back to you as soon as possible."
        />

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-3xl space-y-6"
        >
          <FormField
            id="name"
            label="Full Name"
            placeholder="John Doe"
            required
          />

          <FormField
            id="email"
            type="email"
            label="Email Address"
            placeholder="john@example.com"
            required
          />

          <FormField
            id="subject"
            label="Subject"
            placeholder="Project Inquiry"
            required
          />

          <FormField
            id="message"
            type="textarea"
            label="Message"
            placeholder="Tell us about your project..."
            rows={7}
            required
          />

          <Button type="submit">
            Send Message
          </Button>
        </form>

      </Container>
    </section>
  );
}