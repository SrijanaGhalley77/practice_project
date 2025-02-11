import React from 'react';
import Header from "@/components/menuHead";
import Menu from "@/components/menu/page";
import { MenuProvider } from "../../../context/menuContext";

function Page() {

    return (
        <MenuProvider>
        <div className="bg-secondary-50 flex flex-col gap-12">
          <Header />
          <Menu />
        </div>
      </MenuProvider>
    );
};

export default Page;
