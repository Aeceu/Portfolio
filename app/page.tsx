import Homepage from "@/components/pages/Home";
import Techpage from "@/components/pages/Tech";
import Projectspage from "@/components/pages/Projects";
import AboutPage from "@/components/pages/About";
import Contact from "@/components/pages/Contact";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Homepage />
      <AboutPage />
      <Techpage />
      <Projectspage />
      <Contact />
    </div>
  );
}
