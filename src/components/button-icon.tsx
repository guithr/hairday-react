import { tv, type VariantProps } from "tailwind-variants";
import { Icon } from "./icon";

export const buttonIconContainerVariants = tv({
  base: `
    inline-flex items-center justify-center
    cursor-pointer bg-transparent group
    w-fit
    `,
});

export const buttonIconVariants = tv({
  base: `size-full fill-yellow group-hover:fill-yellow-dark transition`,
  variants: {
    size: {
      sm: "h-4 w-4",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface ButtonIconProps
  extends
    React.ComponentProps<"button">,
    VariantProps<typeof buttonIconContainerVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export function ButtonIcon({ icon, className, ...props }: ButtonIconProps) {
  return (
    <button className={buttonIconContainerVariants({ className })} {...props}>
      <Icon svg={icon} className={buttonIconVariants({ className })} />
    </button>
  );
}
