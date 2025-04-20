import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonPropTypes = {
   btnType?: ButtonHTMLAttributes<HTMLButtonElement>["type"]; // Type for button type (e.g., "button", "submit", "reset")
   btnClass?: string;
   icon?: ReactNode;
   text?: string;
};

const Button = ({
   btnType = "button",
   btnClass = "",
   icon,
   text,
}: ButtonPropTypes) => {
   return (
      <button type={btnType} className={btnClass}>
         {icon}
         {text}
      </button>
   );
};

export default Button;
