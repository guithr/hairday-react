import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

import { Skeleton } from "./skeleton";
import { textVariants } from "./text";

export const timeSelectVariants = tv({
  base: "h-10 py-2 px-4.5 text-gray-200 transition-colors cursor-pointer",

  variants: {
    variant: {
      none: "",
      primary:
        "bg-gray-600 hover:bg-gray-500 border border-gray-500 rounded-lg",
    },
    disabled: {
      true: "bg-transparent pointer-events-none border-gray-600 hover:bg-transparent text-gray-500",
      false: "",
    },
    selected: {
      true: " border-yellow pointer-events-none text-yellow",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    disabled: false,
    selected: false,
  },
});

export const timeSelectSkeletonVariants = tv({
  variants: {
    size: {
      md: "w-17.5 h-10",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface TimeSelectProps
  extends
    React.ComponentProps<"input">,
    Omit<VariantProps<typeof timeSelectVariants>, "disabled"> {
  children?: React.ReactNode;
  loading?: boolean;
}

export function TimeSelect({
  children,
  variant,
  disabled,
  selected,
  loading,
  className,
  ...props
}: TimeSelectProps) {
  if (loading) {
    return (
      <Skeleton
        className={twMerge(
          timeSelectVariants({ variant: "none" }),
          timeSelectSkeletonVariants({ size: "md" }),
          className,
        )}
      />
    );
  }

  return (
    <label
      className={twMerge(
        textVariants({ variant: "text-md" }),
        timeSelectVariants({
          variant,
          disabled,
          selected,
        }),
        className,
      )}
    >
      {children}
      <input type="radio" className="hidden" disabled={disabled} {...props} />
    </label>
  );
}
