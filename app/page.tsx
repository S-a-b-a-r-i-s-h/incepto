import About from "@/components/ui/About";
import Benefits from "@/components/ui/Benefits";
import Footer from "@/components/ui/Footer";
import Organizers from "@/components/ui/Organizers";
import Sponsers from "@/components/ui/Sponsers";
import TextReveal from "@/components/ui/TextReveal";
import Timeline from "@/components/ui/Timeline";
import Timer from "@/components/ui/Timer";
import Track from "@/components/ui/Track";

 export default function Home() {
  return (
    <h1>
      <About />
      <TextReveal />
      <Timer />
      <Track />
      <Timeline />
      <Benefits />
      {/* <Sponsers /> */}
      <Organizers />
      <Footer />
    </h1>
  );
}
