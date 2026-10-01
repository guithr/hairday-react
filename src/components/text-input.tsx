import { twMerge } from "tailwind-merge";
import { textVariants } from "./text";
import { tv } from "tailwind-variants";
import { Icon } from "./icon";

export const textInputContainerVariants = tv({
  base: `
   flex items-center gap-2 p-3 transition
   border border-gray-500 rounded-lg
 focus-within:border-yellow-dark
  `,
});

export const textIconInputVariants = tv({
  base: "size-5 fill-yellow",
});

export const textInputVariants = tv({
  base: "w-full outline-none text-gray-200 placeholder:text-gray-400",
});

interface TextInputProps extends React.ComponentProps<"input"> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export function TextInput({ icon, className, ...props }: TextInputProps) {
  return (
    <label className={textInputContainerVariants()}>
      <Icon svg={icon} className={textIconInputVariants()} />
      <input
        type="text"
        className={twMerge(
          textVariants({ variant: "text-md" }),
          textInputVariants(),
        )}
        {...props}
      />
    </label>
  );
}
