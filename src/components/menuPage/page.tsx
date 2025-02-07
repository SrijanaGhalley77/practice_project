'use client';
import React from 'react';
import Header from "@/components/menuHead/page";
import Menu from "@/components/menu/page";
import { MenuProvider } from "../../context/menuContext/page";

const MenuPage: React.FC = () => {

    return (
        <MenuProvider>
        <main className="bg-secondary-50 flex flex-col gap-12">
          <Header />
          <Menu />
        </main>
      </MenuProvider>
    );
};

export default MenuPage;
