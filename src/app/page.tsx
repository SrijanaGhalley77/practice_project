
import Header from "@/components/menuHeader/page";
import Menu from "@/components/menu/page";
import {MenuProvider} from "../context/menuContext/page"


export default function Home() {
  return (
    <MenuProvider>
      <main className="bg-secondary-50 flex flex-col gap-12">
        <Header />
        <Menu />
      </main>
    </MenuProvider>
      
  );
}
