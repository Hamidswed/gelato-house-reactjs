import type { FC } from "react";
import { cn } from "src/utils/classnames";

type ButtonVariant = "contained" | "outline" | "ghost";
type ButtonColor = "primary" | "secondary" | "black";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.PropsWithChildren;

const colorVariantClasses: Record<
  ButtonVariant,
  Partial<Record<ButtonColor, string>>
> = {
  contained: {
    primary: "btn-contained-primary",
    secondary: "btn-contained-secondary",
  },
  outline: {
    primary: "btn-outline-primary",
    secondary: "btn-outline-secondary",
  },
  ghost: {
    primary: "btn-ghost-primary",
    secondary: "btn-ghost-secondary",
    black: "btn-ghost-black",
  },
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

const Button: FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const variantClasses = colorVariantClasses[variant];
  const colorClass =
    variantClasses[color] ??
    variantClasses.primary ??
    variantClasses.secondary ??
    "";

  return (
    <button
      className={cn("btn", colorClass, sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
