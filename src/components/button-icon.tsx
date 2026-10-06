import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

import { Skeleton } from "./skeleton";
import { Icon } from "./icon";
import { Spinner } from "./spinner";

export const buttonIconVariants = tv({
  base: "inline-flex items-center justify-center group cursor-pointer shrink-0",

  variants: {
    size: {
      sm: "h-6 w-6",
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
  busy?: boolean;
}

export function ButtonIcon({
  icon,
  className,
  disabled,
  loading,
  busy,
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
      className={twMerge(
        buttonIconVariants({
          size,
          disabled,
          className,
        }),
        busy && "pointer-events-none",
      )}
      disabled={disabled || busy}
      aria-busy={busy}
      {...props}
    >
      {busy ? (
        <Spinner size={16} />
      ) : (
        <Icon
          svg={icon}
          className="size-4 fill-yellow group-hover:fill-yellow-dark"
        />
      )}
    </button>
  );
}
