// ButtonGroup.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { useMenuContext } from '../../context/menuContext'; // Adjust the import path as necessary

const ButtonGroup: React.FC = () => {
  const { selectedIndex, setSelectedIndex } = useMenuContext();
  const buttonLabels = ["Appetizers", "Main Course", "Desserts", "Wine", "Specials"];

  return (
    <div className="flex space-x-4">
      {buttonLabels.map((label, index) => (
        <Button
          key={label}
          variant={selectedIndex === index ? "default" : "outline"}
          className={`${
            selectedIndex === index ? "bg-primary-800 text-secondary-50" : "bg-gray-200 text-black"
          }`}
          onClick={() => setSelectedIndex(index)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
