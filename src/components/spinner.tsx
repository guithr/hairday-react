import { CircleNotchIcon } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

interface SpinnerProps {
  size?: number;
  className?: string;
}

export function Spinner({ size = 16, className }: SpinnerProps) {
  return (
    <CircleNotchIcon
      size={size}
      weight="bold"
      aria-hidden="true"
      className={twMerge("animate-spin fill-yellow", className)}
    />
  );
}
