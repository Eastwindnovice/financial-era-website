import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import CategoryCards from "@/components/home/CategoryCards";
import Dashboard from "@/components/home/Dashboard";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="bg-glow"></div>
      <Navbar />
      <main className="px-8 pt-10 pb-12 relative z-10">
        <Hero />
        <CategoryCards />
        <Dashboard />
      </main>
    </div>
  );
}
