import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <h1 className="text-7xl font-bold text-cyan-400">404</h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-slate-400">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to={ROUTES.HOME}
        className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-600"
      >
        Back to Home
      </Link>
    </main>
  );
}