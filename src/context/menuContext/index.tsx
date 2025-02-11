'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { menuData } from '../../contest/MenuData'; 

interface MenuContextType {
  selectedIndex: number;
  dataToPass: Array<{ name: string; price: string; image: { src: string; alt: string } }>;
  setSelectedIndex: (index: number) => void;
  selectedRowIndex: number | null; 
  setSelectedRowIndex: (index: number | null) => void;
  handleRowClick: (index: number) => void; 
  handleRowHover: (index: number) => void; 
  isDialogOpen: boolean;
  openDialog: (data: any) => void;
  closeDialog: () => void;
  dialogData: any;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dataToPass, setDataToPass] = useState(menuData.appetizers);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState<any>(null);
  
  const updateData = (index: number) => {
    switch (index) {
      case 0:
        setDataToPass(menuData.appetizers);
        break;
      case 1:
        setDataToPass(menuData.mainCourse);
        break;
      case 2:
        setDataToPass(menuData.desserts); 
        break;
      case 3:
        setDataToPass(menuData.wine); 
        break;
      case 4:
        setDataToPass(menuData.specials); 
        break;
      default:
        setDataToPass([]);
    }
  };

  const handleRowClick = (index: number) => {
    setSelectedRowIndex(index);
    openDialog(dataToPass[index]); // Pass the selected item data
};

  const handleRowHover = (index: number) => {
    setSelectedRowIndex(index);
  };

  const openDialog = (data: any) => {
    setDialogData(data); // Store the actual data instead of index
    setIsDialogOpen(true);
};

  const closeDialog = () => {
    setIsDialogOpen(false);
    setDialogData(null);
  };

  return (
    <MenuContext.Provider value={{
      selectedIndex,
      dataToPass,
      setSelectedIndex: (index) => {
        setSelectedIndex(index);
        updateData(index);
      },
      selectedRowIndex, 
      setSelectedRowIndex,
      handleRowClick,
      handleRowHover,
      isDialogOpen, // Added this line
      openDialog,
      closeDialog,
      dialogData // Added this line
    }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  return context;
};