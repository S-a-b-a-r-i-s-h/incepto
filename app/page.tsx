import Benefits from "@/components/ui/Benefits";
import Footer from "@/components/ui/Footer";
import Sponsers from "@/components/ui/Sponsers";
import TextReveal from "@/components/ui/TextReveal";
import Timer from "@/components/ui/Timer";
import Track from "@/components/ui/Track";

 export default function Home() {
  return (
    <h1>
      <TextReveal />
      <Timer />
      <Track />
      <Benefits />
      <Sponsers />
      <Footer />
    </h1>
  );
}
