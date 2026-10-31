import { Outlet } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TechBackground from "@/components/ui/TechBackground";

export default function MainLayout() {
  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-x-hidden bg-slate-950 text-white">

      <TechBackground />

      <div className="relative z-10 flex min-h-screen flex-col">

        <Navbar />

        <main className="relative z-10 flex-1">
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  );
}