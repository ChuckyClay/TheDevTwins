import { useState } from "react";

import {
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  Send,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import FormField from "./FormField";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(form);

    // Backend integration later
  }

  return (
    <section className="py-28">

      <Container>

        <SectionTitle
          title="Let's Discuss Your Project"
          subtitle="Fill out the form below and we'll get back to you as soon as possible."
        />

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-14 max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm md:p-10"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <FormField
              icon={User}
              name="name"
              label="Full Name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />

            <FormField
              icon={Mail}
              name="email"
              type="email"
              label="Email Address"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <FormField
              icon={Phone}
              name="phone"
              label="Phone Number"
              placeholder="+254..."
              value={form.phone}
              onChange={handleChange}
            />

            <FormField
              icon={Briefcase}
              type="select"
              name="service"
              label="Service Needed"
              value={form.service}
              onChange={handleChange}
              required
              options={[
                "Website",
                "Web Application",
                "Backend Development",
                "UI/UX Design",
                "Cybersecurity",
                "Networking",
                "Maintenance",
                "Other",
              ]}
            />

          </div>

          <div className="mt-6">

            <FormField
              icon={MessageSquare}
              type="textarea"
              name="message"
              label="Project Details"
              placeholder="Tell us about your project..."
              rows={7}
              value={form.message}
              onChange={handleChange}
              required
            />

          </div>

          <div className="mt-10">

            <Button
              type="submit"
              className="flex items-center gap-3"
            >
              <Send size={18} />
              Send Message
            </Button>

          </div>

        </form>

      </Container>

    </section>
  );
}