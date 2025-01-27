// "use client";
import React from 'react';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";

const Header: React.FC = () => {
  return (
    <div >
        <Menubar className="flex justify-center font-roboto w-svw">
            <MenubarMenu>
                <MenubarTrigger>About Us</MenubarTrigger>
                {/* <MenubarContent>
                    <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                </MenubarContent> */}
                <MenubarTrigger>Menu</MenubarTrigger>
                <MenubarTrigger>Contacts</MenubarTrigger>
                <MenubarTrigger>Reservations</MenubarTrigger>
                <MenubarTrigger>Shops</MenubarTrigger>
                <MenubarTrigger>News</MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    </div>
  );
};

export default Header;