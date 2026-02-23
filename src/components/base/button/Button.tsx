import type { FC } from "react";
import { cn } from "../../../utils/classnames";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.PropsWithChildren;

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    ghost: "btn-ghost",
    link: "btn-link",
  };

  return (
    <button className={cn(variantClasses[variant], "btn")} {...props}>
      {children}
    </button>
  );
};

export default Button;
