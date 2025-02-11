import Slider from "../components/slider"
import Header from "@/components/menuHeader";

export default function Home() {
  return (
      <main className="bg-secondary-50 flex flex-col ">

        <Header />
        <Slider />
      </main>
  );
}
