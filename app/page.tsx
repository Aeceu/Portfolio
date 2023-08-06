import Homepage from "@/components/pages/Home";
import Techpage from "@/components/pages/Tech";
import Projectspage from "@/components/pages/Projects";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center scroll-smooth">
      <Homepage />
      <Techpage />
      <Projectspage />
    </main>
  )
}
