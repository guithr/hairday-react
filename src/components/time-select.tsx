import { tv, type VariantProps } from "tailwind-variants";
import { textVariants } from "./text";
import { twMerge } from "tailwind-merge";

export const timeSelectVariants = tv({
  base: `
    h-10 py-2 px-4.5 text-gray-200
    cursor-pointer transition-colors
  bg-gray-600 hover:bg-gray-500
    border border-gray-500 rounded-lg
   
    `,
  variants: {
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
    disabled: false,
    selected: false,
  },
});

interface TimeSelectProps
  extends
    React.ComponentProps<"input">,
    Omit<VariantProps<typeof timeSelectVariants>, "disabled"> {
  children?: React.ReactNode;
}

export function TimeSelect({
  children,
  disabled,
  selected,
  ...props
}: TimeSelectProps) {
  return (
    <label
      className={twMerge(
        timeSelectVariants({
          disabled,
          selected,
          className: textVariants({ variant: "text-md" }),
        }),
      )}
    >
      {children}
      <input type="radio" className="hidden" disabled={disabled} {...props} />
    </label>
  );
}
