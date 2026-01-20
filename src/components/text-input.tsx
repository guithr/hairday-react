import { tv } from "tailwind-variants";
import { Icon } from "./icon";

export const textInputContainerVariants = tv({
  base: `
   focus-within:border-yellow-dark
   flex items-center gap-2
   p-3 border border-gray-500 rounded-lg
   transition-colors
  `,
});

export const textIconInputVariants = tv({
  base: "size-5 fill-yellow",
});

export const textInputVariants = tv({
  base: "w-full outline-none text-gray-200 placeholder:text-gray-400",
  variants: {},
});

interface TextInputProps extends React.ComponentProps<"input"> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  containerClassName?: string;
  iconClassName?: string;
  inputClassName?: string;
}

export function TextInput({
  icon,
  containerClassName,
  iconClassName,
  inputClassName,
  ...props
}: TextInputProps) {
  return (
    <label
      className={textInputContainerVariants({ className: containerClassName })}
    >
      <Icon
        svg={icon}
        className={textIconInputVariants({ className: iconClassName })}
      />
      <input
        className={textInputVariants({ className: inputClassName })}
        {...props}
      />
    </label>
  );
}
