import { Icon } from "./icon";
import { textVariants } from "./text";
import Calendar from "../assets/icons/CalendarBlank.svg?react";
import ChevronDown from "../assets/icons/CaretDown.svg?react";
import { tv, type VariantProps } from "tailwind-variants";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export const datePickerVariantsContainer = tv({
  base: `
        flex items-center justify-center gap-2 p-3
        border border-gray-500 focus-within:border-yellow-dark rounded-lg
        cursor-pointer transition-colors
     `,
});

export const datePickerVariantsIcon = tv({
  base: "size-5 fill-yellow",
});

export const datePickerVariantsInput = tv({
  base: `
  w-full outline-none
  [&::-webkit-calendar-picker-indicator]:hidden
  [&::-webkit-inner-spin-button]:hidden
  [&::-webkit-outer-spin-button]:hidden
  `,
});

interface DatePickerProps
  extends
    React.ComponentProps<"input">,
    VariantProps<typeof datePickerVariantsInput> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export function DatePicker({
  icon = Calendar,
  className,
  ...props
}: DatePickerProps) {
  const dateRef = useRef<HTMLInputElement>(null);

  const openDatePicker = () => {
    if (dateRef.current && typeof dateRef.current.showPicker === "function") {
      dateRef.current.showPicker();
    } else {
      dateRef.current?.focus();
    }
  };
  return (
    <button
      type="button"
      className={datePickerVariantsContainer({ className })}
      onClick={openDatePicker}
    >
      <Icon svg={icon} className={datePickerVariantsIcon({ className })} />
      <input
        ref={dateRef}
        type="date"
        className={twMerge(
          datePickerVariantsInput({
            className: twMerge(
              textVariants({ className: "text-gray-200" }),
              "max-w-24",
            ),
          }),
        )}
        min={new Date().toISOString().split("T")[0]}
        {...props}
      />
      <Icon svg={ChevronDown} className="ml-auto size-4 fill-gray-300" />
    </button>
  );
}
