import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="flex min-h-[80vh] items-center justify-center">
        <h1 className="text-5xl font-bold">
          The DevTwins
        </h1>
      </main>

      <Footer />
    </div>
  );
}