import { tv, type VariantProps } from "tailwind-variants";

import { Text } from "./text";

export const buttonVariants = tv({
  base: `
   flex items-center justify-center
   rounded-lg cursor-pointer transition
   `,
  variants: {
    variant: {
      none: "",
      primary:
        "bg-yellow border-2 border-transparent hover:border-yellow-light",
      danger: "bg-red-500 border-2 border-transparent hover:border-red-600",
      succes: "bg-green-500 border-2 border-transparent hover:border-green-600",
    },

    size: {
      sm: "h-10 py-2 px-3",
      md: "h-14 py-4.5 px-4",
    },

    handling: {
      true: "pointer-events-none",
      false: "",
    },

    disabled: {
      true: "opacity-30 pointer-events-none",
      false: "",
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
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export function Button({
  children,
  variant,
  size,
  disabled,
  handling,
  loading,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      aria-busy={loading}
      className={buttonVariants({
        variant,
        size,
        disabled,
        handling: handling || loading,
        className,
      })}
      {...props}
    >
      <Text
        variant="title-sm"
        className={loading ? "uppercase text-gray-900/70" : "uppercase text-gray-900"}
      >
        {children}
      </Text>
    </button>
  );
}
