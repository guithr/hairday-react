import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

import { Skeleton } from "./skeleton";
import { textVariants } from "./text";

export const timeSelectVariants = tv({
  base: "w-17.5 h-10 py-2 px-4.5 text-gray-200 transition-colors shrink-0 cursor-pointer",

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
  base: "w-17.5 h-10",
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
  onChange,
  ...props
}: TimeSelectProps) {
  if (loading) {
    return (
      <Skeleton className={twMerge(timeSelectSkeletonVariants(), className)} />
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
      <input
        {...props}
        type="radio"
        className="hidden"
        disabled={disabled}
        checked={!!selected}
        onChange={onChange ?? (() => {})}
      />
    </label>
  );
}
