import SliderComponent from "@/components/slider/page";
import Header from "@/components/menuHeader/page";


export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <SliderComponent />
    </main>
      
  );
}
