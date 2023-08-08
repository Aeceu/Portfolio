import Homepage from "@/components/pages/Home";
import Techpage from "@/components/pages/Tech";
import Projectspage from "@/components/pages/Projects";

export default function Home() {
  return (
    <div className="w-full">
      <Homepage />
      <Techpage />
      <Projectspage />
    </div>
  )
}
