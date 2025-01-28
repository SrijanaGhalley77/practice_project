import SliderComponent from "@/components/slider/page";
import Header from "@/components/menuHeader/page";
import Menu from "@/components/menu/page";


export default function Home() {
  return (
    <main className="bg-secondary-50 flex flex-col gap-12">
      <Header />
      <Menu />
    </main>
      
  );
}
