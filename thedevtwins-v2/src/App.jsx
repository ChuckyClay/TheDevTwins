import Container from "./components/ui/Container";
import Input from "./components/ui/Input";
import Textarea from "./components/ui/Textarea";
import Button from "./components/ui/Button";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <Container className="max-w-xl">
        <div className="space-y-6">
          <Input
            id="name"
            label="Full Name"
            placeholder="John Doe"
          />

          <Input
            id="email"
            label="Email Address"
            type="email"
            placeholder="john@example.com"
          />

          <Textarea
            id="message"
            label="Message"
            placeholder="Tell us about your project..."
          />

          <Button fullWidth>
            Send Message
          </Button>
        </div>
      </Container>
    </main>
  );
}