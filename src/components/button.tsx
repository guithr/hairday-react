import { tv, type VariantProps } from "tailwind-variants";
import { Text } from "./text";

export const buttonVariants = tv({
  base: `
   flex items-center justify-center
   rounded-lg cursor-pointer transition
   `,
  variants: {
    variant: {
      primary:
        "bg-yellow border-2 border-transparent hover:border-yellow-light",
    },
    size: {
      md: "h-14 py-4.5 px-4",
    },
    handling: {
      true: "pointer-events-none",
    },
    disabled: {
      true: "opacity-30 pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    handling: false,
    disabled: false,
  },
});

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "disabled" | "size">,
    VariantProps<typeof buttonVariants> {}

export function Button({
  children,
  variant,
  size,
  disabled,
  handling,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({
        variant,
        size,
        disabled,
        handling,
        className,
      })}
      {...props}
    >
      <Text variant="title-sm" className="uppercase text-gray-900 ">
        {children}
      </Text>
    </button>
  );
}
