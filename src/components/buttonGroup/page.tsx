import React, { useState } from "react";
import { Button } from "@/components/ui/button";


const ButtonGroup: React.FC = () => {
  const buttonLabels = ["Appetizers", "Main Course", "Desserts", "Wine", "Specials"];
  const [selected, setSelected] = useState(buttonLabels[0]); // Set the first button as default selected

  const handleSelect = (label: string) => {
    setSelected(label);
  };

  return (
    <div className="flex space-x-4">
      {buttonLabels.map((label) => (
        <Button
          key={label}
          variant={selected === label ? "default" : "outline"} // Change variant based on selection
          className={`${
            selected === label ? "bg-primary-800 text-secondary-50" : "bg-gray-200 text-black"
          }`} // Set background and text color for the selected button
          onClick={() => handleSelect(label)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
