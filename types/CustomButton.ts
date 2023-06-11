import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    buttonStyle?: string;
    buttonType?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}