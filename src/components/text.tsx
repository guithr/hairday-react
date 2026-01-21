import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const textVariants = tv({
  base: "font-sans",
  variants: {
    variant: {
      "title-lg": "text-2xl/8 leading-8 font-bold",
      "title-md": "text-base leading-6 font-bold",
      "title-sm": "text-sm leading-5 font-bold",
      "text-md": "text-base leading-6 font-normal",
      "text-sm": "text-sm leading-5 font-normal",
    },
  },
  defaultVariants: {
    variant: "text-md",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export function Text({
  as = "span",
  children,
  variant,
  className,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children,
  );
}
