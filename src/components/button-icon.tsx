import { tv, type VariantProps } from "tailwind-variants";
import { Icon } from "./icon";

export const buttonIconContainerVariants = tv({
  base: `
    inline-flex items-center justify-center
    cursor-pointer bg-transparent group size-4
    `,
});

export const buttonIconVariants = tv({
  base: `size-full fill-yellow group-hover:fill-yellow-dark transition-colors`,
});

interface ButtonIconProps
  extends
    React.ComponentProps<"button">,
    VariantProps<typeof buttonIconContainerVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  buttonClassName?: string;
  iconClassName?: string;
  ariaLabel: string;
}

export function ButtonIcon({
  icon,
  iconClassName,
  buttonClassName,
  ariaLabel,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={buttonIconContainerVariants({ className: buttonClassName })}
      {...props}
      type="button"
      aria-label={ariaLabel}
    >
      <Icon
        svg={icon}
        className={buttonIconVariants({ className: iconClassName })}
      ></Icon>
    </button>
  );
}
