import type { FC } from "react";

type LogoProps = {
  size?: "sm" | "md" | "lg";
};
const sizes = {
  sm: { width: 60, height: 60 },
  md: { width: 120, height: 120 },
  lg: { width: 180, height: 180 },
};

const Logo: FC<LogoProps> = ({ size = "sm" }) => {
  return (
    <img
      src="/assets/images/logo.png"
      width={sizes[size].width}
      height={sizes[size].height}
    />
  );
};

export default Logo;
