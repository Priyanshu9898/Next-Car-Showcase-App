import { CustomButtonProps } from "@/types/CustomButton";
import React from "react";

const CustomButton = ({title, buttonStyle, buttonType, handleClick }: CustomButtonProps) => {
  return (
    <button
        disabled={false}
      type={buttonType || "button"}
      className={buttonStyle}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
