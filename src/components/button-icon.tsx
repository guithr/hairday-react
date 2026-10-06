import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

import { Skeleton } from "./skeleton";
import { Icon } from "./icon";

export const buttonIconVariants = tv({
  base: "inline-flex items-center justify-center group w-fit cursor-pointer",

  variants: {
    size: {
      sm: "h-4 w-4",
    },

    disabled: {
      true: "opacity-30 pointer-events-none",
      false: "",
    },
  },

  defaultVariants: {
    size: "sm",
    disabled: false,
  },
});

interface ButtonIconProps
  extends
    Omit<React.ComponentProps<"button">, "disabled" | "size">,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
}

export function ButtonIcon({
  icon,
  className,
  disabled,
  loading,
  size,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={twMerge(
          buttonIconVariants({
            size,
          }),
          className,
        )}
      />
    );
  }

  return (
    <button
      className={buttonIconVariants({
        size,
        disabled,
        className,
      })}
      disabled={disabled}
      {...props}
    >
      <Icon
        svg={icon}
        className="size-4 fill-yellow group-hover:fill-yellow-dark"
      />
    </button>
  );
}
